import type { StaticImageData } from "next/image";

type ImageContext = { keys(): string[]; (key: string): { default: StaticImageData } };
declare const require: { context(dir: string, deep: boolean, filter: RegExp): ImageContext };

const ctx = require.context("../assets/images", false, /\.(jpe?g|png|webp|gif|avif)$/i);

// webpack lists each file twice, as "./x.jpg" and "assets/images/x.jpg".
const imageMap: Record<string, StaticImageData> = Object.fromEntries(
  ctx
    .keys()
    .filter((key) => key.startsWith("./"))
    .map((key) => [`/assets/images/${key.slice(2)}`, ctx(key).default]),
);

// Paths the map doesn't know (an upload since the last build) fall back to the raw string.
export function resolveImage(path: string): StaticImageData | string {
  return imageMap[path] ?? path;
}
