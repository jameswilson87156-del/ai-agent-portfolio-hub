# Deployment Preparation

This repository is a static Vue 3 + Vite portfolio frontend. It has no backend dependency at runtime.

## Recommended Target

Vercel is the simplest deployment target:

1. Import the repository.
2. Use the default Vite build command: `npm run build`.
3. Use the default output directory: `dist`.
4. Keep `vercel.json` in the repository so Vue Router history routes refresh to `index.html`.
5. Run `npm run screenshots` locally before publishing a final portfolio version.

The project is a static frontend. It does not require a backend service, API keys, server runtime, database, login, CMS, or scheduled jobs for deployment.

## GitHub Pages Option

GitHub Pages is also possible. If the site is deployed under a repository subpath, set the Vite `base` option before building. The current `vite.config.ts` uses the default root base, which is suitable for Vercel or a custom domain root.

Do not change `base` for GitHub Pages unless the target URL is confirmed. For a repository subpath such as `/ai-agent-portfolio-hub/`, configure the Vite base before building.

## Build Settings

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm ci`
- SPA routing: `vercel.json` rewrites `/(.*)` to `/index.html`

## Pre-Deploy Checks

Run these commands before deployment:

```bash
npm run build
npm run screenshots
git diff --check
git status --short
```

GitHub Actions also runs `npm ci`, `npm run build`, and `npm run screenshots` for pushes and pull requests to `main`.

## Boundaries

- Deployment of this frontend does not imply that the three source projects are production systems.
- Do not add API keys, `.env` files, `dist`, `node_modules`, videos, or private credentials to Git.
- Screenshots under `docs/images` are portfolio-site browser captures.
- Project screenshots under `public/images/projects` are copied runtime screenshots from local source projects.
- Design references under `docs/design/references` are not runtime screenshots.
