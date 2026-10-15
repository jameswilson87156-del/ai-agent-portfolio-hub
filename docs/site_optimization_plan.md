# Portfolio Site Optimization Plan

日期：2026-07-05

目标：在用户确认后，把 `D:\workhome\ai-agent-portfolio-hub` 优化成更适合简历、Boss 直聘、智联校园、GitHub Profile 和微信转发的“AI 应用开发作品集官网”。本计划不新增无关功能，不新增项目路由，不把作品集包装成未验证的线上系统。

## 1. 开发前置处理

当前 `main` 工作树已有未提交改动。确认开发后，第一步应先处理 Git 边界：

1. 运行 `git status --short`。
2. 明确当前未提交的 Light AI Tool Portfolio 改动是否作为本轮基础。
3. 如果作为基础：继续在当前工作树上补齐大山 Hero、项目作品集 PDF、SEO、详情页 CTA 和移动端验收。
4. 如果不作为基础：先让用户确认是否 stash 或另开干净分支，不能擅自丢弃。

建议开发分支：

```text
feat/site-optimization-ai-application-portfolio
```

## 2. 首页结构

首页应从“项目展示站”升级为“投递型 AI 应用开发作品集”。

建议结构：

1. Top navigation
   - Logo：WZL / AI Portfolio
   - 导航：核心项目、能力匹配、联系
   - 邮箱或 GitHub 入口

2. 大山 Hero
   - 主标题：`AI 应用开发作品集`
   - 副标题：`Java + AI 全栈 / RAG / PromptOps / Agent Workflow`
   - 身份说明：`王震龙｜软件工程本科 2027 届`
   - 一句话介绍：`聚焦 Java + Vue + AI Workflow 工程落地，项目覆盖 Prompt、Provider、RAG、Trace、Human Review、Eval 指标、截图验收与 GitHub 证据链。`
   - CTA：
     - 查看核心项目 -> `/#projects` 或 `/projects`
     - 查看 GitHub -> `https://github.com/jameswilson87156-del`
     - 下载简历 -> `/resume/wangzhenlong-ai-application-resume.pdf`
     - 下载项目作品集 -> `/portfolio/wangzhenlong-ai-project-portfolio.pdf`

3. 主投方向 / 能力匹配
   - AI 应用开发实习
   - Java + AI 全栈开发
   - AI 工具开发
   - RAG / PromptOps / Agent 工具平台

4. 核心项目卡片
   - 5 个项目，固定顺序
   - 每张卡片展示：项目定位、解决的问题、关键数据、GitHub 链接、Case Study 链接、边界短句

5. 作品集边界
   - 说明这是本地可运行作品集工程与截图证据链
   - 说明 demo / fallback / synthetic / rule-based / manual dry-run / MCP-style 的边界
   - 不扩展成未验证能力声明

6. Footer
   - 邮箱：`467113957@qq.com`
   - GitHub Profile
   - Portfolio URL
   - 简历 PDF
   - 项目作品集 PDF

## 3. 大山 Hero 视觉方案

选择方向：Deep Navy Mountain Hero + Light AI Tool Portfolio。

设计原则：

- 首屏有记忆点：深蓝黑背景、数据山峰、Trace 光路、AI workflow 标签。
- 主体仍是求职作品集网站，不是纯海报。
- 首屏文字保持高对比和清晰层级。
- 大山图只作为品牌视觉资产，不作为项目运行证据。
- 项目证据继续使用真实项目截图。

资产路径：

```text
public/images/hero/ai-mountain-hero.png
```

可选实现路径：

1. 优先评估现有 `public/images/hero-terrain-artwork.png` 是否可复用为本轮大山视觉。
2. 如果复用，复制/规范到 `public/images/hero/ai-mountain-hero.png`，并更新引用。
3. 如果现有图不适合，生成或绘制一张原创品牌视觉资产；不得复制第三方图片。
4. README / docs 中明确说明：该图是作品集首页视觉资产，不是项目运行截图。

页面布局建议：

- Desktop：左侧文案与 CTA，右侧或背景为数据山峰。
- 1366px：首屏标题和 CTA 必须完整可见。
- 768px：山体降为背景装饰，文案优先。
- 390 / 430px：山体淡化或下移，避免遮挡标题；CTA 保持清晰按钮组。

## 4. 首页核心项目顺序与卡片内容

固定顺序：

1. DevFlow Copilot
2. Enterprise Ticket RAG Copilot
3. PromptOps Studio
4. OfferFlow Copilot
5. MCP Tool Gateway

### DevFlow Copilot

- 定位：AI Coding Workbench
- 解决的问题：把 Prompt、Provider、Trace、Tool Call、Human Review 串成可复盘的 AI Coding workflow。
- 关键数据：8 个前端路由、30 个后端 endpoint、20 个后端测试、13 张截图。
- GitHub：`https://github.com/jameswilson87156-del/devflow-copilot`
- Case Study：`/projects/devflow`
- 边界短句：默认 local-rule，可选 Provider 代码路径；不扩展为未验证的线上 IDE 能力。

### Enterprise Ticket RAG Copilot

- 定位：企业工单 RAG Copilot
- 解决的问题：把工单、知识检索、引用证据、Trace Timeline 与 Human Review 放进可解释链路。
- 关键数据：16 条 synthetic cases、Top-K=3、Context Recall 90%、Citation Coverage 100%、24 个后端测试。
- GitHub：`https://github.com/jameswilson87156-del/enterprise-ai-ticket-copilot`
- Case Study：`/projects/ticket-rag`
- 边界短句：keyword retrieval baseline + synthetic cases，指标来源必须标注。

### PromptOps Studio

- 定位：Prompt 评测与回归控制台
- 解决的问题：管理 Prompt 版本、Dataset、Eval Run、Case Result、Output Compare、Trace 与 Failure Cases。
- 关键数据：8 个 Showcase 页面、13 个后端测试、Rule-based Eval。
- GitHub：`https://github.com/jameswilson87156-del/ai-agent-eval-promptops`
- Case Study：`/projects/promptops`
- 边界短句：Local Demo / Mock Output / Rule-based Eval；不把规则评分包装成真实模型评测。

### OfferFlow Copilot

- 定位：Java + AI 求职工作流平台
- 解决的问题：把 JD Intake、Resume Evidence、Match Report、Provider Trace、Human Review、Copy Permission 串成证据优先的求职 workflow。
- 关键数据：126 tests、18 项 Playwright / 截图验收、Provider Trace。
- GitHub：`https://github.com/jameswilson87156-del/offerflow-copilot`
- Case Study：`/projects/offerflow`
- 边界短句：外部 Provider 默认关闭；manual dry-run 仅作为脱敏验证路径。

### MCP Tool Gateway

- 定位：Agent 工具网关与审计链路
- 解决的问题：展示 Tool Registry、Policy Check、Trace Evidence、Audit Log、Human Review 的工具调用治理链路。
- 关键数据：60 tests、9 张 demo 表、MCP-style adapter demo。
- GitHub：`https://github.com/jameswilson87156-del/mcp-tool-gateway`
- Case Study：`/projects/mcp-gateway`
- 边界短句：MCP-style adapter demo；不扩展为官方协议完整兼容声明。

## 5. 详情页统一结构

不新增项目路由，只优化现有 5 个详情页：

- `/projects/devflow`
- `/projects/ticket-rag`
- `/projects/promptops`
- `/projects/offerflow`
- `/projects/mcp-gateway`

每个详情页建议统一为：

1. 项目标题
2. 一句话定位
3. 适合岗位方向
4. 解决什么问题
5. 技术栈
6. 工程证据
7. 核心截图
8. 我的实现
9. 项目边界
10. GitHub / 返回首页 / 下载作品集

实现建议：

- 继续使用共享详情页模板，避免 5 个页面重复维护。
- 把长篇“面试讲法”压缩成 2-3 条“面试可讲点”，让 HR 可以扫读，技术面试官可继续点 GitHub。
- 把 `适合岗位方向` 固定在详情页首屏或 summary rail。
- 每个详情页尾部新增 `/portfolio/wangzhenlong-ai-project-portfolio.pdf` 下载入口。

## 6. PDF 下载入口

### 简历 PDF

源文件：

```text
D:\workhome\resume-2027-ai-agent\final_pdfs\王震龙_AI应用开发方向.pdf
```

目标文件：

```text
public/resume/wangzhenlong-ai-application-resume.pdf
```

链接：

```text
/resume/wangzhenlong-ai-application-resume.pdf
```

当前本地已经存在该文件，但未部署到线上。

### 项目作品集 PDF

优先源文件：

```text
D:\workhome\resume-2027-ai-agent\portfolio_pdf\王震龙_AI应用开发_大山版项目作品集.pdf
```

当前审查结果：优先源文件不存在。

备用源文件：

```text
D:\workhome\resume-2027-ai-agent\portfolio_pdf\王震龙_AI应用开发_项目作品集.pdf
```

当前审查结果：备用源文件存在。

目标文件：

```text
public/portfolio/wangzhenlong-ai-project-portfolio.pdf
```

链接：

```text
/portfolio/wangzhenlong-ai-project-portfolio.pdf
```

验收时必须检查返回内容是 PDF，而不是 Vercel SPA fallback HTML。

## 7. SEO / 分享优化

更新 `index.html`：

```html
<title>王震龙｜AI 应用开发作品集</title>
<meta name="description" content="软件工程本科 2027 届，聚焦 Java + AI 全栈、RAG、PromptOps、Agent Workflow 与 AI 工具开发，展示 DevFlow、Ticket RAG、PromptOps、OfferFlow、MCP Tool Gateway 等作品集项目。" />
<meta property="og:title" content="王震龙｜AI 应用开发作品集" />
<meta property="og:description" content="Java + AI 全栈 / RAG / PromptOps / Agent Workflow 项目作品集，包含 GitHub、截图、测试、评测样本与边界说明。" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://ai-agent-portfolio-hub.vercel.app/" />
<meta name="twitter:card" content="summary_large_image" />
```

如接入大山 Hero，可考虑增加 `og:image`，但前提是图片路径稳定且明确为品牌视觉，不作为运行证据。

## 8. 截图脚本和移动端验收

更新 `scripts/capture-screenshots.mjs`：

- 保留现有桌面截图。
- 增加 390px、430px、768px、1366px 检查。
- 至少对 `/`、`/projects`、5 个详情页检查横向滚动。
- 截图目录建议：
  - `docs/images/`
  - `docs/images/large/`
  - `docs/images/mobile/`
  - `docs/images/tablet/`
  - `docs/images/review/`

建议增加只读 DOM 验收：

```js
const hasHorizontalOverflow = await page.evaluate(() =>
  document.documentElement.scrollWidth > window.innerWidth + 1,
)
```

如果有横向滚动，脚本应失败并打印 route + viewport。

## 9. README 更新

README 应从发布说明改成投递型作品集说明，包含：

- 网站定位：AI 应用开发作品集官网
- 主投方向
- 线上地址
- GitHub Profile
- 联系邮箱
- 简历 PDF 下载路径
- 项目作品集 PDF 下载路径
- 大山 Hero 视觉资产说明
- 5 个核心项目与 GitHub 链接
- 截图证据目录
- 项目边界与数据来源说明
- build / screenshots 验收命令

README 中不应把品牌视觉图写成项目运行截图。

## 10. 风险表达清理

后续开发要做两层检查：

1. 内容语义检查：不扩展成未验证的线上能力、商业效果或模型质量。
2. 字符串检查：公开页面和 README 避免出现用户列出的高风险词，尤其不要在 hero、卡片和详情页主文案中反复出现。

建议表述方式：

- “本地可运行作品集工程”
- “指标来自已标注的数据集 / README / 测试 / 截图”
- “外部 Provider 默认关闭”
- “规则评测用于本地回归演示”
- “MCP-style adapter demo”
- “项目证据可通过 GitHub 和截图继续核对”

仍可保留必要边界标签：

- mock
- local-rule fallback
- synthetic demo cases
- rule-based eval
- manual dry-run
- MCP-style adapter demo

但必须始终作为边界，不作为线上效果。

## 11. 实施步骤

确认后建议按以下顺序开发：

1. Git hygiene
   - 确认当前未提交工作树是否作为基础。
   - 创建或切换到本轮优化分支。

2. PDF assets
   - 确认并复制简历 PDF。
   - 使用备用项目作品集 PDF 复制到 `public/portfolio/`。
   - 更新 CTA 数据和 footer。

3. SEO
   - 更新 `index.html` title、description、Open Graph、Twitter card。

4. Hero
   - 接入 `public/images/hero/ai-mountain-hero.png`。
   - 保证桌面和移动端文字可读。
   - 文档说明品牌视觉边界。

5. Home content
   - 更新首屏文案。
   - 固定项目顺序。
   - 卡片字段压缩为 HR 可扫读结构。

6. Detail pages
   - 统一 5 个详情页结构。
   - 增加适合岗位方向、技术栈、工程证据和下载作品集 CTA。
   - 压缩过长 README 式段落。

7. README
   - 同步投递型作品集说明、下载路径、截图证据和边界。

8. Screenshot script
   - 增加 390 / 430 / 768 / 1366 验收。
   - 增加横向滚动检查。
   - 重新生成截图。

9. Final validation
   - `npm run build`
   - `npm run screenshots`
   - 检查首页、`/projects`、5 个详情页可访问。
   - 检查简历 PDF 和项目作品集 PDF 下载 content-type / 文件头。
   - 检查 GitHub / Case Study 链接。
   - 检查公开页面和 README 风险词。
   - 检查两个排除项目名称不出现。
   - `git diff --check`
   - `git status --short`

## 12. 需要用户确认

开始开发前需要确认两点：

1. 是否以当前本地未提交的 Light AI Tool Portfolio 草稿为基础继续做大山 Hero 和下载入口优化？
2. 项目作品集 PDF 是否使用当前存在的备用文件：

```text
D:\workhome\resume-2027-ai-agent\portfolio_pdf\王震龙_AI应用开发_项目作品集.pdf
```

如果确认，就可以进入开发实现。

