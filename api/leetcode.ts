import { generate } from "../src/index";

export default async function handler(req: any, res: any) {
  try {
    const url = new URL(
      req.url ?? "/api/leetcode",
      "http://localhost"
    );
    const params = url.searchParams;

    const username = params.get("username") ?? "selva19";
    const theme = params.get("theme") ?? "light";
    const animation = params.get("animation") !== "false";
    const width = Number(params.get("width") ?? 500);
    const height = Number(params.get("height") ?? 200);

    const svg = await generate({
      username,
      theme,
      animation,
      width,
      height,
    });

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, s-maxage=1800");
    res.status(200).send(svg);
  } catch (err: any) {
    res.status(500).send(
      `<svg xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="20">${err.message}</text>
      </svg>`
    );
  }
}