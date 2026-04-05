/**
 * One-off: reads src/assets/logo.jpeg and writes src/assets/logo.png
 * with very light / white pixels made transparent. Re-run after updating the JPEG.
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const input = join(root, 'src', 'assets', 'logo.jpeg')
const output = join(root, 'src', 'assets', 'logo.png')

const WHITE = 248 // treat as background (tune if logo edges look wrong)

const image = sharp(input).ensureAlpha()
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true })
const { width, height, channels } = info
const out = Buffer.from(data)

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels
    const r = out[i]
    const g = out[i + 1]
    const b = out[i + 2]
    // Near-neutral light pixels (typical flat white JPEG background)
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const neutral = max - min < 35
    if (neutral && r >= WHITE && g >= WHITE && b >= WHITE) {
      out[i + 3] = 0
    }
  }
}

await sharp(out, { raw: { width, height, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(output)

console.log('Wrote', output)
