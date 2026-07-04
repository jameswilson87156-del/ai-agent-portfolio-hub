# Portfolio Hub v2 实施计划

状态：用户已于 2026-07-04 确认，实施范围按本计划执行。
确认前未修改业务代码；确认后才开始页面实现、图片复制、构建、截图与提交。

## 1. v2 范围决定

本轮只新增 PromptOps Studio，首页与 Projects 页固定展示 5 个核心项目，不设置候选项目卡片。

目标排序：

1. DevFlow Copilot
2. Enterprise Ticket RAG Copilot
3. PromptOps Studio
4. MCP Tool Gateway
5. OfferFlow Copilot

## 2. 数据与证据规则

- 每条能力声明必须能定位到源项目 README、`docs/metrics`、验收文档或真实运行截图。
- 数字必须附带范围和上下文，例如“本地验收记录”“synthetic demo cases”“local-rule”。
- 不从 UI 中抄写看起来像指标的 demo 数字作为真实工程指标。
- 参考图只能指导 Portfolio Hub 视觉，不能进入项目 Evidence Gallery。
- 不使用第三方图片；Portfolio Hub 只复制本人源项目仓库内的真实运行截图。
- 不复制 `.env`、配置密钥、日志、数据库或用户数据。

## 3. 实施步骤

### Phase A — 数据模型与排序

1. 扩展 `src/data/projects.ts`：
   - 新增 PromptOps project code、label 和 card data。
   - 将排序调整为 DF、RAG、PromptOps、MCP、OfferFlow。
   - 更新 Capability Matrix 与 Evidence Wall 映射。
   - PromptOps 明确标注 `Local Demo / Mock Output / Rule-based Eval`。
2. 扩展 `src/data/portfolio.ts`：
   - 首页项目入口按同一顺序更新。
   - 控制首页项目 rail 密度，不削弱 hero。
3. 扩展 `src/data/projectDetails.ts`：
   - 新增 PromptOps 详情数据。
   - 只使用源 README、architecture、acceptance checklist、metrics plan 中已实现事实。
   - 不把 metrics plan 的未来计划写成已完成结果。

### Phase B — PromptOps 详情页与路由

1. 新增 `src/views/PromptOpsDetailView.vue`。
2. 在 `src/router/index.ts` 新增懒加载路由 `/projects/promptops`。
3. 复用现有详情组件：DetailHero、ProjectSummaryRail、ArchitectureFlow、ScreenshotGallery、EngineeringEvidenceGrid、BoundaryPanel、InterviewNotes。
4. 页面核心叙事：
   - Dataset → Prompt Version → Mock Output → Rule-based Eval → Score/Failure Case → Human Review → Regression Check。
   - 与其他项目的差异：DevFlow 是 AI Coding workflow，Ticket RAG 是 retrieval/evidence，PromptOps 是 eval/regression，MCP 是 tool governance，OfferFlow 是 evidence/copy governance。

### Phase C — 真实截图复制

从 `D:\workhome\ai-agent-eval-promptops\docs\images` 复制到 `public/images/projects/promptops/`，优先使用：

- `trace-detail.png`：详情页主证据。
- `eval-dashboard.png`：项目卡或总览证据。
- `batch-evaluation.png`：批量评测流程。
- `output-compare.png`：版本比较与回归。
- `failure-cases.png`：失败归因。
- `system-boundary.png`：Local Demo / Mock / Rule-based 边界。

可以按页面需要补充 `prompt-studio.png` 或 `dataset.png`，但不复制 `docs/design_refs` 下的参考图。复制后核对文件名、尺寸、来源说明和 alt 文案。

### Phase D — 视觉整合

- 保留现有 cinematic/editorial 方向和黑/橙/绿 token。
- PromptOps 使用既有卡片与 dossier 结构，不复制其浅色后台壳作为 Portfolio Hub 布局。
- 真实 PromptOps 截图作为高对比 Evidence Frame 呈现。
- 项目顺序编号统一重排为 01–05。
- 避免普通 sidebar + KPI + table dashboard；Portfolio Hub 继续是作品集叙事层，不模拟 PromptOps 产品本身。
- 保留 focus、keyboard、reduced-motion 和响应式行为；新增内容不得造成水平溢出或首屏遮挡。

### Phase E — README 与脚本同步

1. 更新根 README：
   - 标题/描述升级为 AI Full-Stack Developer Portfolio v2。
   - `Current Pages` 增加 `/projects/promptops`。
   - `Source Projects` 增加 PromptOps，并把 OfferFlow 改为真实 GitHub URL。
   - 项目数量从 4 更新为 5。
   - `Screenshot Evidence` 增加 PromptOps 源截图目录与 Portfolio 路由截图。
   - 边界增加 PromptOps 的 Local Demo/Mock/Rule-based/无真实模型说明。
2. 更新 `scripts/capture-screenshots.mjs`：
   - 新增 `/projects/promptops` 的 1440 和 1920 full-page 截图。
   - 保留现有截图路径与 Vercel 静态路由方式。
   - 如现有脚本稳定允许，补一张窄屏 Projects 或 PromptOps 验收图；不扩大为新的测试框架。

### Phase F — 验收与清洁交付

按顺序执行：

1. `npm run build`
2. `npm run screenshots`
3. 检查新生成的首页、Projects、PromptOps 详情 1440/1920 截图。
4. 检查所有路由、图片 404、中文截断、对比度、卡片排序、水平溢出和静态 history refresh。
5. `git diff --check`
6. 检查只包含预期代码、README、真实截图与生成的 Portfolio Hub 截图。
7. 扫描 diff，确认没有 API Key、`.env`、真实隐私数据或第三方图片。
8. 在用户允许提交的前提下创建一个范围明确的本地 commit，使最终 `git status --short` 为空；如果用户不允许 commit，则“最终 clean”与“保留改动”无法同时满足，需要用户选择。

## 4. 预计修改文件

- `README.md`
- `src/router/index.ts`
- `src/data/projects.ts`
- `src/data/projectDetails.ts`
- `src/data/portfolio.ts`
- `src/views/PromptOpsDetailView.vue`
- 可能的局部样式文件：仅在五项目布局或 PromptOps evidence frame 确有需要时调整
- `scripts/capture-screenshots.mjs`
- `public/images/projects/promptops/*.png`
- `docs/images/portfolio-home.png`
- `docs/images/projects-overview.png`
- `docs/images/promptops-detail.png`
- `docs/images/large/portfolio-home.png`
- `docs/images/large/projects-overview.png`
- `docs/images/large/promptops-detail.png`
- 脚本重跑后发生实际视觉变化的其他现有 route screenshots

## 5. 验收标准

- 首页和 Projects 页项目顺序完全一致。
- PromptOps 卡片可进入 `/projects/promptops`。
- PromptOps 详情页只展示真实运行截图，不使用 design refs。
- README 的 Source Projects、Current Pages、截图清单与真实文件一致。
- PromptOps 所有文案明确 Local Demo、Mock Output、Rule-based Eval 和未接真实模型。
- 首页、Projects 页、Capability Matrix 与 Evidence Wall 只包含 5 个既定核心项目，不出现额外候选卡片。
- `npm run build` 通过。
- `npm run screenshots` 通过。
- Vercel 静态边界未改变，没有后端/API Key/环境密钥进入 Portfolio Hub。
- 最终 Git 工作树按用户确认的提交策略保持 clean。

## 6. 范围冻结

v2 仅维护 DevFlow、Enterprise Ticket RAG、PromptOps、MCP Tool Gateway 与 OfferFlow 五个核心项目。新增第六个项目、候选卡片或备用序列不属于本计划，必须另开任务并重新确认范围。
