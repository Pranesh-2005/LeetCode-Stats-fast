import { Generator } from "./card.js";
import { ActivityExtension } from "./exts/activity.js";
import { AnimationExtension } from "./exts/animation.js";
import { ContestExtension } from "./exts/contest.js";
import { FontExtension } from "./exts/font.js";
import { HeatmapExtension } from "./exts/heatmap.js";
import { RemoteStyleExtension } from "./exts/remote-style.js";
import { ThemeExtension, supported } from "./exts/theme.js";
import type { Config } from "./types.js"; // Use 'type' import for interfaces

/**
 * Generate a card.
 * @param config The configuration of the card
 * @returns The card (svg)
 */
export async function generate(config: Partial<Config>): Promise<string> {
  const generator = new Generator();

  return await generator.generate({
    username: "pranesh_2005",
    site: "us",

    width: 500,
    height: 200,
    css: [],

    // ✅ API decides everything
    ...config,

    // ✅ Safe defaults only if API did NOT send them
    extensions:
      config.extensions ??
      [FontExtension, AnimationExtension, ThemeExtension],

    theme: config.theme ?? "light",
    font: config.font ?? "baloo_2",
    animation: config.animation ?? true,
  });
}

export default generate;
export {
    ActivityExtension,
    AnimationExtension,
    type Config, // Export as type
    ContestExtension,
    FontExtension,
    Generator,
    HeatmapExtension,
    RemoteStyleExtension,
    ThemeExtension,
    supported,
};