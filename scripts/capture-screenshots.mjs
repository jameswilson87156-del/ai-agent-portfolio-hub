import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const imageDir = path.join(root, 'docs', 'images')
const largeImageDir = path.join(imageDir, 'large')

const viewports = [
  {
    path: path.join(imageDir, 'portfolio-home.png'),
    width: 1440,
    height: 900,
  },
  {
    path: path.join(largeImageDir, 'portfolio-home.png'),
    width: 1920,
    height: 1080,
  },
]

async function launchBrowser() {
  const attempts = [
    { channel: 'msedge' },
    { channel: 'chrome' },
    {},
  ]

  let lastError

  for (const options of attempts) {
    try {
      return await chromium.launch({
        headless: true,
        ...options,
      })
    } catch (error) {
      lastError = error
    }
  }

  throw lastError
}

await mkdir(imageDir, { recursive: true })
await mkdir(largeImageDir, { recursive: true })

const server = await createServer({
  root,
  logLevel: 'error',
  server: {
    host: '127.0.0.1',
    port: 4177,
    strictPort: false,
  },
})

let browser

try {
  await server.listen()
  const url = server.resolvedUrls?.local[0] ?? 'http://127.0.0.1:4177/'
  browser = await launchBrowser()

  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: {
        width: viewport.width,
        height: viewport.height,
      },
      deviceScaleFactor: 1,
    })

    await page.goto(url, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(900)
    await page.screenshot({ path: viewport.path, fullPage: false })
    await page.close()
  }

  console.log(`Captured ${viewports.length} screenshots from ${url}`)
} finally {
  await browser?.close()
  await server.close()
}
