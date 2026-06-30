# HANDOFF

## Current Directory

`D:\workhome\ai-agent-portfolio-hub`

## Reference Image

`docs/design/references/cinematic-ai-agent-homepage-reference.png`

The reference image is an AI-generated visual reference only. It is not a real browser screenshot.

## Completed

- Confirmed the reference image exists.
- Initialized a Vue 3 + Vite + TypeScript frontend scaffold.
- Implemented the P1B static high-fidelity cinematic homepage.
- Implemented the P1C cinematic motion and interaction layer.
- Implemented the P1D homepage visual rescue pass after manual review found the P1C screen too dense, visually obstructed, and not spacious enough for a premium portfolio homepage.
- Implemented the P1E Hero visual rebuild after manual review found the P1D title spacing unsafe, the mountain terrain too weak, and the project entries still too dashboard-like.
- Implemented P2 Projects overview after the cinematic homepage direction passed manual review.
- Implemented P2A Projects readability and engineering-evidence refinement without changing the approved homepage.
- Implemented P3A MCP Tool Gateway detail page as the first focused project case study.
- Implemented P3A-Polish to improve MCP detail scanability and engineering-evidence communication.
- Implemented P3B DevFlow Copilot detail page as the AI Coding workflow case study.
- Implemented P3B-CopyFix to clarify DevFlow as a real runnable portfolio engineering project rather than a static page or fake project.
- Implemented P3C Enterprise Ticket RAG Copilot detail page as the enterprise RAG Copilot workflow case study.
- Added centralized portfolio data in `src/data/portfolio.ts`.
- Added centralized Projects case-study data in `src/data/projects.ts`.
- Added real browser screenshot generation with Playwright.

## Current Routes

- `/` — approved cinematic AI Agent Engineer portfolio homepage.
- `/projects` — Projects case-study index.
- `/projects/devflow` — DevFlow Copilot AI Coding workflow case study.
- `/projects/ticket-rag` — Enterprise Ticket RAG Copilot workflow case study.
- `/projects/mcp-gateway` — MCP Tool Gateway engineering case study.

Vue Router is installed and configured in `src/router/index.ts`. All three P3 detail routes are now implemented.

## Implemented Components

- `TopNav.vue`
- `HeroSection.vue`
- `CinematicBackground.vue`
- `FloatingTechTags.vue`
- `JsonRpcWindow.vue`
- `TraceTimelinePanel.vue`
- `ProjectShowcase.vue`
- `ProjectCard.vue`
- `useParallax.ts`
- `projects/ProjectCaseCard.vue`
- `projects/CapabilityMatrix.vue`
- `projects/EvidenceWall.vue`
- `projects/ProjectBoundaryNote.vue`
- `projects/DetailHero.vue`
- `projects/ArchitectureFlow.vue`
- `projects/ScreenshotGallery.vue`
- `projects/EngineeringEvidenceGrid.vue`
- `projects/BoundaryPanel.vue`
- `projects/InterviewNotes.vue`
- `projects/ProjectSummaryRail.vue`

## P2 Projects Overview

- `ProjectsView.vue` provides a lighter cinematic editorial page without repeating the homepage mountain Hero.
- Three large case-study previews describe the problem, core Agent chain, technology stack, engineering evidence, honest boundary, and resume value.
- DevFlow Copilot is positioned around AI Coding workflow and generation traceability.
- Enterprise Ticket RAG Copilot is positioned around explainable RAG, knowledge references, Provider fallback, and Human Review.
- MCP Tool Gateway is positioned around Java backend Tool access, policy checks, JSON-RPC, Audit Log, CI, Docker, and OpenAPI.
- Capability Matrix maps twelve engineering dimensions to readable project-name chips.
- Evidence Wall lists verifiable portfolio materials without inventing KPI or production metrics.
- Project Boundaries explicitly reject claims of real enterprise customers, production traffic, complete MCP compatibility, or production authentication.

## P2A Readability And Evidence

- Each case card now centers four concise blocks: Problem, Agent Chain, Evidence, and Boundary.
- Body copy, evidence labels, project chips, and boundary notes use larger type and stronger contrast at 1440px and 1920px.
- Capability Matrix maps each capability to readable project-name chips instead of code-only micro labels.
- Evidence Wall is grouped into Documentation, Runtime Evidence, Backend Evidence, and AI Governance.
- The Projects navigation item receives an active visual state on `/projects`; the homepage `查看核心项目` button and `作品` navigation item both route to `/projects`.

### Project Preview Sources

- `public/images/projects/devflow-preview.png` is copied from `D:\workhome\ai-coding-workbench\docs\images\dashboard-agentic.png`.
- `public/images/projects/ticket-rag-preview.png` is copied from `D:\workhome\enterprise-ai-ticket-copilot\docs\images\large\trace-evidence.png`.
- `public/images/projects/mcp-gateway-preview.png` is copied from `D:\workhome\mcp-tool-gateway\docs\images\large\mcp-tool-workbench.png`.

The source projects were inspected read-only and were not modified. These previews are real browser screenshot copies, not design references or fabricated production evidence.

## P3B DevFlow Copilot Detail

- Route: `/projects/devflow`.
- Structure: Detail Hero, Project Summary Rail, Why this project exists, Agentic Coding Workflow, Core Product Modules, Real Browser Evidence, Engineering Evidence, Trust Panel, and interview Q&A.
- The Project Summary Rail exposes Role, Core, Evidence, and Boundary in the first viewport.
- The seven-node Agentic Coding Workflow explains Prompt Template, Provider Call, Generation Trace, Knowledge Reference, Save Record, Human Review, and Confirmed History.
- Core Product Modules cover Dashboard, Workbench, Prompt Templates, Generation History, Knowledge Base, Human Review, and Trace / Activity.
- Engineering evidence covers Vue 3 + TypeScript frontend, Spring Boot backend, Prompt Studio workflow, Human Review state machine, Generation Trace, Knowledge reference, Agent Run Trace, 20 backend tests, build verification, and real screenshot evidence.
- The Trust Panel states what is real: real frontend pages, real project structure, real browser screenshots, runnable workflow, build / screenshots acceptance, and README / documentation evidence.
- The Trust Panel also states what it is not: not a production AI IDE, not real online users, not enterprise customers, not commercial data, not stable production LLM service, and not a production RAG / Agent platform.
- Provider boundary: `local-rule` is local rule/template generation, not real LLM inference. OpenAI-compatible Provider support is a code-level adapter requiring environment configuration and separate verification.
- Knowledge Base boundary: keyword/simple-similarity retrieval, not production vector RAG.
- Human Review boundary: workflow state design for explainability and replay, not production approval infrastructure.

### DevFlow Detail Screenshot Sources

All five files are copied read-only from `D:\workhome\ai-coding-workbench\docs\images` into `public/images/projects/devflow/`:

- `dashboard-agentic.png`
- `workbench-running.png`
- `generation-history.png`
- `prompt-templates.png`
- `human-review-trace-detail.png`

The original DevFlow project must remain unchanged. These are real local browser screenshot copies, not design-reference material.

## P3C Enterprise Ticket RAG Copilot Detail

- Route: `/projects/ticket-rag`.
- Structure: Detail Hero, Project Summary Rail, Why this project exists, Ticket RAG Copilot Workflow, Core Product Modules, Real Browser Evidence, Engineering Evidence, Trust Panel, and interview Q&A.
- The Project Summary Rail exposes Role, Core, Evidence, and Boundary in the first viewport.
- The eight-node Ticket RAG Copilot Workflow explains Ticket Intake, Knowledge Retrieval, RAG Context, Provider / fallback, AI Analysis, Trace Evidence, Human Review, and Final Response.
- Core Product Modules cover Ticket Workbench, Knowledge Base, RAG Evidence, Provider fallback, Trace Evidence, Human Review, Showcase Screenshots, and README Evidence.
- Engineering evidence covers Vue 3 + TypeScript frontend, five Showcase pages, Spring Boot backend, ticket workflow, Knowledge Base / RAG context, Provider fallback, Trace Evidence, 24 backend tests, build verification, and README portfolio documentation.
- The Trust Panel states what is real: runnable portfolio engineering project, real frontend Showcase pages, real browser screenshots, README documentation, build / screenshots acceptance, backend interfaces, ticket state flow, Trace Evidence, Provider fallback, and Human Review evidence.
- The Trust Panel also states what it is not: not a production enterprise RAG system, not automatic customer service, not real customer data, not real enterprise clients, not online traffic, not commercial metrics, and not a stable production LLM service.
- Provider boundary: OpenAI-compatible Provider code exists, but source README records no successful stable real-model response verification. The portfolio page must not claim OpenAI / DeepSeek / real Provider stable connection success.
- RAG boundary: current RAG means keyword knowledge references and evidence display, not embedding, Vector DB, or complete production RAG Pipeline.
- Human Review boundary: workflow state design for explainability and auditability, not production approval infrastructure.

### Ticket RAG Detail Screenshot Sources

All five files are copied read-only from `D:\workhome\enterprise-ai-ticket-copilot\docs\images` into `public/images/projects/ticket-rag/`:

- `dashboard.png`
- `ticket-detail.png`
- `knowledge-base.png`
- `trace-evidence.png`
- `human-review.png`

The original Enterprise Ticket RAG Copilot project must remain unchanged. These are real local browser screenshot copies, not design-reference material.

## P3A MCP Tool Gateway Detail

- Route: `/projects/mcp-gateway`.
- Structure: Detail Hero, Project Summary Rail, Why this project exists, Agent Governance Flow, Core Agent Flow, Real Browser Evidence, grouped Backend & Engineering Evidence, Trust Panel, and interview Q&A.
- The Project Summary Rail exposes Role, Core, Evidence, and Boundary in the first viewport.
- The eight-node Agent Governance Flow explains Agent Request, Tool Registry, Policy Check, HTTP-only JSON-RPC adapter, Tool Call, Trace Evidence, Audit Log, and Human Review as one readable chain.
- Backend evidence covers the source project's recorded 60 tests, GitHub Actions CI, Docker Compose, OpenAPI, H2, JdbcTemplate repositories, JSON-RPC adapter, RBAC PolicyService, Audit Log, and Trace repository boundary.
- Backend evidence is grouped into Testing & CI, API & Deployment, Persistence & Repository, and Agent Governance.
- The Trust Panel separates What it is, What it is not, and Demo-only assumptions. It explicitly states MCP-style rather than full MCP compatibility, demo RBAC and `X-Demo-Role`, local H2 persistence, sandbox Tool execution, and the absence of real customers, production traffic, or commercial data.
- Interview notes use five Q&A cards covering CRUD differentiation, JSON-RPC intent, high-risk review, H2/JdbcTemplate choices, and the capability demonstrated by the project.

### MCP Detail Screenshot Sources

All five files are copied read-only from `D:\workhome\mcp-tool-gateway\docs\images\large` into `public/images/projects/mcp/`:

- `mcp-tool-workbench.png`
- `tool-registry.png`
- `human-review-center.png`
- `trace-evidence.png`
- `audit-log.png`

The original MCP Tool Gateway project must remain unchanged. These are real local browser screenshot copies, not design-reference material.

## P1E Hero Rebuild

- Split `AI Agent` and `工程师作品集` into independent title blocks with stable line-height and spacing so the English descender can never overlap the Chinese title.
- Rebuilt the right-side visual emphasis around CSS/SVG mountain terrain, orange/green energy paths, depth gradients, and restrained particle points.
- Reduced floating tags to the three evidence labels that support the hero: RAG, MCP-style, and Trace Evidence.
- Reframed JSON-RPC as a small floating evidence card and Trace Timeline as a lower horizontal evidence rail.
- Reworked project entries into editorial case-study strips with numbering, a single positioning line, three core tags, and directional arrows.
- Kept the implementation in Vue, TypeScript, and native CSS. No canvas, GSAP, Three.js, animation library, or UI framework is used.

## Motion Implementation

- CSS animations drive terrain line flow, orange/green light streams, floating tags, JSON-RPC scan light, Trace Timeline light point, node pulse, and project-card hover states.
- TypeScript is used only for lightweight mouse parallax in `src/composables/useParallax.ts`.
- No canvas, GSAP, Three.js, particle library, or UI framework is used.
- Motion is visual expression only and does not represent real API status or production runtime state.
- P1D keeps the P1C motion system but lowers intensity, speed, opacity, and parallax distance.

## P1D Visual Refinement

- Reduced floating tech tags from ten to five: Spring Boot, RAG, MCP-style, Trace Evidence, and JSON-RPC.
- Moved project entries out of the right-side stack into three larger bottom case-study cards.
- Kept only JSON-RPC and Trace Timeline as right-side engineering evidence panels.
- Lowered background particle, terrain, and orange/green light opacity to improve Chinese text readability.
- Increased spacing between hero copy, engineering panels, and project entries.

## Motion References

`docs/design/motion-references/` is ignored by Git. Any local video placed there is a motion reference only and must not be used as a page asset or committed.

## Reduced Motion

`@media (prefers-reduced-motion: reduce)` disables parallax, background motion, Timeline flow, scan light, floating tags, and animated reveals. Static hover feedback remains available.

## Screenshot Paths

- `docs/images/portfolio-home.png`
- `docs/images/large/portfolio-home.png`
- `docs/images/projects-overview.png`
- `docs/images/large/projects-overview.png`
- `docs/images/devflow-detail.png`
- `docs/images/large/devflow-detail.png`
- `docs/images/ticket-rag-detail.png`
- `docs/images/large/ticket-rag-detail.png`
- `docs/images/mcp-gateway-detail.png`
- `docs/images/large/mcp-gateway-detail.png`

These are real browser screenshots generated from the Vue app. The reference image remains only a design reference.

## Next Step

P4 should prepare whole-site navigation, screenshots, README, deployment readiness, and portfolio finalization. Do not add new backend services, real API integrations, login, CMS, or production claims unless a separate task explicitly asks for them and evidence supports it.
