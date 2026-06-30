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
- Added centralized portfolio data in `src/data/portfolio.ts`.
- Added centralized Projects case-study data in `src/data/projects.ts`.
- Added real browser screenshot generation with Playwright.

## Current Routes

- `/` — approved cinematic AI Agent Engineer portfolio homepage.
- `/projects` — Projects case-study index.

Vue Router is installed and configured in `src/router/index.ts`. Project detail routes are intentionally not implemented in P2.

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

These are real browser screenshots generated from the Vue app. The reference image remains only a design reference.

## Next Step

P3 should add three focused project detail pages using the current case-study data, preview provenance, and routing foundation. Keep each detail page distinct, reuse the Projects evidence vocabulary, and do not turn the portfolio into a dashboard or claim production capability that is not implemented.
