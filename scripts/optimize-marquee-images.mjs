/**
 * Optimize marquee photos for the home page scrolling banner.
 *
 * Resizes all images referenced in src/data/marqueePhotos.ts to 800px wide
 * (2× retina for the 384px tile) and converts to WebP.
 *
 * Usage:
 *   npm install -D sharp
 *   node scripts/optimize-marquee-images.mjs
 *   npm uninstall sharp   # optional — sharp is only needed for this script
 *
 * The source images in public/images/ are unchanged. Optimized copies
 * are written to public/images/marquee/optimized/.
 *
 * When adding new marquee photos, just update marqueePhotos.ts and re-run
 * this script. It skips files that are already optimized.
 */

import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Read the source data file to get the list of images
const dataPath = path.join(root, "src", "data", "marqueePhotos.ts");
const dataSource = await readFile(dataPath, "utf8");

// Extract image paths from the string array (matches lines like `"/images/..."`)
const photoPaths = [...dataSource.matchAll(/"(\/images\/[^"]+)"/g)].map((m) => m[1]);

const outDir = path.join(root, "public", "images", "marquee", "optimized");
const results = { ok: 0, skip: 0, fail: 0 };

for (const [i, src] of photoPaths.entries()) {
  const srcPath = path.join(root, "public", ...src.split("/").filter(Boolean));
  const outName = `marquee-${String(i).padStart(2, "0")}.webp`;
  const outPath = path.join(outDir, outName);

  // Skip if already exists and is newer than source
  try {
    const [srcStat, outStat] = await Promise.all([
      readFile(srcPath).then((b) => b.length),
      readFile(outPath).then((b) => b.length).catch(() => 0),
    ]);
    if (outStat > 0 && outStat < srcStat) {
      console.log(`  SKIP  ${outName} (already optimized)`);
      results.skip++;
      continue;
    }
  } catch {
    // Source doesn't exist — warn and skip
    console.warn(`  WARN  ${src} — file not found, skipping`);
    results.skip++;
    continue;
  }

  try {
    await sharp(srcPath)
      .resize(800, undefined, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, effort: 4 })
      .toFile(outPath);
    console.log(`  OK    ${outName} ← ${src}`);
    results.ok++;
  } catch (err) {
    console.error(`  FAIL  ${outName} (${src}): ${err.message}`);
    results.fail++;
  }
}

console.log(`\nDone: ${results.ok} optimized, ${results.skip} skipped, ${results.fail} failed`);
