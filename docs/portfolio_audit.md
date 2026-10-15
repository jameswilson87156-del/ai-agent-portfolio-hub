# Portfolio Audit

审查日期：2026-07-05  
审查范围：`D:\workhome\ai-agent-portfolio-hub` 现有作品集项目、页面路由、数据文件、截图资产、README、部署配置，以及 5 个源项目 README / docs / metrics / screenshots 证据。  
审查方式：只读审查。未修改前端代码、未新增页面、未改 README、未改截图。

## 1. 是否已有作品集项目

已有，路径为：

`D:\workhome\ai-agent-portfolio-hub`

当前本地状态：

- 当前分支：`main`
- `git status --short`：clean
- 技术栈：Vue 3、TypeScript、Vue Router、Vite、Native CSS、Playwright screenshots
- 部署边界：静态 Vite 前端，`vercel.json` 将所有路由 rewrite 到 `index.html`
- 线上地址：`https://ai-agent-portfolio-hub.vercel.app/`

结论：建议继续改现有项目，不建议新建 `D:\workhome\ai-application-portfolio`。现有项目已经具备完整静态部署、路由、截图脚本、Vercel 配置和 5 个核心 case-study 页面，重做会浪费已完成证据链。

## 2. 当前页面与路由

当前路由文件：`src/router/index.ts`

已有页面：

| Route | 页面 |
|---|---|
| `/` | Home |
| `/projects` | Projects case-study index |
| `/projects/devflow` | DevFlow Copilot case study |
| `/projects/ticket-rag` | Enterprise Ticket RAG Copilot case study |
| `/projects/promptops` | PromptOps Studio case study |
| `/projects/mcp-gateway` | MCP Tool Gateway case study |
| `/projects/offerflow` | OfferFlow Copilot case study |

当前截图脚本 `scripts/capture-screenshots.mjs` 已覆盖上述 7 个路由，并生成 1440 / 1920 route captures；首页另有 1366 review 截图。

## 3. 当前视觉与信息架构审查

当前 Portfolio Hub v2 是 cinematic / editorial evidence dossier 方向：黑底、山体/网络感背景、橙绿点缀、项目证据墙、长篇 case study。它适合技术面试官深入看证据，但不完全符合本轮“求职投递作品集”的第一屏目标。

优点：

- 已有较强视觉完成度，不是普通后台，不是博客。
- 5 个核心项目都有 case-study 页面和真实截图。
- 已有 evidence / boundary / trust panel 结构，适合防止夸大。
- 现有详情页内容密度高，适合技术面试前深看。

需要调整：

- 首页首屏标题应从偏“AI Agent Engineer Portfolio Hub”调整为更直接的“AI 应用开发作品集”。
- 首屏应在 10 秒内说明：软件工程本科 2027 届、主投方向、Java + Vue + AI Workflow 工程落地。
- 当前首页主 CTA 不够贴近投递场景；需要明确“查看核心项目 / 查看 GitHub / 下载简历 / 联系我”。
- 当前项目顺序是 DevFlow、Ticket RAG、PromptOps、MCP、OfferFlow；用户要求调整为 DevFlow、Ticket RAG、PromptOps、OfferFlow、MCP。
- 当前首页视觉偏暗、偏 cinematic，HR 快速浏览时信息识别成本略高；建议转为清爽专业的 light AI tool portfolio，但保留证据链和 case-study 深度。
- 当前卡片字段更偏工程 evidence，需补充“解决的问题 / 关键数据 / GitHub / 详情页 / 边界说明”的 HR 快扫结构。

## 4. 当前 README 与部署方式

README 当前内容：

- 已说明这是 AI Full-Stack Developer Portfolio Hub v2。
- 已列出 Current Pages、Tech Stack、Source Projects、Screenshot Evidence、Project Boundaries、Deployment。
- 已声明静态 Vite frontend，不是后台业务系统。
- 已说明 Vercel 部署、build command、output directory。

部署方式：

- Vite static frontend
- `npm run build`
- Vercel output: `dist`
- `vercel.json` 支持 Vue Router history route refresh
- GitHub Actions CI 已运行 build 和 screenshots

后续 README 需要更新，但本轮只审查，不修改。

## 5. 当前 Portfolio Hub 截图资产

Portfolio 自身页面截图：

- `docs/images/portfolio-home.png`
- `docs/images/projects-overview.png`
- `docs/images/devflow-detail.png`
- `docs/images/ticket-rag-detail.png`
- `docs/images/promptops-detail.png`
- `docs/images/mcp-gateway-detail.png`
- `docs/images/offerflow-detail.png`
- `docs/images/large/*.png`
- `docs/images/review/home-1366x768.png`

项目截图资产：

| 项目 | Portfolio 已复制截图目录 |
|---|---|
| DevFlow Copilot | `public/images/projects/devflow/` |
| Enterprise Ticket RAG Copilot | `public/images/projects/ticket-rag/` |
| PromptOps Studio | `public/images/projects/promptops/` |
| OfferFlow Copilot | `public/images/projects/offerflow/` |
| MCP Tool Gateway | `public/images/projects/mcp/` |

注意：`docs/design/references/` 是设计参考图，不是运行截图，不能当作项目证据。

## 6. 5 个 GitHub 链接核对

以下仓库通过 GitHub CLI 核对可达，默认分支均为 `main`：

| 项目 | GitHub | 最近 pushedAt |
|---|---|---|
| DevFlow Copilot | `https://github.com/jameswilson87156-del/devflow-copilot` | 2026-07-04T10:08:14Z |
| Enterprise Ticket RAG Copilot | `https://github.com/jameswilson87156-del/enterprise-ai-ticket-copilot` | 2026-07-04T11:50:28Z |
| PromptOps Studio | `https://github.com/jameswilson87156-del/ai-agent-eval-promptops` | 2026-07-04T13:10:51Z |
| OfferFlow Copilot | `https://github.com/jameswilson87156-del/offerflow-copilot` | 2026-07-02T12:05:25Z |
| MCP Tool Gateway | `https://github.com/jameswilson87156-del/mcp-tool-gateway` | 2026-06-30T13:05:13Z |

## 7. 源项目本地证据核对

| 项目 | 本地路径 | 本地截图数量 | docs/metrics | 远端 |
|---|---|---:|---|---|
| DevFlow Copilot | `D:\workhome\ai-coding-workbench` | 18 | 有：`docs/metrics/metrics_snapshot.md` | `devflow-copilot.git` |
| Enterprise Ticket RAG Copilot | `D:\workhome\enterprise-ai-ticket-copilot` | 18 | 有：`docs/metrics/rag_metrics_snapshot.md` | `enterprise-ai-ticket-copilot.git` |
| PromptOps Studio | `D:\workhome\ai-agent-eval-promptops` | 16 | 有：`docs/metrics/eval_metrics_plan.md` | `ai-agent-eval-promptops.git` |
| OfferFlow Copilot | `D:\workhome\offerflow-copilot` | 17 | 无独立 metrics 目录，但 README / release notes 有验收记录 | `offerflow-copilot.git` |
| MCP Tool Gateway | `D:\workhome\mcp-tool-gateway` | 12 | 无独立 metrics 目录，但 README / TEST_REPORT / project-boundary 有验收记录 | `mcp-tool-gateway.git` |

## 8. 每个项目可写数据与证据来源

### DevFlow Copilot

可写数据来源：

- `D:\workhome\ai-coding-workbench\README.md`
- `D:\workhome\ai-coding-workbench\docs\metrics\metrics_snapshot.md`
- `D:\workhome\ai-coding-workbench\docs\images`

可写：

- AI Coding Workbench / AI Coding Workflow 控制台。
- Prompt -> Provider -> Result -> Generation Trace -> Agent Run Trace -> Tool Call -> Human Review。
- 8 个 Vue 页面文件，8 个真实前端页面路由。
- 30 个后端 endpoint mapping。
- 20 个后端自动化测试源码；metrics snapshot 记录最近一次 `mvn test` 通过。
- 13 张本地截图文件。
- 默认 Provider 是 `local-rule`；OpenAI-compatible Provider 是代码层适配，需要环境变量配置 Key。
- Knowledge Base 当前是关键词 / 简单相似度检索，不是向量数据库。

不能写：

- 生产级 AI IDE。
- 稳定真实 Provider 服务。
- 真实用户、生产流量、商业收益、SLA。
- 完整多 Agent Runtime。
- Vector DB 已实现。

### Enterprise Ticket RAG Copilot

可写数据来源：

- `D:\workhome\enterprise-ai-ticket-copilot\README.md`
- `D:\workhome\enterprise-ai-ticket-copilot\docs\metrics\rag_metrics_snapshot.md`
- `D:\workhome\enterprise-ai-ticket-copilot\docs\metrics\rag_metrics_latest.json`
- `D:\workhome\enterprise-ai-ticket-copilot\docs\images`

可写：

- 企业工单 RAG Copilot / 企业知识库问答工作台。
- Ticket Workbench、Knowledge Retrieval、Citation Evidence、Trace Timeline、Human Review。
- 16 条 synthetic enterprise ticket demo cases。
- Top-K = 3。
- Top-K Hit Rate 100.00%。
- Context Recall@K 90.00%。
- Citation Coverage 100.00%。
- Citation Precision 81.11%。
- Failed Case Count 6。
- 24 个后端测试。
- 当前检索是 category-aware keyword retrieval / citation gating。

不能写：

- 真实企业数据。
- 真实线上用户或真实客户数据。
- 真实向量 RAG。
- Vector DB / Hybrid / Rerank 已实现。
- 真实模型质量、真实线上效果、生产 SLA。

### PromptOps Studio

可写数据来源：

- `D:\workhome\ai-agent-eval-promptops\README.md`
- `D:\workhome\ai-agent-eval-promptops\docs\acceptance-checklist.md`
- `D:\workhome\ai-agent-eval-promptops\docs\project_audit_promptops.md`
- `D:\workhome\ai-agent-eval-promptops\docs\images`

可写：

- Prompt 评测与回归控制台。
- Prompt Version、Dataset、Eval Run、Case Result、Generation Trace、Output Compare、Failure Cases、System Boundary。
- Local Demo / Mock Output / Rule-based Eval。
- 无需 API Key。
- 未接入真实模型，LLM-as-Judge 未启用。
- `mvn test` 通过，13 个测试、0 失败。
- `npm run screenshots` 通过并生成 8 张真实浏览器截图。
- 1440 / 1920 截图、1366 / 390 页面无横向溢出，浏览器无 console/page error。

不能写：

- 真实 LLM 质量。
- LLM-as-Judge 已启用。
- 多模型真实评测。
- 真实用户数据。
- 生产审批记录。
- 多模型对比已完成。

### OfferFlow Copilot

可写数据来源：

- `D:\workhome\offerflow-copilot\README.md`
- `D:\workhome\offerflow-copilot\docs\release-notes-v0.1.0-portfolio.md`
- `D:\workhome\offerflow-copilot\docs\resume-bullets.md`
- `D:\workhome\offerflow-copilot\docs\screenshot-manifest.md`
- `D:\workhome\offerflow-copilot\docs\images`

可写：

- Java + AI 求职工作流平台 / evidence-first JD workflow demo。
- JD Intake、Resume Evidence、Match Report、Human Review、Copy Permission、Provider Trace。
- 126 backend tests passed。
- `npm run screenshots`: 18 passed。
- Playwright screenshots / 1366 viewport horizontal overflow validation。
- Provider SPI、Prompt / Schema Contract、Provider Response Validator、Risk Guard。
- Optional manual real Provider dry-run path verified with DeepSeek and OpenAI-compatible relay。
- 默认关闭真实 Provider，`rawResponseSaved=false`，确认前 `copyAllowed=false`。

不能写：

- 生产招聘平台。
- 接招聘平台 API。
- 爬虫。
- 自动投递。
- Offer 概率、录取概率、保证通过。
- 真实隐私数据保存。
- 稳定真实 Provider 服务。

### MCP Tool Gateway

可写数据来源：

- `D:\workhome\mcp-tool-gateway\README.md`
- `D:\workhome\mcp-tool-gateway\docs\project-boundary.md`
- `D:\workhome\mcp-tool-gateway\docs\TEST_REPORT.md`
- `D:\workhome\mcp-tool-gateway\docs\resume-evidence.md`
- `D:\workhome\mcp-tool-gateway\docs\images`

可写：

- Agent 工具网关与审计链路。
- Tool Registry、Policy Check、Trace Evidence、Audit Log、Human Review。
- MCP-style JSON-RPC adapter demo。
- HTTP `POST /api/mcp/rpc` 支持 `tools/list`、`tools/call`、`prompts/list`、`resources/list` 四个 demo methods。
- 9 张 demo 表。
- 60 个后端测试。
- Vue 3 + TypeScript developer console。
- Playwright 真实截图。

不能写：

- 完整 MCP 官方协议实现。
- 官方 MCP server。
- complete MCP compatibility。
- 生产级 RBAC / IAM / tenant isolation。
- 无人值守高风险自动执行。
- 真实外部工具执行平台。

## 9. 排除项目检查

已按用户提供的排除清单检索当前 Portfolio Hub，未发现对应候选项目进入首页、项目列表、README 或 case-study 页面。

后续实现仍需保持：排除清单项目不得出现在首页、项目列表、README、数据文件、截图说明或 case-study 页面中。

## 10. 主要风险

1. 首页从 cinematic 方向转为投递型 light portfolio 时，要避免重画成普通后台。
2. 不能为了 HR 易读而简化掉项目边界；边界应放在卡片和详情页显眼位置。
3. Ticket RAG 的指标必须绑定 synthetic demo / keyword retrieval / citation gating，不得写成真实 RAG 效果。
4. PromptOps 的 eval 必须绑定 Mock Output / Rule-based Eval，不得写成真实模型评测。
5. OfferFlow 的 Provider dry-run 只能写 optional manual dry-run，默认关闭、review-gated、rawResponseSaved=false。
6. MCP Gateway 只能写 MCP-style adapter demo，不写完整 MCP 协议兼容。
7. 首页需要“下载简历 / 联系我”，但当前尚未确认简历 PDF 路径、邮箱/微信/手机号展示方式。

## 11. 审查结论

建议在现有 `ai-agent-portfolio-hub` 上改造，不新建项目。改造方向应从“cinematic evidence dossier”调整为“专业清爽的 AI 应用开发投递作品集”：首屏更直接，项目卡片更适合 HR 快扫，详情页继续保留技术证据与边界说明。
