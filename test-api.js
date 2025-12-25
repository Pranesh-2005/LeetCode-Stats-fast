import { generate } from "./dist/index.js";

async function test() {
  try {
    const svg = await generate({
      username: "jacoblincool",
      theme: "light", 
      animation: true,
      width: 500,
      height: 200,
      extensions: [], // No extensions to avoid font loading
    });
    console.log("SVG generated successfully:", svg.length, "characters");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

test();