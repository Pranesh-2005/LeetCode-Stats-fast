import { Redis } from "@upstash/redis";
import generate, {
  HeatmapExtension,
  ActivityExtension,
  ContestExtension,
  FontExtension,
  ThemeExtension,
  AnimationExtension,
} from "./src/index.js";

const redis = Redis.fromEnv();

const WINDOW_SECONDS = 60;   // 1 minute
const MAX_REQUESTS = 60;    // per IP per minute

export default async function handler(req: any, res: any) {
  try {
    // ✅ PRO TIP: skip rate limit if served from cache
    if (req.headers["x-vercel-cache"] === "HIT") {
      return serveSVG(req, res);
    }

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ??
      req.socket?.remoteAddress ??
      "unknown";

    const key = `rl:${ip}`;

    // ---- Redis rate limiting ----
    const count = await redis.incr(key);

    if (count === 1) {
      await redis.expire(key, WINDOW_SECONDS);
    }

    const remaining = Math.max(0, MAX_REQUESTS - count);
    const reset = Math.floor(Date.now() / 1000) + WINDOW_SECONDS;

    // ✅ Rate-limit headers
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

    // ---- Normal response ----
    return serveSVG(req, res);

  } catch (err: any) {
    res.status(500).send(`
      <svg xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="20">${err?.message ?? "Internal Error"}</text>
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

  // parse requested extensions (comma-separated, case-insensitive)
  const extParam = (params.get("ext") ?? params.get("extensions") ?? "").trim();
  const requested = extParam ? extParam.split(",").map(s => s.trim().toLowerCase()) : [];

  const extMap: Record<string, any> = {
    heatmap: HeatmapExtension,
    activity: ActivityExtension,
    contest: ContestExtension,
    font: FontExtension,
    theme: ThemeExtension,
    animation: AnimationExtension,
  };

  // start with defaults then add any requested extras (dedupe)
  const defaults = [FontExtension, AnimationExtension, ThemeExtension];
  const extras = requested.map(name => extMap[name]).filter(Boolean);
  const extensions = Array.from(new Set([...defaults, ...extras]));

  const svg = await generate({
    username: params.get("username") ?? "pranesh_s_2005",
    theme: params.get("theme") ?? "light",
    animation: params.get("animation") !== "false",
    width: Number(params.get("width") ?? 500),
    height: Number(params.get("height") ?? 200),
    extensions,
  });

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=1800, s-maxage=1800");
  res.status(200).send(svg);
}