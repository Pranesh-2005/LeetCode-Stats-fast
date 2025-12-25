import { generate } from "./src/index";

async function test() {
  try {
    const svg = await generate({
      username: "jacoblincool",
      theme: "light", 
      animation: true,
      width: 500,
      height: 200,
      extensions: [],
    });
    console.log("SVG generated successfully:", svg.length, "characters");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

test();