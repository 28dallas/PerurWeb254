import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim();
const apiVersion = process.env.SANITY_API_VERSION || "2025-01-01";
const validProjectId = projectId && /^[a-z0-9-]+$/.test(projectId) ? projectId : null;
const validDataset = dataset && /^[a-z0-9_]+$/.test(dataset) ? dataset : null;
const disableSanity = true;

export const hasSanityConfig = !disableSanity && Boolean(validProjectId && validDataset);

if (!disableSanity && ((projectId && !validProjectId) || (dataset && !validDataset))) {
  console.warn("Invalid Sanity env configuration detected. Falling back to local fallback content.");
}

export const sanityClient = createClient({
  // Use safe defaults so invalid env values do not crash app initialization.
  projectId: validProjectId || "demo1234",
  dataset: validDataset || "production",
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
