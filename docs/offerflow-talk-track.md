# OfferFlow Copilot Talk Track

## 1. OfferFlow 在作品集中的定位

OfferFlow Copilot 是 Portfolio Hub 中的第四个核心 Case Study。它展示的是 Java + AI workflow 在求职场景里的工程治理能力：JD Intake、Resume Evidence、Match Report Versioning、Provider Trace、Schema/Risk 校验、Human Review 和 Copy Permission。

它的定位不是“帮用户自动找工作”，而是一个 evidence-first AI workflow demo：AI 或 local-rule 输出不能直接使用，必须先有证据绑定、Schema Validate、Risk Guard、Human Review 和 Copy Permission。

## 2. 与 DevFlow / Ticket RAG / MCP Gateway 的区别

| Case Study | 主要问题 | 重点能力 | OfferFlow 的区别 |
| --- | --- | --- | --- |
| DevFlow Copilot | AI Coding workflow 如何被记录和复盘 | Prompt、Provider、Generation Trace、Knowledge Reference、Human Review | DevFlow 面向 coding workflow；OfferFlow 面向 JD + 简历证据 + 复制门禁 |
| Enterprise Ticket RAG Copilot | 企业工单回答如何可解释 | Ticket、Knowledge Retrieval、RAG Evidence、Provider fallback、Human Review | Ticket RAG 面向知识引用和工单；OfferFlow 面向求职材料证据和报告版本 |
| MCP Tool Gateway | Agent 工具调用如何治理 | Tool Registry、Policy Check、JSON-RPC、Audit Log、Human Review | MCP Gateway 面向工具治理；OfferFlow 面向 AI 输出治理和 copy permission |
| OfferFlow Copilot | JD 分析输出如何可审计、可复核、可复制 | Spring Boot、Evidence Library、Provider SPI、Risk Guard、Copy Permission、CI | 补齐一个更贴近真实业务表单/工作流的 Java + AI application case |

## 3. 为什么它补齐了“真实业务场景”

OfferFlow 比前三个项目更像一个完整业务工作台：它有 JD、简历证据、报告版本、审核队列、复制检查、Provider 设置和应用状态跟踪等多个业务对象。它不是只展示 AI 能力，而是展示 AI 输出进入业务流程后，如何被证据、状态机、审计日志和人工复核约束。

适合面试时强调：

- 业务对象不是单一 chat message，而是 JD、Evidence、Report、Review、Trace、Copy Check。
- 后端不是简单 CRUD，而是围绕状态流转和审计边界组织。
- AI 能力不是“生成即使用”，而是经过 schema、risk、review 和 copy gate。
- 工程证据完整：126 backend tests、GitHub Actions CI、Playwright screenshots、release notes、screenshot manifest。

## 4. 推荐面试讲解顺序

1. 先说 Portfolio Hub 中四个项目的分工：DevFlow 是 AI Coding，Ticket RAG 是 RAG，MCP Gateway 是 Tool Governance，OfferFlow 是 evidence-first business workflow。
2. 再说 OfferFlow 的问题：AI 求职输出不能直接复制，需要证据、版本、审计和人工复核。
3. 按链路讲：JD Intake -> Resume Evidence -> Match Report -> Provider Trace -> Schema Validate -> Risk Guard -> Human Review -> Copy Permission。
4. 点出后端工程：Spring Boot 3、MyBatis-Plus、Flyway、H2/MySQL、状态流转、审计日志、Provider SPI。
5. 点出验证证据：126 tests、frontend build、18 Playwright screenshots、GitHub Actions CI。
6. 最后主动说边界：不是生产招聘平台，不爬虫，不自动投递，不预测 Offer，真实 Provider 只是 optional manual dry-run path。

## 5. 30 秒讲法

OfferFlow Copilot 是我作品集里的 Java + AI workflow 项目，场景是 JD 分析和简历证据管理。它不是普通 JD 分析器，而是把 JD Intake、Resume Evidence、Match Report、Provider Trace、Human Review 和 Copy Permission 串成一条可审计流程。技术上用了 Spring Boot 3、MyBatis-Plus、Flyway、Vue 3、Playwright 和 GitHub Actions。亮点是 AI 输出不能直接复制，必须经过 schema/risk 校验、人工复核和 copy permission。它是作品集工程 demo，不接招聘平台 API、不爬虫、不自动投递。

## 6. 1 分钟讲法

OfferFlow Copilot 是我为了补齐作品集中“真实业务工作流”做的 Java + AI 应用项目。流程从手动 JD Intake 开始，系统生成结构化解析版本；然后在 Resume Evidence Library 里维护简历证据、状态和审计历史；再把岗位要求和证据绑定，生成版本化 Match Report，并送入 Human Review。

我比较重视治理链路，所以做了 Provider Trace、Prompt / Schema Contract、Risk Guard 和 Copy Permission。无论输出来自 local-rule 还是 optional manual real Provider dry-run，都不能绕过 Schema Validate、Risk Guard、Human Review 和 Copy Permission。后端用了 Spring Boot 3、MyBatis-Plus、Flyway，默认 H2 demo/test mode，也支持 MySQL profile。验收上有 126 backend tests、前端 build、18 个 Playwright screenshots 和 GitHub Actions CI。边界上它不是生产招聘平台，不爬虫、不自动投递、不保存真实隐私，也不预测 Offer。

## 7. 3 分钟讲法

在 Portfolio Hub 里，OfferFlow 是我用来展示 Java + AI workflow 工程能力的案例。前三个项目分别偏 AI Coding、Enterprise RAG 和 MCP-style Tool Gateway；OfferFlow 补的是一个更接近业务系统的场景：JD、简历证据、报告、审核、Provider Trace 和复制权限。

我做这个项目的出发点是：求职场景里的 AI 输出不能直接使用。比如一个 JD 分析或匹配报告，如果没有证据来源、没有人工复核、没有复制门禁，就很容易出现夸大、编造经历或不可追踪的问题。所以 OfferFlow 的链路是 JD Intake -> Resume Evidence -> Evidence Binding -> Match Report Versioning -> Provider Trace -> Schema Validate -> Risk Guard -> Human Review -> Copy Permission Contract。

后端主要用 Spring Boot 3 + Java 17 + MyBatis-Plus，Flyway 管理 H2/MySQL 兼容 schema。默认走 H2 demo/test mode，MySQL profile 和 Docker Compose 只是本地验证路径。业务上我实现了证据生命周期、匹配报告版本、Human Review 状态流转、copy check audit、Provider SPI、Prompt/Schema Contract、Response Validator 和 Risk Guard。

Provider 这块我刻意写得很克制。默认是 local-rule，不依赖真实 API key；真实 Provider 只有 optional manual dry-run path，并且已经用 sanitized input 手动验证过 DeepSeek 和 OpenAI-compatible relay。验证只记录状态 metadata，不保存 raw response，不输出 API key。即使真实 Provider dry-run 成功，输出仍然要求 Schema Validate、Risk Guard、Human Review 和 Copy Permission，确认前 `copyAllowed=false`。

工程证据上，OfferFlow 有 GitHub showcase README、release notes、demo walkthrough、screenshot manifest、PR template、GitHub Actions CI、126 backend tests、frontend build 和 18 个 Playwright screenshot checks。所以我面试时会把它讲成 portfolio-grade engineering demo，而不是生产招聘系统；它不接招聘平台 API、不爬虫、不自动投递、不保存真实隐私、不预测 Offer，也不提供实时面试辅助。

## 8. 适合投递方向

- Java 后端实习：突出 Spring Boot 3、MyBatis-Plus、Flyway、H2/MySQL、状态流转、审计日志、测试和 CI。
- AI 应用开发实习：突出 JD workflow、Provider SPI、Prompt / Schema Contract、Risk Guard、Human Review 和 Trace Evidence。
- AI Agent 工具开发：突出 Provider abstraction、fallback、trace pipeline、manual dry-run boundary 和 contract validation。
- AI Coding 工具开发：可以和 DevFlow 一起讲，一个偏 coding workflow，一个偏 business workflow governance。
- Java + AI Workflow 工程方向：突出从业务对象到 AI 输出治理、人工复核、复制权限和自动化验收的完整链路。

## 9. 必须保留的边界

- 不写生产级招聘平台。
- 不写稳定生产级 GPT / DeepSeek / relay 接入。
- 不写真实用户、客户、流量或商业结果。
- 不写招聘平台 API、爬虫、自动投递。
- 不写 Offer 预测、录取概率、保证通过或提升 Offer 率。
- 不写实时面试辅助。
- 真实 Provider 只能写 optional manual real Provider dry-run path manually verified with DeepSeek and OpenAI-compatible relay。
- 截图只能来自 OfferFlow `docs/images/` 和 `docs/images/large/`，不能把 `docs/design/references` 当运行截图。
