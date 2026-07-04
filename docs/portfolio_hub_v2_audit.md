# Portfolio Hub v2 只读审计

审计日期：2026-07-04
目标仓库：`D:\workhome\ai-agent-portfolio-hub`
审计范围：页面、README、路由、项目数据、项目卡片、case-study、截图、源项目证据、静态部署边界
审计方式：仅查看仓库与源项目文件；未修改业务代码，未运行会覆盖截图或生成构建产物的命令。

## 1. Git 与项目基线

- 当前分支：`main`
- 审查开始时状态：`## main...origin/main`，工作树干净。
- 技术栈：Vue 3、Vue Router、Vite、TypeScript、Native CSS、Playwright。
- 部署边界：纯静态 Vite 构建，Vercel 通过 `vercel.json` 将 history route rewrite 到 `index.html`；站点没有后端、CMS、登录或真实 API 集成。
- 当前视觉方向：已有并已落地的 cinematic AI portfolio / editorial product showcase。主色为黑、暖橙和证据绿，使用山脉/数据流背景、Trace、JSON-RPC 和项目证据卡片。设计参考位于 `docs/design/references/cinematic-ai-agent-homepage-reference.png`，并已明确标注为参考图而非运行证据。

## 2. 当前页面与路由

当前共 6 个路由：

| 路由 | 页面 | 状态 |
| --- | --- | --- |
| `/` | Home | 已实现 |
| `/projects` | Projects case-study index | 已实现 |
| `/projects/devflow` | DevFlow Copilot | 已实现 |
| `/projects/ticket-rag` | Enterprise Ticket RAG Copilot | 已实现 |
| `/projects/mcp-gateway` | MCP Tool Gateway | 已实现 |
| `/projects/offerflow` | OfferFlow Copilot | 已实现 |

路由使用 `createWebHistory()`，详情页为懒加载，符合当前 Vercel 静态部署方式。当前没有 PromptOps 路由。

## 3. 首页、项目卡片与 Projects 页审查

### 首页

- 首页视觉与既有参考方向一致，辨识度高，不是普通后台模板。
- 现有首页项目顺序为 DevFlow、Ticket RAG、MCP Gateway、OfferFlow。
- 首页首屏当前只明显露出前三项，第四项位于后续内容；扩展到五项后需要控制首屏密度，不能把主视觉改成规则卡片网格。
- 首页文案强调 Prompt、Tool、Provider、Trace Evidence、Human Review、Audit Log，适合升级为 AI Full-Stack Developer Portfolio v2。

### Projects 页

- 当前有 4 张完整 case-study 卡片，并继续呈现 Capability Matrix、Evidence Wall 和 Project Boundary。
- 卡片信息结构完整：问题、工作流、技术栈、工程证据、边界、截图来源和简历价值。
- 数据集中在 `src/data/projects.ts`，适合新增 PromptOps 类型、标签、证据映射和排序。
- 页面已偏向编辑式 case-study，而非通用 dashboard；新增项目应沿用这一结构。

### Case-study 页面

- 4 个详情页共用 DetailHero、ProjectSummaryRail、ArchitectureFlow、ScreenshotGallery、EngineeringEvidenceGrid、BoundaryPanel、InterviewNotes 等组件。
- `src/data/projectDetails.ts` 集中承载大量事实与边界，新增 PromptOps 可以复用同一页面骨架，不需要另起一套普通后台视觉。
- 每个详情页都明确区分本地运行截图、设计参考、demo 能力和生产能力，整体边界意识良好。

## 4. README 与截图审查

### README

- `Current Pages` 与 6 个现有路由一致，但缺少未来的 `/projects/promptops`。
- `Source Projects` 当前只有 DevFlow、Ticket RAG、MCP 和 OfferFlow；OfferFlow 仍写成“本地准备发布”，但 GitHub 仓库现已存在，信息已过时。
- README 明确站点是静态作品集，不是后端业务系统，也明确不声称生产用户、客户、流量、商业指标或生产部署，边界正确。
- README 当前描述“四个项目”，v2 需要同步改为五个核心项目；如果未来纳入 GenAI DataPipeline，再单独调整数量。

### Portfolio Hub 截图

- `docs/images/` 有首页、Projects 页和 4 个详情页的 1440 截图。
- `docs/images/large/` 有相同路由的 1920 截图。
- `docs/images/review/home-1366x768.png` 有首页 1366 审查截图。
- `scripts/capture-screenshots.mjs` 当前捕获 13 张截图，不包含 PromptOps 路由，也没有 Projects/详情页的窄屏截图。
- 本轮按“只读优先”没有运行 `npm run screenshots`，现有截图没有被覆盖。

### 源项目截图

- DevFlow：`public/images/projects/devflow/`，来源为 `D:\workhome\ai-coding-workbench\docs\images`。
- Ticket RAG：`public/images/projects/ticket-rag/`，来源为 `D:\workhome\enterprise-ai-ticket-copilot\docs\images`。
- MCP Gateway：`public/images/projects/mcp/`，来源为 `D:\workhome\mcp-tool-gateway\docs\images\large`。
- OfferFlow：`public/images/projects/offerflow/`，来源为 `D:\workhome\offerflow-copilot\docs\images`。
- PromptOps 尚未复制到 Portfolio Hub；真实运行截图已存在于 `D:\workhome\ai-agent-eval-promptops\docs\images`。

## 5. 项目证据审查

### DevFlow Copilot — 推荐保留第 1 位

可追溯来源：

- `D:\workhome\ai-coding-workbench\README.md`
- `D:\workhome\ai-coding-workbench\docs\metrics\metrics_snapshot.md`
- `D:\workhome\ai-coding-workbench\docs\images`

可安全展示：AI Coding workflow、Prompt/Provider/Trace/Knowledge Reference/Human Review、8 个真实前端页面路由、30 个 endpoint mapping、20 个后端测试源码、最近一次快照记录 build 与 Maven test 通过。所有数量必须同时标注为 2026-07-04 本地指标快照。默认 Provider 是 `local-rule`；Knowledge Base 是关键词/简单相似度，不是向量数据库。

### Enterprise Ticket RAG Copilot — 推荐保留第 2 位

可追溯来源：

- `D:\workhome\enterprise-ai-ticket-copilot\README.md`
- `D:\workhome\enterprise-ai-ticket-copilot\docs\metrics\rag_metrics_snapshot.md`
- `D:\workhome\enterprise-ai-ticket-copilot\docs\metrics\rag_metrics_latest.json`
- `D:\workhome\enterprise-ai-ticket-copilot\docs\images`

可安全展示：Ticket、keyword retrieval、citation gating、Provider fallback、Trace Evidence、Human Review。指标快照来自 16 条 synthetic demo cases；Top-K、Recall、Citation 等数值只能写成“本地 synthetic demo 数据集 + keyword retrieval”的结果，不能写成真实模型准确率、线上效果或生产 RAG 指标。

### PromptOps Studio — 推荐新增并排第 3 位

可追溯来源：

- `D:\workhome\ai-agent-eval-promptops\README.md`
- `D:\workhome\ai-agent-eval-promptops\docs\architecture.md`
- `D:\workhome\ai-agent-eval-promptops\docs\acceptance-checklist.md`
- `D:\workhome\ai-agent-eval-promptops\docs\metrics\eval_metrics_plan.md`
- `D:\workhome\ai-agent-eval-promptops\docs\images`
- GitHub：`https://github.com/jameswilson87156-del/ai-agent-eval-promptops`

可安全展示：Prompt Version、Dataset、Batch Evaluation、Output Compare、Generation Trace、Failure Case、Rule-based Eval、非持久化 Human Review、Vue 3/TypeScript、Java 17/Spring Boot 3.3/MyBatis-Plus、H2 demo/MySQL schema。本地验收历史记录为 13 个后端测试、8 张真实浏览器截图；如果在 v2 页面使用数字，应明确这是源项目已有验收记录而不是本轮重跑结果。

必须同时展示的边界：Local Demo、确定性 Mock Output、Rule-based Eval、无需 API Key；未接真实模型、未启用 LLM-as-Judge、未实现多模型对比/RAG/异步队列/生产监控，Human Review 结论不持久化。`docs/metrics/eval_metrics_plan.md` 是规划，不是已生成的指标快照，因此其中“30 条样本、5 个维度”等计划数字不能当成当前事实。

### MCP Tool Gateway — 推荐保留第 4 位

可追溯来源：

- `D:\workhome\mcp-tool-gateway\README.md`
- `D:\workhome\mcp-tool-gateway\docs`
- `D:\workhome\mcp-tool-gateway\docs\images\large`

可安全展示：Tool/Prompt/Resource 管理、MCP-style HTTP JSON-RPC adapter、Policy、Trace、Audit、Human Review、H2 persistence、CI/OpenAPI/Docker 本地启动路径，以及源 README 记录的 60 tests / 0 failures / 0 errors。必须保留 MCP-style、有限 HTTP methods、非完整官方 MCP、RBAC demo、`X-Demo-Role` 可伪造、sandbox tool、不连接真实外部系统等边界。

### OfferFlow Copilot — 推荐保留第 5 位

可追溯来源：

- `D:\workhome\offerflow-copilot\README.md`
- `D:\workhome\offerflow-copilot\docs\screenshot-manifest.md`
- `D:\workhome\offerflow-copilot\docs\images`
- GitHub：`https://github.com/jameswilson87156-del/offerflow-copilot`

可安全展示：JD Intake、Resume Evidence、Match Report、Provider Trace、Schema/Risk Guard、Human Review、Copy Permission；源 README 记录 126 backend tests passed、18 个 Playwright checks。默认是 deterministic `local-rule` + H2 seeded demo data。真实 Provider 只能描述为“optional manual dry-run path, disabled by default”，不能描述为生产集成、稳定服务或可绕过 review/copy gate。

### GenAI DataPipeline — 建议本轮暂缓新增卡片

GitHub 来源：

- `https://github.com/jameswilson87156-del/GenAI-DataPipeline`
- 当前可审查证据主要是 GitHub README。

README 描述的主链路具有差异化：Java 主控、Python FastAPI 清洗节点、Redis pending/processing 可靠队列、MySQL CAS、LangChain4j 预标注、Vue 专家复核工作台。它很适合作为未来第 6 个候选项目。

本轮不建议上卡片的原因：GitHub tree 当前未发现 `docs/images`、`docs/metrics`、测试结果快照或 screenshot manifest；README 也没有真实运行截图。仅凭 README 的“已打通”描述不足以满足 v2 的证据标准。后续至少需要真实运行截图、可复现测试/构建记录、清楚的 demo/provider/data 边界，才能加入。

如果用户仍决定本轮加入，只能标为 `Candidate / README-verified, runtime evidence pending`，不得展示未经复核的指标，也不得使用概念图替代运行截图；但这会削弱整个 Portfolio Hub 的统一证据标准，因此不推荐。

### Flash Sale System — 不建议放入 AI 核心项目序列

GitHub 来源：`https://github.com/jameswilson87156-del/wzl-flash-sale`。

它是 Spring Boot、Redis、RabbitMQ、MySQL 的高并发秒杀学习/工程化改造项目，能补充 Java 后端面试材料，但不属于 AI Full-Stack 主线。README 明确说明它来源于开源社区并做了工程化改造，且 GitHub tree 当前没有运行截图、metrics 或测试快照。建议只作为 Java Backend 备选链接或简历补充，不进入首页核心卡片，也不与原创 AI 项目并列。

## 6. 视觉审计与 v2 方向

选择的方向：保留现有 cinematic AI portfolio，并把 Projects/详情页继续做成 editorial evidence dossier。

原因：

- 当前视觉已经有强烈个人辨识度，符合 AI 全栈作品集而非企业后台。
- 黑/橙/绿视觉可以承载不同项目的真实浅色或深色运行截图，不需要重画源项目界面。
- PromptOps 自身是浅色高密度控制台；作为 case-study 的“证据画面”嵌入暗色编辑式页面，既有对比又不会让 Portfolio Hub 变成普通后台。
- 新增项目只需要扩展既有组件和数据，不需要引入第三方图片或新的 AI 概念图。

风险：五张首页项目入口可能挤压首屏。实现时应优先保留主视觉、Trace 和大标题，通过后续纵向序列或紧凑项目 rail 容纳新增项，不能改成五张同尺寸 KPI 卡。

## 7. 审计结论

本轮推荐 v2 核心序列：

1. DevFlow Copilot
2. Enterprise Ticket RAG Copilot
3. PromptOps Studio
4. MCP Tool Gateway
5. OfferFlow Copilot

本轮不推荐加入核心序列：

- GenAI DataPipeline：暂缓，等待真实截图与可复核工程证据。
- Flash Sale System：保留为 Java 后端备选，不属于 AI Full-Stack 核心叙事，且包含开源改造属性。

## 8. 本轮未执行项

- 未改业务代码、样式、路由或 README。
- 未复制 PromptOps 截图。
- 未运行 `npm run build`，避免在只读审查阶段生成/更新 `dist`。
- 未运行 `npm run screenshots`，避免覆盖 `docs/images`。
- 未运行任何源项目服务，也未调用真实 Provider。
- 未提交或读取 API Key。
