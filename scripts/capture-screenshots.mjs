import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const imageDir = path.join(root, 'docs', 'images')
const largeImageDir = path.join(imageDir, 'large')

const captures = [
  {
    route: '/',
    path: path.join(imageDir, 'portfolio-home.png'),
    width: 1440,
    height: 900,
  },
  {
    route: '/',
    path: path.join(largeImageDir, 'portfolio-home.png'),
    width: 1920,
    height: 1080,
  },
  {
    route: '/projects',
    path: path.join(imageDir, 'projects-overview.png'),
    width: 1440,
    height: 900,
    fullPage: true,
  },
  {
    route: '/projects',
    path: path.join(largeImageDir, 'projects-overview.png'),
    width: 1920,
    height: 1080,
    fullPage: true,
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

  for (const capture of captures) {
    const page = await browser.newPage({
      viewport: {
        width: capture.width,
        height: capture.height,
      },
      deviceScaleFactor: 1,
    })

    const captureUrl = new URL(capture.route, url).toString()

    await page.goto(captureUrl, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(900)
    await page.screenshot({ path: capture.path, fullPage: capture.fullPage ?? false })
    await page.close()
  }

  console.log(`Captured ${captures.length} screenshots from ${url}`)
} finally {
  await browser?.close()
  await server.close()
}
