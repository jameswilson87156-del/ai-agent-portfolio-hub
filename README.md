# AI Agent Engineer Portfolio Hub

Personal portfolio frontend for Wang Zhenlong, focused on Java Backend, AI Application, AI Agent, and Web Full-stack internship directions.

This repository is the portfolio site itself. It presents three runnable portfolio engineering projects through a cinematic homepage, a Projects index, and focused case-study detail pages.

## Current Pages

- `/` — Home
- `/projects` — Projects case-study index
- `/projects/devflow` — DevFlow Copilot case study
- `/projects/ticket-rag` — Enterprise Ticket RAG Copilot case study
- `/projects/mcp-gateway` — MCP Tool Gateway case study

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
- MCP Tool Gateway: [https://github.com/jameswilson87156-del/mcp-tool-gateway](https://github.com/jameswilson87156-del/mcp-tool-gateway)

## Screenshot Evidence

`docs/images/` contains real browser screenshots generated from this Vue portfolio app with `npm run screenshots`:

- `docs/images/portfolio-home.png`
- `docs/images/projects-overview.png`
- `docs/images/devflow-detail.png`
- `docs/images/ticket-rag-detail.png`
- `docs/images/mcp-gateway-detail.png`

`docs/images/large/` contains the same route captures at a larger desktop viewport.

`public/images/projects/` contains copied real browser screenshot evidence from the three local source projects:

- `public/images/projects/devflow/` from `D:\workhome\ai-coding-workbench\docs\images`
- `public/images/projects/ticket-rag/` from `D:\workhome\enterprise-ai-ticket-copilot\docs\images`
- `public/images/projects/mcp/` from `D:\workhome\mcp-tool-gateway\docs\images\large`

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
- MCP Tool Gateway is presented as MCP-style tooling; it does not claim full official MCP protocol compatibility.
- AI, Provider, RAG, RBAC, MCP, audit, persistence, and Human Review capabilities are bounded by the corresponding source project README files and code evidence.
- OpenAI / DeepSeek / real Provider connection success is not claimed unless the source project evidence explicitly supports it.

## Deployment Preparation

This repository is a static Vite frontend. Vercel is the recommended deployment target; GitHub Pages is also possible with the correct base-path configuration if deploying under a repository subpath.

Before deployment:

```bash
npm run build
npm run screenshots
git diff --check
git status --short
```

Deployment notes are tracked in [docs/deployment.md](docs/deployment.md). No production deployment is claimed by this README.
