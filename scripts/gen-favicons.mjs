/* Generates raster favicons (PNG + .ico) from public/favicon.svg.
 * Run with:  node scripts/gen-favicons.mjs
 * Requires `sharp` (already installed as an Astro dependency). */

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const svg = readFileSync(join(pub, 'favicon.svg'));

async function png(size) {
  return sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();
}

/** Build a minimal .ico that embeds PNG images (supported by all modern browsers). */
function buildIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  const entries = [];
  const payloads = [];
  let offset = 6 + count * 16;

  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset
    offset += data.length;
    entries.push(entry);
    payloads.push(data);
  }

  return Buffer.concat([header, ...entries, ...payloads]);
}

const sizes = [16, 32, 48, 180];
const buffers = Object.fromEntries(await Promise.all(sizes.map(async (s) => [s, await png(s)])));

writeFileSync(join(pub, 'favicon-16.png'), buffers[16]);
writeFileSync(join(pub, 'favicon-32.png'), buffers[32]);
writeFileSync(join(pub, 'apple-touch-icon.png'), buffers[180]);
writeFileSync(
  join(pub, 'favicon.ico'),
  buildIco([
    { size: 16, data: buffers[16] },
    { size: 32, data: buffers[32] },
    { size: 48, data: buffers[48] },
  ]),
);

console.log('Favicons generated: favicon.ico, favicon-16.png, favicon-32.png, apple-touch-icon.png');
