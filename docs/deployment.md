# Deployment Preparation

This repository is a static Vue 3 + Vite portfolio frontend. It has no backend dependency at runtime.

## Recommended Target

Vercel is the simplest deployment target:

1. Import the repository.
2. Use the default Vite build command: `npm run build`.
3. Use the default output directory: `dist`.
4. Run `npm run screenshots` locally before publishing a final portfolio version.

## GitHub Pages Option

GitHub Pages is also possible. If the site is deployed under a repository subpath, set the Vite `base` option before building. The current `vite.config.ts` uses the default root base, which is suitable for Vercel or a custom domain root.

## Pre-Deploy Checks

Run these commands before deployment:

```bash
npm run build
npm run screenshots
git diff --check
git status --short
```

## Boundaries

- Deployment of this frontend does not imply that the three source projects are production systems.
- Do not add API keys, `.env` files, `dist`, `node_modules`, videos, or private credentials to Git.
- Screenshots under `docs/images` are portfolio-site browser captures.
- Project screenshots under `public/images/projects` are copied runtime screenshots from local source projects.
- Design references under `docs/design/references` are not runtime screenshots.
