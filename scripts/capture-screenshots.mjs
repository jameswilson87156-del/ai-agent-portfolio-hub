import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const imageDir = path.join(root, 'docs', 'images')
const largeImageDir = path.join(imageDir, 'large')
const mobileImageDir = path.join(imageDir, 'mobile')
const reviewImageDir = path.join(imageDir, 'review')

const routes = [
  '/',
  '/projects',
  '/projects/devflow',
  '/projects/ticket-rag',
  '/projects/promptops',
  '/projects/offerflow',
  '/projects/mcp-gateway',
]

const captures = [
  {
    route: '/',
    path: path.join(imageDir, 'home.png'),
    width: 1440,
    height: 900,
  },
  {
    route: '/',
    path: path.join(imageDir, 'portfolio-home.png'),
    width: 1440,
    height: 900,
  },
  {
    route: '/',
    path: path.join(reviewImageDir, 'home-1366x768.png'),
    width: 1366,
    height: 768,
  },
  {
    route: '/',
    path: path.join(reviewImageDir, 'home-768x1024.png'),
    width: 768,
    height: 1024,
    fullPage: true,
  },
  {
    route: '/',
    path: path.join(reviewImageDir, 'home-430x932.png'),
    width: 430,
    height: 932,
    fullPage: true,
  },
  {
    route: '/',
    path: path.join(largeImageDir, 'home.png'),
    width: 1920,
    height: 1080,
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
  {
    route: '/projects/devflow',
    path: path.join(imageDir, 'devflow-detail.png'),
    width: 1440,
    height: 900,
    fullPage: true,
  },
  {
    route: '/projects/devflow',
    path: path.join(largeImageDir, 'devflow-detail.png'),
    width: 1920,
    height: 1080,
    fullPage: true,
  },
  {
    route: '/projects/ticket-rag',
    path: path.join(imageDir, 'ticket-rag-detail.png'),
    width: 1440,
    height: 900,
    fullPage: true,
  },
  {
    route: '/projects/ticket-rag',
    path: path.join(largeImageDir, 'ticket-rag-detail.png'),
    width: 1920,
    height: 1080,
    fullPage: true,
  },
  {
    route: '/projects/promptops',
    path: path.join(imageDir, 'promptops-detail.png'),
    width: 1440,
    height: 900,
    fullPage: true,
  },
  {
    route: '/projects/promptops',
    path: path.join(largeImageDir, 'promptops-detail.png'),
    width: 1920,
    height: 1080,
    fullPage: true,
  },
  {
    route: '/projects/offerflow',
    path: path.join(imageDir, 'offerflow-detail.png'),
    width: 1440,
    height: 900,
    fullPage: true,
  },
  {
    route: '/projects/offerflow',
    path: path.join(largeImageDir, 'offerflow-detail.png'),
    width: 1920,
    height: 1080,
    fullPage: true,
  },
  {
    route: '/projects/mcp-gateway',
    path: path.join(imageDir, 'mcp-gateway-detail.png'),
    width: 1440,
    height: 900,
    fullPage: true,
  },
  {
    route: '/projects/mcp-gateway',
    path: path.join(largeImageDir, 'mcp-gateway-detail.png'),
    width: 1920,
    height: 1080,
    fullPage: true,
  },
  {
    route: '/',
    path: path.join(mobileImageDir, 'portfolio-home-390.png'),
    width: 390,
    height: 844,
    fullPage: true,
  },
  {
    route: '/projects',
    path: path.join(mobileImageDir, 'projects-overview-390.png'),
    width: 390,
    height: 844,
    fullPage: true,
  },
  {
    route: '/projects/devflow',
    path: path.join(mobileImageDir, 'devflow-detail-390.png'),
    width: 390,
    height: 844,
    fullPage: true,
  },
  {
    route: '/projects/ticket-rag',
    path: path.join(mobileImageDir, 'ticket-rag-detail-390.png'),
    width: 390,
    height: 844,
    fullPage: true,
  },
  {
    route: '/projects/promptops',
    path: path.join(mobileImageDir, 'promptops-detail-390.png'),
    width: 390,
    height: 844,
    fullPage: true,
  },
  {
    route: '/projects/offerflow',
    path: path.join(mobileImageDir, 'offerflow-detail-390.png'),
    width: 390,
    height: 844,
    fullPage: true,
  },
  {
    route: '/projects/mcp-gateway',
    path: path.join(mobileImageDir, 'mcp-gateway-detail-390.png'),
    width: 390,
    height: 844,
    fullPage: true,
  },
]

const viewportChecks = routes.flatMap((route) =>
  [390, 430, 768, 1366].map((width) => ({
    route,
    width,
    height: width <= 430 ? 932 : width === 768 ? 1024 : 768,
  })),
)

async function launchBrowser() {
  const attempts = [{ channel: 'msedge' }, { channel: 'chrome' }, {}]

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

async function waitForPageReady(page) {
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(Array.from(document.images, (image) => image.decode().catch(() => undefined)))
  })
  await page.waitForTimeout(900)
}

await mkdir(imageDir, { recursive: true })
await mkdir(largeImageDir, { recursive: true })
await mkdir(mobileImageDir, { recursive: true })
await mkdir(reviewImageDir, { recursive: true })

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

  for (const check of viewportChecks) {
    const page = await browser.newPage({
      viewport: {
        width: check.width,
        height: check.height,
      },
      deviceScaleFactor: 1,
    })

    const checkUrl = new URL(check.route, url).toString()
    await page.goto(checkUrl, { waitUntil: 'networkidle' })
    await waitForPageReady(page)

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      hasMountainHero: Boolean(document.querySelector('.mountain-hero')),
      hasMountainImage: Boolean(document.querySelector('img[src="/images/hero/ai-mountain-hero.png"]')),
    }))

    if (metrics.scrollWidth > metrics.innerWidth + 1) {
      throw new Error(
        `Horizontal overflow on ${check.route} at ${check.width}px: scrollWidth=${metrics.scrollWidth}, innerWidth=${metrics.innerWidth}`,
      )
    }

    if (check.route === '/' && (!metrics.hasMountainHero || !metrics.hasMountainImage)) {
      throw new Error(`Mountain hero was not found on homepage at ${check.width}px`)
    }

    await page.close()
  }

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
    await waitForPageReady(page)
    await page.screenshot({ path: capture.path, fullPage: capture.fullPage ?? false })
    await page.close()
  }

  console.log(
    `Checked ${viewportChecks.length} route/viewports and captured ${captures.length} screenshots from ${url}`,
  )
} finally {
  await browser?.close()
  await server.close()
}
