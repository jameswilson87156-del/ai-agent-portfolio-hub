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
  '/projects/gitea-quality-lab',
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
    route: '/projects/gitea-quality-lab',
    path: path.join(imageDir, 'gitea-quality-detail.png'),
    width: 1440,
    height: 900,
    fullPage: true,
  },
  {
    route: '/projects/gitea-quality-lab',
    path: path.join(largeImageDir, 'gitea-quality-detail.png'),
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
    route: '/projects/gitea-quality-lab',
    path: path.join(mobileImageDir, 'gitea-quality-detail-390.png'),
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
  await Promise.race([
    page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all(Array.from(document.images, (image) => image.decode().catch(() => undefined)))
    }),
    page.waitForTimeout(5000),
  ])
  await page.waitForTimeout(250)
}

async function loadLazyImages(page) {
  const images = page.locator('img')
  for (let index = 0; index < await images.count(); index += 1) {
    const image = images.nth(index)
    await image.scrollIntoViewIfNeeded()
    await page.waitForFunction(
      (element) => element.complete && element.naturalWidth > 0,
      await image.elementHandle(),
      { timeout: 10000 },
    )
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await waitForPageReady(page)
}

function parseRgb(value) {
  const match = value.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/)
  if (!match) throw new Error(`Unsupported homepage heading color: ${value}`)
  return match.slice(1).map(Number)
}

function relativeLuminance([red, green, blue]) {
  const linear = [red, green, blue].map((channel) => {
    const normalized = channel / 255
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4
  })
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722
}

function contrastRatio(foreground, background) {
  const values = [relativeLuminance(foreground), relativeLuminance(background)]
  const [light, dark] = values.sort((first, second) => second - first)
  return (light + 0.05) / (dark + 0.05)
}

async function checkPrimaryNavigation(browser, url) {
  const page = await browser.newPage({
    viewport: { width: 1366, height: 900 },
    deviceScaleFactor: 1,
  })
  page.setDefaultTimeout(10000)
  page.setDefaultNavigationTimeout(15000)
  const pageErrors = []
  page.on('pageerror', (error) => pageErrors.push(error.message))

  try {
    await page.goto(new URL('/', url).toString(), { waitUntil: 'domcontentloaded', timeout: 15000 })
    await page.getByRole('link', { name: /查看测试项目/ }).click()
    await page.waitForURL('**/projects')
    await page.locator('#gitea-quality-lab').waitFor()

    await page
      .locator('#gitea-quality-lab .case-card__details--available')
      .filter({ hasText: 'Case Study' })
      .click()
    await page.waitForURL('**/projects/gitea-quality-lab')
    await page.getByRole('heading', { name: 'Gitea Quality Lab', level: 1 }).waitFor()

    const giteaImages = await page.locator('.screenshot-item img').evaluateAll((images) =>
      images.filter((image) => !image.complete || image.naturalWidth === 0).length,
    )
    if (giteaImages > 0) {
      throw new Error(`Gitea detail has ${giteaImages} broken screenshot image(s)`)
    }

    await page.goto(new URL('/projects', url).toString(), { waitUntil: 'domcontentloaded', timeout: 15000 })
    await page
      .locator('#promptops .case-card__details--available')
      .filter({ hasText: 'Case Study' })
      .click()
    await page.waitForURL('**/projects/promptops')
    await page.getByRole('heading', { name: 'PromptOps Studio', level: 1 }).waitFor()

    const promptOpsImages = await page.locator('.screenshot-item img').evaluateAll((images) =>
      images.filter((image) => !image.complete || image.naturalWidth === 0).length,
    )
    if (promptOpsImages > 0) {
      throw new Error(`PromptOps detail has ${promptOpsImages} broken screenshot image(s)`)
    }

    if (pageErrors.length > 0) {
      throw new Error(`Browser page errors: ${pageErrors.join('; ')}`)
    }
  } finally {
    await page.close()
  }
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
    console.log(`Checking ${check.route} at ${check.width}px`)
    const page = await browser.newPage({
      viewport: {
        width: check.width,
        height: check.height,
      },
      deviceScaleFactor: 1,
    })

    const checkUrl = new URL(check.route, url).toString()
    page.setDefaultTimeout(10000)
    page.setDefaultNavigationTimeout(15000)
    await page.goto(checkUrl, { waitUntil: 'domcontentloaded', timeout: 15000 })
    await waitForPageReady(page)

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      evidenceHero: Boolean(document.querySelector('[data-testid="portfolio-evidence-hero"]')),
      evidenceHeroImageLoaded: (() => {
        const image = document.querySelector('[data-testid="portfolio-evidence-hero"] img')
        return Boolean(image && image.complete && image.naturalWidth > 0)
      })(),
      projectRows: document.querySelectorAll('[data-testid="home-project-row"]').length,
      generatedMountain: Boolean(document.querySelector('img[src*="ai-mountain-hero"]')),
      homepageBackground: document.querySelector('.portfolio-home')
        ? getComputedStyle(document.querySelector('.portfolio-home')).backgroundColor
        : '',
      heroHeadingColor: document.querySelector('#page-title')
        ? getComputedStyle(document.querySelector('#page-title')).color
        : '',
    }))

    if (metrics.scrollWidth > metrics.innerWidth + 1) {
      throw new Error(
        `Horizontal overflow on ${check.route} at ${check.width}px: scrollWidth=${metrics.scrollWidth}, innerWidth=${metrics.innerWidth}`,
      )
    }

    if (check.route === '/' && (!metrics.evidenceHero || !metrics.evidenceHeroImageLoaded || metrics.generatedMountain)) {
      throw new Error(`Evidence-first hero is missing or still uses the generated mountain at ${check.width}px`)
    }

    if (check.route === '/') {
      if (metrics.projectRows !== 2) {
        throw new Error(`Expected two primary evidence rows at ${check.width}px; found ${metrics.projectRows}`)
      }

      const foreground = parseRgb(metrics.heroHeadingColor)
      const background = parseRgb(metrics.homepageBackground)
      const headingContrast = contrastRatio(foreground, background)
      if (headingContrast < 4.5) {
        throw new Error(`Homepage hero heading contrast is ${headingContrast.toFixed(2)}:1 at ${check.width}px; expected at least 4.5:1`)
      }

      const evidenceImages = page.locator('[data-testid="home-project-row"] img')
      for (let index = 0; index < await evidenceImages.count(); index += 1) {
        const image = evidenceImages.nth(index)
        await image.scrollIntoViewIfNeeded()
        await page.waitForFunction(
          (element) => element.complete && element.naturalWidth > 0,
          await image.elementHandle(),
          { timeout: 10000 },
        )
      }
      const brokenEvidenceImages = await evidenceImages.evaluateAll((images) =>
        images
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.currentSrc || image.src),
      )
      if (!metrics.evidenceHeroImageLoaded || brokenEvidenceImages.length > 0) {
        throw new Error(`Homepage has ${brokenEvidenceImages.length + (metrics.evidenceHeroImageLoaded ? 0 : 1)} broken evidence screenshot(s) at ${check.width}px: ${brokenEvidenceImages.join(', ')}`)
      }
    }

    await page.close()
  }

  console.log('Checking primary project navigation and detail screenshots')
  await checkPrimaryNavigation(browser, url)

  for (const capture of captures) {
    console.log(`Capturing ${capture.route} at ${capture.width}px`)
    const page = await browser.newPage({
      viewport: {
        width: capture.width,
        height: capture.height,
      },
      deviceScaleFactor: 1,
    })

    const captureUrl = new URL(capture.route, url).toString()
    page.setDefaultTimeout(10000)
    page.setDefaultNavigationTimeout(15000)

    await page.goto(captureUrl, { waitUntil: 'domcontentloaded', timeout: 15000 })
    await waitForPageReady(page)
    await loadLazyImages(page)
    await page.screenshot({ path: capture.path, fullPage: capture.fullPage ?? false })
    await page.close()
  }

  console.log(
    `Checked ${viewportChecks.length} route/viewports, two primary navigation flows, screenshot assets, and captured ${captures.length} screenshots from ${url}`,
  )
} finally {
  await browser?.close()
  await server.close()
}
