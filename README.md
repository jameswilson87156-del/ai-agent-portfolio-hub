# AI Full-Stack Developer Portfolio Hub v2

Personal portfolio frontend for Wang Zhenlong, focused on Java Backend, AI Application, AI Agent, and Web Full-stack internship directions.

This repository is the portfolio site itself. It presents five runnable portfolio engineering projects through a cinematic homepage, a Projects index, and focused case-study detail pages.

Live Demo: [https://ai-agent-portfolio-hub.vercel.app/](https://ai-agent-portfolio-hub.vercel.app/)

GitHub Repo: [https://github.com/jameswilson87156-del/ai-agent-portfolio-hub](https://github.com/jameswilson87156-del/ai-agent-portfolio-hub)

This is a personal AI Full-Stack Developer Portfolio Hub frontend project. The live site is deployed by Vercel. It is a static frontend portfolio, not a backend business system.

CI: GitHub Actions runs build and screenshots on `main` pushes and pull requests.

## Current Pages

- `/` — Home
- `/projects` — Projects case-study index
- `/projects/devflow` — DevFlow Copilot case study
- `/projects/ticket-rag` — Enterprise Ticket RAG Copilot case study
- `/projects/promptops` — PromptOps Studio case study
- `/projects/mcp-gateway` — MCP Tool Gateway case study
- `/projects/offerflow` — OfferFlow Copilot case study

## Tech Stack

- Vue 3
- Vue Router
- Vite
- TypeScript
- Native CSS
- Playwright screenshots

## Source Projects

The case studies describe real local engineering projects. Their screenshots and claims should be checked against the corresponding source repositories and README files.

- DevFlow Copilot: [https://github.com/jameswilson87156-del/devflow-copilot](https://github.com/jameswilson87156-del/devflow-copilot)
- Enterprise Ticket RAG Copilot: [https://github.com/jameswilson87156-del/enterprise-ai-ticket-copilot](https://github.com/jameswilson87156-del/enterprise-ai-ticket-copilot)
- PromptOps Studio: [https://github.com/jameswilson87156-del/ai-agent-eval-promptops](https://github.com/jameswilson87156-del/ai-agent-eval-promptops)
- MCP Tool Gateway: [https://github.com/jameswilson87156-del/mcp-tool-gateway](https://github.com/jameswilson87156-del/mcp-tool-gateway)
- OfferFlow Copilot: [https://github.com/jameswilson87156-del/offerflow-copilot](https://github.com/jameswilson87156-del/offerflow-copilot)

## Screenshot Evidence

`docs/images/` contains real browser screenshots generated from this Vue portfolio app with `npm run screenshots`:

- `docs/images/portfolio-home.png`
- `docs/images/projects-overview.png`
- `docs/images/devflow-detail.png`
- `docs/images/ticket-rag-detail.png`
- `docs/images/promptops-detail.png`
- `docs/images/mcp-gateway-detail.png`
- `docs/images/offerflow-detail.png`

`docs/images/large/` contains the same route captures at a larger desktop viewport, including `docs/images/large/promptops-detail.png`.

`public/images/projects/` contains copied real browser screenshot evidence from the five local source projects:

- `public/images/projects/devflow/` from `D:\workhome\ai-coding-workbench\docs\images`
- `public/images/projects/ticket-rag/` from `D:\workhome\enterprise-ai-ticket-copilot\docs\images`
- `public/images/projects/promptops/` from `D:\workhome\ai-agent-eval-promptops\docs\images`
- `public/images/projects/mcp/` from `D:\workhome\mcp-tool-gateway\docs\images\large`
- `public/images/projects/offerflow/` from `D:\workhome\offerflow-copilot\docs\images`

`docs/design/references/` contains design references only. These images are not running-page screenshots and must not be described as runtime evidence.

## Quick Start

```bash
npm install
npm run dev
npm run build
npm run screenshots
```

`npm run screenshots` starts a local Vite server and captures all portfolio routes listed above.

## Project Boundaries

- This is a personal portfolio frontend, not a backend business system.
- The site does not implement login, CMS, real API integration, or production data flows.
- The case studies do not claim real enterprise customers, real online users, production traffic, commercial metrics, or production deployments.
- DevFlow Copilot is presented as a real runnable portfolio AI Coding workflow project, not a production AI IDE.
- Enterprise Ticket RAG Copilot is presented as a real runnable portfolio enterprise Copilot workflow project, not a production enterprise RAG system.
- PromptOps Studio is presented as a local demo Prompt evaluation and regression console using Mock Output and Rule-based Eval. It does not claim real LLM quality, production users, production approvals, or LLM-as-Judge results.
- MCP Tool Gateway is presented as MCP-style tooling; it does not claim full official MCP protocol compatibility.
- OfferFlow Copilot is presented as a portfolio-ready local release candidate for evidence-first JD workflow governance, not a production recruiting platform.
- AI, Provider, RAG, RBAC, MCP, audit, persistence, Human Review, and Copy Permission capabilities are bounded by the corresponding source project README files and code evidence.
- OpenAI / DeepSeek / real Provider connection success is not claimed unless the source project evidence explicitly supports it.
- OfferFlow real Provider wording is limited to an optional manual real Provider dry-run path manually verified with DeepSeek and an OpenAI-compatible relay; it remains disabled by default and review-gated.

## Deployment

This repository is a static Vite frontend deployed on Vercel. GitHub Pages is also possible with the correct base-path configuration if deploying under a repository subpath.

- Live Demo: [https://ai-agent-portfolio-hub.vercel.app/](https://ai-agent-portfolio-hub.vercel.app/)
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

For Vercel, `vercel.json` rewrites all routes to `index.html` so Vue Router history routes can refresh directly.

Final release checks:

```bash
npm run build
npm run screenshots
git diff --check
git status --short
```

Deployment notes are tracked in [docs/deployment.md](docs/deployment.md).
