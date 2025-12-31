import { Redis } from "@upstash/redis";
import generate, {
  ActivityExtension,
  HeatmapExtension,
  ContestExtension,
} from "./src/index.js";

const redis = Redis.fromEnv();

const WINDOW_SECONDS = 60;   // 1 minute
const MAX_REQUESTS = 60;    // per IP per minute

// --------------------
// Extension resolver
// --------------------
function resolveExtensions(extParam: string | null) {
  const exts = new Set(
    (extParam ?? "")
      .split(",")
      .map(e => e.trim().toLowerCase())
      .filter(Boolean)
  );

  const extensions = [];

  if (exts.has("activity")) extensions.push(ActivityExtension);
  if (exts.has("heatmap")) extensions.push(HeatmapExtension);
  if (exts.has("contest")) extensions.push(ContestExtension);

  // ext=all shortcut
  if (exts.has("all")) {
    extensions.push(
      ActivityExtension,
      HeatmapExtension,
      ContestExtension
    );
  }

  return extensions;
}

// --------------------
// Main handler
// --------------------
export default async function handler(req: any, res: any) {
  try {
    // ✅ Skip rate-limit if served from cache
    if (req.headers["x-vercel-cache"] === "HIT") {
      return serveSVG(req, res);
    }

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ??
      req.socket?.remoteAddress ??
      "unknown";

    const key = `rl:${ip}`;

    const count = await redis.incr(key);
    if (count === 1) {
      await redis.expire(key, WINDOW_SECONDS);
    }

    const remaining = Math.max(0, MAX_REQUESTS - count);
    const reset = Math.floor(Date.now() / 1000) + WINDOW_SECONDS;

    res.setHeader("X-RateLimit-Limit", MAX_REQUESTS);
    res.setHeader("X-RateLimit-Remaining", remaining);
    res.setHeader("X-RateLimit-Reset", reset);

    if (count > MAX_REQUESTS) {
      res.setHeader("Retry-After", WINDOW_SECONDS);
      res.status(429).setHeader("Content-Type", "image/svg+xml");
      return res.send(`
        <svg xmlns="http://www.w3.org/2000/svg" width="420" height="40">
          <text x="10" y="25" font-size="14">
            Rate limit exceeded — try again later
          </text>
        </svg>
      `);
    }

    return serveSVG(req, res);

  } catch (err: any) {
    res.status(500).setHeader("Content-Type", "image/svg+xml");
    return res.send(`
      <svg xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="20">
          ${err?.message ?? "Internal Error"}
        </text>
      </svg>
    `);
  }
}

// --------------------
// SVG generator logic
// --------------------
async function serveSVG(req: any, res: any) {
  const url = new URL(req.url, "http://localhost");
  const params = url.searchParams;

  const extensions = resolveExtensions(params.get("ext"));

  const svg = await generate({
    username: params.get("username") ?? "pranesh_s_2005",
    site: params.get("site") ?? "us",

    width: Number(params.get("width") ?? 500),
    height: Number(params.get("height") ?? 200),

    theme: params.get("theme") ?? "light",
    font: params.get("font") ?? "baloo_2",
    animation: params.get("animation") !== "false",

    // 🔥 THIS is the key
    extensions,
  });

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=1800, s-maxage=1800");
  res.status(200).send(svg);
}