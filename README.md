# 王震龙｜测试开发作品集

面向测试开发实习的个人项目档案。主线展示真实开源系统自动化与 AI Agent / 本地业务 API 评测；原有 AI 应用项目继续作为工程背景。

Live Portfolio: [https://ai-agent-portfolio-hub.vercel.app/](https://ai-agent-portfolio-hub.vercel.app/)

GitHub Profile: [https://github.com/jameswilson87156-del](https://github.com/jameswilson87156-del)

Contact: 467113957@qq.com

## Positioning

- 身份：王震龙｜软件工程本科 2027 届｜测试开发方向
- 主投方向：测试开发实习 / 测试自动化 / AI Agent 评测
- 技术主线：Python、pytest、HTTPX、Playwright、Docker Compose、GitHub Actions；补充 Java / Spring Boot、k6 与本地可观测性
- 证据链：源代码、固定测试集、运行报告、CI run、真实浏览器截图和明确的测试边界

## Current Pages

- `/` — 测试开发方向首页与两个主项目
- `/projects` — 主项目、能力映射与工程背景索引
- `/projects/gitea-quality-lab` — 本地 Gitea API / 浏览器 / 持久化测试
- `/projects/promptops` — Agent 评测、本地订单退款模拟 API、稳定性与监控演练
- `/projects/devflow` — DevFlow Copilot engineering background
- `/projects/ticket-rag` — Enterprise Ticket RAG engineering background
- `/projects/offerflow` — OfferFlow Copilot engineering background
- `/projects/mcp-gateway` — MCP Tool Gateway engineering background

## Resume status

旧的 AI 应用开发方向简历 PDF 已从静态资源移除。测试开发版简历应基于本人核实的实习职责、时间、技术与结果后再公开；不从作品集项目推断工作经历。

## Main Projects

| Order | Project | Verified focus | Source |
|---:|---|---|---|
| 01 | Gitea Quality Lab | Gitea 28.2.0 local target / API AuthN + AuthZ / Playwright / SQLite restart persistence / JSON-JUnit-HTML | [GitHub](https://github.com/jameswilson87156-del/gitea-quality-lab) |
| 02 | PromptOps Studio | Fixed Agent cases / deterministic Mock / failure Trace / order-refund simulator / k6 / monitoring rehearsal | [GitHub](https://github.com/jameswilson87156-del/ai-agent-eval-promptops) |

DevFlow Copilot, Enterprise Ticket RAG Copilot, OfferFlow Copilot, and MCP Tool Gateway remain available as supporting engineering background projects.

## Evidence Boundary

- Gitea evidence comes from a local Docker Compose target. GitHub Actions starts an ephemeral local Gitea instance on the hosted runner; neither path tests a company production system.
- The recorded Gitea evidence includes 24 harness unit tests and 16 API / browser / persistence integration cases. The 16/16 outcome applies to the authored cases, not every Gitea feature.
- PromptOps Agent results use a deterministic Mock Agent and 26 synthetic cases. The recorded run has 24 Agent behavior passes and 2 retained behavior failures; the executor completed all 26.
- PromptOps' local order/refund simulator recorded 8,103 workflows and 40,515 HTTP requests with zero workflow failures and dropped iterations. The run's peak active VU was 1, so this is not a production capacity result.
- The latest public PromptOps acceptance did not send external model requests. Optional provider configuration is not a claim of model quality validation.
- `public/images/hero/ai-mountain-hero.png` is a visual portfolio asset, not runtime evidence. Project screenshots come from source project runs.
- The site does not claim company experience, production monitoring, production-scale traffic, model quality, adoption, or business outcomes.

## Screenshot Evidence

`docs/images/` contains browser screenshots generated from this portfolio using `npm run screenshots`:

- `docs/images/home.png`
- `docs/images/projects-overview.png`
- `docs/images/gitea-quality-detail.png`
- `docs/images/promptops-detail.png`
- `docs/images/offerflow-detail.png`
- `docs/images/mcp-gateway-detail.png`

`docs/images/mobile/` and `docs/images/review/` contain additional responsive captures from the same script.

Source project evidence is copied to `public/images/projects/` with its repository path and local-run provenance shown on the case-study page.

## Tech Stack

- Vue 3, Vue Router, TypeScript, Vite, native CSS
- Playwright screenshot and route checks
- Vercel static deployment

## Quick Start

```powershell
npm ci
npm run dev
npm run build
npm run screenshots
```

The screenshot workflow checks 390 / 430 / 768 / 1366px widths for horizontal overflow and captures the homepage and case-study routes.

## Local Verification

```powershell
npm run build
npm run screenshots
git diff --check
git status --short
```
