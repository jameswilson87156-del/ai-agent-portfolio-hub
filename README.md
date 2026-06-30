# AI Agent Engineer Portfolio Hub

Personal AI Agent engineer portfolio hub for Wang Zhenlong, Software Engineering undergraduate, Class of 2027.

## Positioning

This project contains a cinematic homepage and a Projects case-study index for a personal portfolio aimed at Java backend internship, AI application development, and AI Agent / AI Native full-stack engineering roles.

## Current Stage

P3B complete: the approved homepage, Projects index, and MCP detail structure are preserved, while `/projects/devflow` now adds the DevFlow Copilot case-study detail page.

## Tech Stack

- Vue 3
- Vue Router
- Vite
- TypeScript
- Native CSS
- Playwright screenshots

## Design Reference

Reference image:

`docs/design/references/cinematic-ai-agent-homepage-reference.png`

This file is an AI-generated visual reference. It is not a running webpage screenshot and must not be presented as the finished homepage.

## Real Browser Screenshots

- Desktop: `docs/images/portfolio-home.png`
- Large desktop: `docs/images/large/portfolio-home.png`
- Projects desktop: `docs/images/projects-overview.png`
- Projects large desktop: `docs/images/large/projects-overview.png`
- DevFlow detail desktop: `docs/images/devflow-detail.png`
- DevFlow detail large desktop: `docs/images/large/devflow-detail.png`
- MCP detail desktop: `docs/images/mcp-gateway-detail.png`
- MCP detail large desktop: `docs/images/large/mcp-gateway-detail.png`

These screenshots are generated from the implemented Vue app with `npm run screenshots`. They are real browser captures of `/`, `/projects`, `/projects/devflow`, and `/projects/mcp-gateway`.

## Visual Rebuild

P1E rebuilds the Hero visual system around a large separated `AI Agent` title, a clear Chinese title block, a stronger CSS/SVG cinematic mountain terrain, lighter JSON-RPC and Trace evidence elements, and editorial case-study project entries.

The current homepage is intended to read as a premium AI Agent engineer portfolio landing page, not a dashboard, blog template, or admin console.

## Projects Case Study Index

The `/projects` route presents three large editorial case-study previews instead of a dense project card wall:

- **DevFlow Copilot** — AI Coding workflow, Provider calls, generation Trace, knowledge reference, and Human Review.
- **Enterprise Ticket RAG Copilot** — explainable ticket retrieval, RAG, Provider fallback, Trace Evidence, and Human Review.
- **MCP Tool Gateway** — Java backend Tool gateway, policy checks, JSON-RPC adapter, Audit Log, RBAC demo, CI, Docker, and OpenAPI evidence.

The page also includes a Capability Matrix, an Evidence Wall, and explicit Project Boundaries. DevFlow Copilot and MCP Tool Gateway link to implemented detail routes; Enterprise Ticket RAG Copilot remains deferred and is shown as `Coming soon`.

P2A raises body-text contrast and size, maps capabilities to readable project-name chips, and groups the Evidence Wall into Documentation, Runtime Evidence, Backend Evidence, and AI Governance. Each case study includes a copied real browser screenshot from the corresponding local project's `docs/images` directory:

- `public/images/projects/devflow-preview.png` from `D:\workhome\ai-coding-workbench\docs\images\dashboard-agentic.png`
- `public/images/projects/ticket-rag-preview.png` from `D:\workhome\enterprise-ai-ticket-copilot\docs\images\large\trace-evidence.png`
- `public/images/projects/mcp-gateway-preview.png` from `D:\workhome\mcp-tool-gateway\docs\images\large\mcp-tool-workbench.png`

These files are screenshot copies of locally runnable project pages. The AI-generated design reference remains separate and is never presented as runtime evidence.

## DevFlow Copilot Detail

P3B adds `/projects/devflow` as the DevFlow Copilot detail route. The page presents the project problem, Agentic Coding Workflow architecture, Core Product Modules, five real browser evidence screenshots, engineering evidence, explicit project boundaries, and interview notes.

The gallery uses real browser screenshot copies from the local `D:\workhome\ai-coding-workbench\docs\images` directory:

- `dashboard-agentic.png`
- `workbench-running.png`
- `generation-history.png`
- `prompt-templates.png`
- `human-review-trace-detail.png`

The screenshots are copied into `public/images/projects/devflow/`. They are runtime evidence from the local DevFlow project, not design references, customer systems, or production environment captures.

The page keeps the DevFlow boundary clear: this is a portfolio demo, not a production AI IDE. The default `local-rule` Provider is local rule/template generation rather than real LLM inference; OpenAI-compatible Provider support is a code-level adapter that requires environment configuration and separate verification. Knowledge Base is lightweight keyword/simple-similarity retrieval, not production vector RAG.

## MCP Tool Gateway Detail

P3A adds `/projects/mcp-gateway` as the first project detail route. The page presents the project problem, layered architecture, core Agent Tool invocation flow, five real browser evidence screenshots, Java backend delivery evidence, explicit project boundaries, and interview notes.

The gallery uses real browser screenshot copies from the local `D:\workhome\mcp-tool-gateway\docs\images\large` directory:

- `mcp-tool-workbench.png`
- `tool-registry.png`
- `human-review-center.png`
- `trace-evidence.png`
- `audit-log.png`

The screenshots are copied into `public/images/projects/mcp/`. They are runtime evidence from the local demo project, not design references, customer systems, or production environment captures.

P3A-Polish adds a four-part Project Summary Rail, enlarges the Agent Governance Flow, standardizes all five screenshots inside restrained browser evidence frames, groups backend evidence into four engineering domains, and replaces the boundary list with a three-part Trust Panel. Interview notes are now concise Q&A cards for faster review by Java backend and AI Agent interviewers.

## Motion Boundary

The particle terrain flow, Trace Timeline light point, panel hover states, and parallax are front-end visual expressions only. They do not represent real runtime status, real API calls, or production system state.

Motion references under `docs/design/motion-references/` are local design references only and are not page assets.

## Current Boundaries

- No backend.
- No real API integration.
- No login.
- No production traffic, customer, or deployment claims.
- DevFlow Copilot and MCP Tool Gateway detail pages are implemented; Enterprise Ticket RAG Copilot remains deferred.
- DevFlow is labeled as a portfolio AI Coding workflow demo, not a production AI IDE.
- MCP-style and RBAC demo capabilities are labeled as demonstrations, not complete production implementations.
