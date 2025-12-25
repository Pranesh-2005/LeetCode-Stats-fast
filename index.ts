import generate from "./src/index";

export default async function handler(req: any, res: any) {
  try {
    const url = new URL(req.url, "http://localhost");
    const params = url.searchParams;

    const svg = await generate({
      username: params.get("username") ?? "selva19",
      theme: params.get("theme") ?? "light",
      animation: params.get("animation") !== "false",
      width: Number(params.get("width") ?? 500),
      height: Number(params.get("height") ?? 200)
      // ❗ DO NOT pass `extensions`
    });

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, s-maxage=1800");
    res.status(200).send(svg);
  } catch (err: any) {
    res.status(500).send(
      `<svg xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="20">${err?.message ?? "Internal Error"}</text>
      </svg>`
    );
  }
}
