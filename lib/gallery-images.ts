import { readdirSync } from "fs";
import path from "path";
import { siteImages } from "@/lib/site-images";

const SUPPORTED_IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export function getRayImages() {
  const raysDirectory = path.join(process.cwd(), "public", "images", "rays");

  try {
    return readdirSync(raysDirectory, { withFileTypes: true })
      .filter((entry) => entry.isFile() && SUPPORTED_IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => `/images/rays/${entry.name}`)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

export function getGalleryImages() {
  const images = [...getRayImages(), ...siteImages.gallery];
  return Array.from(new Set(images));
}
