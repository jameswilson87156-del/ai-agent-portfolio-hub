# Portfolio Content Plan

计划日期：2026-07-05  
状态：待用户确认后实施。  
原则：所有数据必须来自对应项目 README、docs/metrics、acceptance docs 或真实截图。不能为了投递效果夸大。

## 1. 首页核心文案

建议主标题：

`AI 应用开发作品集`

建议副标题：

`Java + AI 全栈 / RAG / PromptOps / Agent Workflow`

建议说明：

`软件工程本科 2027 届，聚焦 Java + Vue + AI Workflow 工程落地。项目覆盖 Prompt、Provider、RAG、Trace、Human Review、Eval 指标、截图验收与 GitHub 证据链。`

建议主投方向 chips：

- AI 应用开发实习
- Java + AI 全栈开发实习
- AI 工具开发实习
- RAG / PromptOps / Agent 工具平台方向

建议技术 chips：

- Java
- Spring Boot
- Vue 3
- TypeScript
- Vite
- RAG
- PromptOps
- Trace Evidence
- Human Review

CTA：

- 查看核心项目：`/projects`
- 查看 GitHub：待确认是 GitHub profile 还是 Portfolio repo
- 下载简历：待确认 PDF 路径
- 联系我：待确认联系方式展示方式

## 2. 首页项目顺序

必须使用以下顺序：

1. DevFlow Copilot
2. Enterprise Ticket RAG Copilot
3. PromptOps Studio
4. OfferFlow Copilot
5. MCP Tool Gateway

`/projects` 页面同样使用此顺序。

## 3. 首页项目卡片内容

### 3.1 DevFlow Copilot

GitHub：

`https://github.com/jameswilson87156-del/devflow-copilot`

项目定位：

AI Coding Workbench / AI Coding Workflow 控制台。

解决的问题：

把 Prompt 编排、Provider 调用、Generation Trace、Tool Call 与 Human Review 串成可复盘的 AI Coding workflow。

技术栈：

Vue 3、TypeScript、Spring Boot、Java、Prompt Studio、Generation Trace、Human Review。

关键数据：

- 8 个 Vue 页面文件，8 个真实前端页面路由。
- 30 个后端 endpoint mapping。
- 20 个后端自动化测试源码。
- 13 张本地截图文件。

边界：

默认 `local-rule`，OpenAI-compatible Provider 是代码层适配；不声明生产级 AI IDE、真实用户、生产流量、SLA 或稳定真实 Provider 服务。

建议截图：

- `public/images/projects/devflow/dashboard-agentic.png`
- `public/images/projects/devflow/workbench-running.png`
- `public/images/projects/devflow/generation-history.png`
- `public/images/projects/devflow/prompt-templates.png`
- `public/images/projects/devflow/human-review-trace-detail.png`

详情页：

`/projects/devflow`

### 3.2 Enterprise Ticket RAG Copilot

GitHub：

`https://github.com/jameswilson87156-del/enterprise-ai-ticket-copilot`

项目定位：

企业工单 RAG Copilot / 企业知识库问答工作台。

解决的问题：

围绕工单分析、知识检索、引用证据、Trace Timeline 与 Human Review，展示企业 AI Copilot 的可解释链路。

技术栈：

Vue 3、TypeScript、Spring Boot、Java、keyword retrieval、citation gating、local-rule fallback、RAG metrics script。

关键数据：

- 16 条 synthetic demo cases。
- Top-K = 3。
- Top-K Hit Rate 100.00%。
- Context Recall@K 90.00%。
- Citation Coverage 100.00%。
- Citation Precision 81.11%。
- 6 个失败样本。
- 24 个后端测试。

边界：

当前是 keyword retrieval baseline + synthetic demo dataset，不是向量 RAG，不包含真实企业数据，不声明真实模型质量或真实线上业务效果。

建议截图：

- `public/images/projects/ticket-rag/dashboard.png`
- `public/images/projects/ticket-rag/ticket-detail.png`
- `public/images/projects/ticket-rag/knowledge-base.png`
- `public/images/projects/ticket-rag/trace-evidence.png`
- `public/images/projects/ticket-rag/human-review.png`

详情页：

`/projects/ticket-rag`

### 3.3 PromptOps Studio

GitHub：

`https://github.com/jameswilson87156-del/ai-agent-eval-promptops`

项目定位：

Prompt 评测与回归控制台。

解决的问题：

管理 Prompt 版本、批量评测输出、追踪单次运行链路、定位失败样本，并形成可复盘的人工复核闭环。

技术栈：

Vue 3、TypeScript、Vite、Java 17、Spring Boot 3.3、MyBatis-Plus、H2 Demo Profile、Playwright、Rule-based Eval。

关键数据：

- 8 张真实浏览器截图。
- 13 个后端测试通过。
- 1440 / 1920 截图、1366 / 390 页面无横向溢出。
- Local Demo / Mock Output / Rule-based Eval。

边界：

不接真实模型，不启用 LLM-as-Judge，不声明多模型真实评测，不声明真实模型质量，不包含真实用户数据或生产审批记录。

建议截图：

- `public/images/projects/promptops/eval-dashboard.png`
- `public/images/projects/promptops/batch-evaluation.png`
- `public/images/projects/promptops/output-compare.png`
- `public/images/projects/promptops/trace-detail.png`
- `public/images/projects/promptops/failure-cases.png`
- `public/images/projects/promptops/dataset.png`
- `public/images/projects/promptops/system-boundary.png`

详情页：

`/projects/promptops`

### 3.4 OfferFlow Copilot

GitHub：

`https://github.com/jameswilson87156-del/offerflow-copilot`

项目定位：

Java + AI 求职工作流平台 / evidence-first JD workflow demo。

解决的问题：

把 JD Intake、Resume Evidence、Match Report、Provider Trace、Human Review 和 Copy Permission 串成可审计的求职 AI workflow。

技术栈：

Spring Boot 3、Java 17、Vue 3、TypeScript、MyBatis-Plus、Flyway、Provider SPI、Prompt / Schema Contract、Risk Guard、Copy Permission、Trace Evidence。

关键数据：

- 126 backend tests passed。
- `npm run screenshots`: 18 passed。
- Playwright screenshots / 1366 viewport horizontal overflow validation。
- Optional manual real Provider dry-run path verified with DeepSeek and OpenAI-compatible relay。
- `rawResponseSaved=false`。
- `copyAllowed=false` before confirmation。

边界：

默认真实 Provider 关闭；manual dry-run 是脱敏验证路径。不是生产招聘平台，不接招聘平台 API，不爬虫，不自动投递，不预测 Offer。

建议截图：

- `public/images/projects/offerflow/jd-analyzer.png`
- `public/images/projects/offerflow/evidence-library.png`
- `public/images/projects/offerflow/match-report.png`
- `public/images/projects/offerflow/human-review.png`
- `public/images/projects/offerflow/provider-trace.png`

详情页：

`/projects/offerflow`

### 3.5 MCP Tool Gateway

GitHub：

`https://github.com/jameswilson87156-del/mcp-tool-gateway`

项目定位：

Agent 工具网关与审计链路。

解决的问题：

围绕 Tool Registry、Policy Check、Trace Evidence、Audit Log 与 Human Review，展示 Agent 调用工具时的治理闭环。

技术栈：

Spring Boot 3、Java 17、Vue 3、TypeScript、OpenAPI、H2、JdbcTemplate、JSON-RPC adapter demo。

关键数据：

- Tool Registry、Policy Check、Trace Evidence、Audit Log、Human Review。
- MCP-style JSON-RPC adapter demo。
- 支持 `tools/list`、`tools/call`、`prompts/list`、`resources/list` 四个 demo methods。
- 9 张 demo 表。
- 60 个后端测试。
- Playwright 真实截图。

边界：

MCP-style demo，不声明完整 MCP 官方协议实现，不声明 complete MCP compatibility；RBAC PolicyService 是 demo，不是生产级权限系统。

建议截图：

- `public/images/projects/mcp/mcp-tool-workbench.png`
- `public/images/projects/mcp/tool-registry.png`
- `public/images/projects/mcp/trace-evidence.png`
- `public/images/projects/mcp/audit-log.png`
- `public/images/projects/mcp/human-review-center.png`

详情页：

`/projects/mcp-gateway`

## 4. 详情页统一内容

每个详情页必须包含：

- 项目背景
- 解决什么问题
- 技术方案
- 核心页面截图
- 关键数据
- 技术难点
- 我的实现
- 项目边界
- GitHub 链接
- 返回首页 / 返回项目列表

建议加面试讲法：

- “这个项目解决什么问题？”
- “最能体现你什么能力？”
- “为什么这样设计边界？”
- “哪些是 demo，哪些是真实实现？”
- “下一步怎么升级？”

## 5. 不能写的内容

全站不能写：

- 生产级
- 真实用户
- 商业落地
- 服务客户
- 线上高并发
- SLA
- 真实模型准确率
- 完整 MCP 协议兼容
- 完整 Agent Runtime
- 完整多 Agent 调度
- Vector DB 已实现
- Rerank 已实现
- LLM-as-Judge 已启用
- 多模型对比已完成
- 真实企业数据
- 真实线上业务效果
- 稳定真实 Provider 服务

不能出现排除清单项目：

- 用户明确排除的候选项目不得进入首页、项目列表、README、数据文件、截图说明或 case-study 页面。

不能包装成真实线上效果：

- mock
- local-rule fallback
- synthetic demo cases
- rule-based eval
- manual dry-run
- MCP-style adapter demo

## 6. 需要确认的信息

开发前需要用户确认：

1. “查看 GitHub”链接使用哪个地址：
   - GitHub profile：`https://github.com/jameswilson87156-del`
   - Portfolio repo：`https://github.com/jameswilson87156-del/ai-agent-portfolio-hub`

2. “下载简历”PDF 文件路径：
   - 是否已有简历 PDF？
   - 是否复制到 `public/` 下？
   - 文件名是否需要中英文？

3. “联系我”展示方式：
   - 邮箱
   - 微信
   - 手机
   - GitHub only
   - 是否避免公开手机号

4. 首页是否保留少量暗色/cinematic 元素：
   - 建议：保留轻量深蓝 hero 或局部 gradient，不保留整屏暗黑电影感。

## 7. 实施步骤

确认后建议按以下顺序开发：

1. 调整数据层项目顺序和首页文案。
2. 重构首页 hero：主投方向、CTA、核心项目入口。
3. 调整项目卡片字段：定位、技术栈、问题、关键数据、GitHub、Case Study、边界。
4. 调整 `/projects` 为更适合技术筛选的项目索引。
5. 统一详情页 section 标题与返回入口。
6. 调整 CSS 视觉方向：light / deep blue / cyan accent。
7. 加入简历下载与联系入口。
8. 更新 README。
9. 运行 `npm run build`。
10. 运行 `npm run screenshots`。
11. 检查移动端与线上部署。

## 8. 最终验收清单

- `npm run build` 通过。
- `npm run screenshots` 通过。
- 首页和所有项目详情页可访问。
- 所有 GitHub 链接可点击。
- 简历下载和联系入口可用。
- 移动端无明显排版错乱。
- README 同步作品集说明。
- 不出现夸大表述。
- 不出现排除项目。
- Vercel 静态部署边界保留。
