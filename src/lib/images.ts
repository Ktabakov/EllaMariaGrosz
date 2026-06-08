import type { ImageMetadata } from 'astro';

/**
 * Image resolvers.
 *
 * To add an image, just drop the file into the matching folder:
 *   - Paintings → src/assets/images/paintings/
 *   - News / press / exhibitions → src/assets/images/updates/
 *
 * Then reference it from the data files by its FILE NAME only,
 * e.g. image: 'sunrise.webp'. Astro automatically optimizes it.
 *
 * Recommended format: .webp or .jpg (large but compressed, ~2000px wide).
 */

const paintingGlob = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/paintings/*.{webp,jpg,jpeg,png,avif}',
  { eager: true },
);

const updateGlob = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/updates/*.{webp,jpg,jpeg,png,avif}',
  { eager: true },
);

function toMap(glob: Record<string, { default: ImageMetadata }>): Map<string, ImageMetadata> {
  const map = new Map<string, ImageMetadata>();
  for (const [path, mod] of Object.entries(glob)) {
    const filename = path.split('/').pop();
    if (filename) map.set(filename, mod.default);
  }
  return map;
}

const paintingImages = toMap(paintingGlob);
const updateImages = toMap(updateGlob);

export function getPaintingImage(filename: string | undefined): ImageMetadata | undefined {
  if (!filename) return undefined;
  const img = paintingImages.get(filename);
  if (!img && import.meta.env.DEV) {
    console.warn(`[images] Painting image not found: "${filename}". Add it to src/assets/images/paintings/`);
  }
  return img;
}

export function getUpdateImage(filename: string | undefined): ImageMetadata | undefined {
  if (!filename) return undefined;
  const img = updateImages.get(filename);
  if (!img && import.meta.env.DEV) {
    console.warn(`[images] Update image not found: "${filename}". Add it to src/assets/images/updates/`);
  }
  return img;
}
