# 王震龙｜AI 应用开发作品集

用于求职投递的 AI 应用开发作品集官网，配合简历、Boss 直聘、智联校园、GitHub Profile 和技术面试沟通使用。

Live Portfolio: [https://ai-agent-portfolio-hub.vercel.app/](https://ai-agent-portfolio-hub.vercel.app/)

GitHub Profile: [https://github.com/jameswilson87156-del](https://github.com/jameswilson87156-del)

Contact: 467113957@qq.com

## Positioning

- 身份：王震龙｜软件工程本科 2027 届
- 主投方向：AI 应用开发实习 / Java + AI 全栈开发 / AI 工具开发 / RAG / PromptOps / Agent 工具平台
- 技术主线：Java + Vue + AI Workflow 工程落地
- 证据链：GitHub、真实项目截图、测试记录、评测样本、截图验收与项目边界说明

## Current Pages

- `/` — 大山 Hero 首页与核心项目入口
- `/projects` — 核心项目证据索引
- `/projects/devflow` — DevFlow Copilot case study
- `/projects/ticket-rag` — Enterprise Ticket RAG Copilot case study
- `/projects/promptops` — PromptOps Studio case study
- `/projects/offerflow` — OfferFlow Copilot case study
- `/projects/mcp-gateway` — MCP Tool Gateway case study

## Downloads

- Resume PDF: `/resume/wangzhenlong-ai-application-resume.pdf`
- Project Portfolio PDF: `/portfolio/wangzhenlong-ai-project-portfolio.pdf`

Both public paths use ASCII filenames to avoid deployment/download issues.

## Core Projects

| Order | Project | Focus | Source |
|---:|---|---|---|
| 01 | DevFlow Copilot | AI Coding Workbench / Prompt → Provider → Trace → Tool Call → Human Review | [GitHub](https://github.com/jameswilson87156-del/devflow-copilot) |
| 02 | Enterprise Ticket RAG Copilot | Ticket Workbench / keyword retrieval / Citation Evidence / Trace Timeline / Human Review | [GitHub](https://github.com/jameswilson87156-del/enterprise-ai-ticket-copilot) |
| 03 | PromptOps Studio | Prompt Version / Dataset / Batch Evaluation / Output Compare / Failure Cases | [GitHub](https://github.com/jameswilson87156-del/ai-agent-eval-promptops) |
| 04 | OfferFlow Copilot | JD Intake / Resume Evidence / Provider Trace / Human Review / Copy Permission | [GitHub](https://github.com/jameswilson87156-del/offerflow-copilot) |
| 05 | MCP Tool Gateway | Tool Registry / Policy Check / Trace Evidence / Audit Log / MCP-style JSON-RPC adapter demo | [GitHub](https://github.com/jameswilson87156-del/mcp-tool-gateway) |

## Hero Visual Asset Boundary

`public/images/hero/ai-mountain-hero.png` is the homepage brand visual.

Hero mountain image is a visual portfolio asset, not runtime project evidence.

Project evidence must continue to come from source project README files, metrics docs, tests, acceptance docs, or real browser screenshots under `public/images/projects/`.

## Screenshot Evidence

`docs/images/` contains real browser screenshots generated from this portfolio app with `npm run screenshots`:

- `docs/images/home.png`
- `docs/images/portfolio-home.png`
- `docs/images/projects-overview.png`
- `docs/images/devflow-detail.png`
- `docs/images/ticket-rag-detail.png`
- `docs/images/promptops-detail.png`
- `docs/images/offerflow-detail.png`
- `docs/images/mcp-gateway-detail.png`

`docs/images/large/` contains larger desktop captures, including `docs/images/large/home.png`.

`docs/images/mobile/` contains 390px mobile captures.

`docs/images/review/` contains additional homepage review captures such as 430px, 768px, and 1366px widths.

## Source Screenshot Directories

- `public/images/projects/devflow/`
- `public/images/projects/ticket-rag/`
- `public/images/projects/promptops/`
- `public/images/projects/offerflow/`
- `public/images/projects/mcp/`

Design or hero images are not project runtime evidence.

## Tech Stack

- Vue 3
- Vue Router
- TypeScript
- Vite
- Native CSS
- Playwright screenshots
- Vercel static deployment

## Boundaries

- This repository is a static portfolio frontend.
- Case-study claims must be traceable to each source project README, docs, tests, metrics, or real screenshots.
- DevFlow keeps its local-rule default and documents Provider configuration separately.
- Ticket RAG metrics are from a labeled synthetic dataset and keyword retrieval baseline.
- PromptOps Studio uses Mock Output and Rule-based Eval for local regression demonstration.
- OfferFlow external Provider flow is disabled by default and described only as a manual dry-run path.
- MCP Tool Gateway is described as MCP-style adapter demo.
- The site avoids unsupported claims about adoption, traffic, business outcomes, model quality, or unverified platform capability.

## Quick Start

```bash
npm install
npm run dev
npm run build
npm run screenshots
```

`npm run screenshots` starts a local Vite server, verifies 390 / 430 / 768 / 1366px widths for horizontal overflow, checks that the homepage includes the mountain hero, and captures the portfolio routes.

## Final Checks

```bash
npm run build
npm run screenshots
git diff --check
git status --short
```

Deployment notes are tracked in [docs/deployment.md](docs/deployment.md).
