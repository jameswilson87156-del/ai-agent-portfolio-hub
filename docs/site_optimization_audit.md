# Portfolio Site Optimization Audit

日期：2026-07-05

范围：只读审查 `D:\workhome\ai-agent-portfolio-hub`，并核对线上地址 `https://ai-agent-portfolio-hub.vercel.app/`。本轮不修改前端代码、不改 README、不复制 PDF、不生成新截图；仅产出本审查文档与实施计划文档。

## 0. 当前 Git 与本地状态

- 当前分支：`main`
- 当前本地 `HEAD`：`4008b71 Merge pull request #1 from jameswilson87156-del/feat/portfolio-hub-v2-promptops`
- 远端：`origin https://github.com/jameswilson87156-del/ai-agent-portfolio-hub.git`
- 重要发现：工作树不是 clean，已经存在一批未提交改动，覆盖首页、项目卡片、详情页模板、README、截图脚本、截图文件与简历 PDF。
- 因此后续开发前必须先确认：是以当前未提交的 Light AI Tool Portfolio 改动为基础继续优化，还是先整理/提交/暂存这些改动后再开始新一轮。

## 1. 当前首页首屏文案

### 已提交 main / 线上版本

线上 HTML title 仍是：

```text
AI Agent Engineer Portfolio Hub
```

已提交 `HEAD` 的首页首屏仍偏向 v2 的 cinematic evidence dossier：

- Kicker：`AI Agent Engineer Portfolio Hub`
- 主标题：`AI Agent 工程师作品集`
- 方向行：`Java Backend / AI Application / AI Agent / Web Full-stack`
- 说明重点：Prompt、Trace、Human Review、Tool、Provider、Audit Log。
- CTA：`查看核心项目`、`查看项目证据`、`查看证据链`。

问题：

- “AI Agent Engineer” 仍偏泛，和用户当前主投方向“AI 应用开发 / Java + AI 全栈 / AI 工具开发 / RAG / PromptOps / Agent Workflow”不够一致。
- 没有把“王震龙｜软件工程本科 2027 届”放在首屏高优先级位置。
- 线上首屏没有“下载简历”和“下载项目作品集”两个求职投递入口。

### 当前本地未提交版本

本地工作树已有一版 Light AI Tool Portfolio 草稿，首屏截图 `docs/images/portfolio-home.png` 显示：

- 主标题：`AI 应用开发作品集`
- 副标题：`Java + AI 全栈 / RAG / PromptOps / Agent Workflow`
- 身份：`王震龙 · 软件工程本科 2027 届`
- CTA：查看核心项目、查看 GitHub、下载简历、联系我。

问题：

- 本地草稿还没有“下载项目作品集”按钮。
- 本地草稿是浅色专业风格，不是本轮提出的“大山 Hero”视觉。
- 该草稿尚未提交、尚未部署，不能当作线上现状。

## 2. 当前项目卡片顺序

### 已提交 main / 线上版本

`HEAD` 中 `src/data/portfolio.ts` 的首页项目顺序为：

1. DevFlow Copilot
2. Enterprise Ticket RAG Copilot
3. PromptOps Studio
4. MCP Tool Gateway
5. OfferFlow Copilot

这与本轮要求不一致：OfferFlow 应排在 MCP Tool Gateway 前面。

### 当前本地未提交版本

当前本地 `src/data/portfolio.ts` 的首页顺序已经调整为：

1. DevFlow Copilot
2. Enterprise Ticket RAG Copilot
3. PromptOps Studio
4. OfferFlow Copilot
5. MCP Tool Gateway

`src/views/ProjectsView.vue` 也用 `projectOrder = ['devflow', 'ticket-rag', 'promptops', 'offerflow', 'mcp-gateway']` 覆盖了 `/projects` 展示顺序。

注意：`src/data/projects.ts` 的原始数组仍是 PromptOps 后接 MCP、再接 OfferFlow；目前靠 `/projects` 的 computed order 修正展示。后续建议统一数据源顺序，减少维护歧义。

## 3. 当前详情页结构

当前存在 5 个项目详情页路由：

- `/projects/devflow`
- `/projects/ticket-rag`
- `/projects/promptops`
- `/projects/offerflow`
- `/projects/mcp-gateway`

### 已提交 main / 线上版本

详情页是 cinematic / editorial evidence dossier 结构，包含：

- Detail hero
- Summary rail
- Architecture flow
- Screenshot gallery
- Engineering evidence grid
- Boundary panel
- Interview notes

优点：

- 工程证据密度高。
- 截图、边界和面试讲法完整。

问题：

- 对 HR 快速扫读略重，像长篇 case study。
- “适合岗位方向”“技术栈”“下载作品集”没有被统一放到每个详情页的固定高优先级入口。
- 详情页行动区目前偏 GitHub / 返回列表 / 返回首页，缺少作品集 PDF 下载。

### 当前本地未提交版本

本地已有 `src/components/projects/ProjectDetailTemplate.vue`，把 5 个详情页统一成类似结构：

1. 项目背景
2. 解决什么问题
3. 技术方案
4. 核心页面与模块
5. 核心页面截图
6. 技术难点与我的实现
7. 项目边界
8. 面试讲法
9. 继续查看

该结构接近本轮要求，但仍需补：

- 适合岗位方向
- 技术栈独立区块
- 工程证据独立区块
- GitHub / 返回首页 / 下载作品集统一 CTA
- 更短、更适合 HR 快速扫读的详情页文案

## 4. 当前 README 和部署状态

### README

已提交 main 的 README 仍是 “AI Full-Stack Developer Portfolio Hub v2” 叙述，偏工程发布说明。

当前本地 README 已经改成“AI 应用开发作品集”，并包含：

- 求职作品集定位
- 5 个核心项目
- 简历 PDF 路径
- 截图证据
- 项目边界

但该 README 未提交，且还缺：

- 项目作品集 PDF 下载路径
- 大山 Hero 视觉资产说明
- SEO / 分享文案同步
- 最终风险词清理后的公开边界表述

### 部署状态

使用 Node `fetch` 对线上地址做只读检查：

- `https://ai-agent-portfolio-hub.vercel.app/` 返回 200，HTML title 为 `AI Agent Engineer Portfolio Hub`
- `/projects` 返回 200，HTML title 同上
- `/projects/promptops` 返回 200，HTML title 同上
- `/resume/wangzhenlong-ai-application-resume.pdf` 返回 200，但 content-type 是 `text/html; charset=utf-8`，不是 PDF
- `/portfolio/wangzhenlong-ai-project-portfolio.pdf` 返回 200，但 content-type 是 `text/html; charset=utf-8`，不是 PDF

结论：Vercel SPA fallback 会让缺失静态资产也返回首页 HTML。后续验收下载链接时不能只看 status 200，必须检查 content-type 或文件头是否为 PDF。

## 5. 当前截图脚本

已提交 main 的 `scripts/capture-screenshots.mjs` 已覆盖：

- `/`
- `/projects`
- 5 个项目详情页
- 1440 宽度截图
- 1920 宽度 large 截图
- `docs/images/review/home-1366x768.png`

当前本地未提交版本已增加 390px mobile 截图：

- `docs/images/mobile/portfolio-home-390.png`
- `docs/images/mobile/projects-overview-390.png`
- `docs/images/mobile/devflow-detail-390.png`
- `docs/images/mobile/ticket-rag-detail-390.png`
- `docs/images/mobile/promptops-detail-390.png`
- `docs/images/mobile/offerflow-detail-390.png`
- `docs/images/mobile/mcp-gateway-detail-390.png`

不足：

- 还没有 430px、768px 的截图或自动检查。
- 没有自动断言横向滚动。
- 没有检查下载链接 content-type。
- 如果接入大山 Hero，需要重新生成首页、Projects、5 个详情页截图。

## 6. 当前移动端适配

已检查当前本地 `docs/images/mobile/portfolio-home-390.png`：

- 390px 首页可读，标题没有明显横向溢出。
- CTA 按钮一列展示，清晰但略占高度。
- 项目卡片一列展示。
- 下载简历按钮明显。

不足：

- 当前审查只基于已有 390px 截图；430px、768px、1366px 未做同一轮自动验收。
- 大山 Hero 尚未接入，无法判断山体图是否遮挡文字。
- 需要在确认开发后增加浏览器断言：`document.documentElement.scrollWidth <= window.innerWidth + 1`。

## 7. 当前是否有简历下载入口

本地存在：

```text
public/resume/wangzhenlong-ai-application-resume.pdf
```

文件大小：298147 bytes。

本地首页草稿有“下载简历”按钮，链接为：

```text
/resume/wangzhenlong-ai-application-resume.pdf
```

线上该链接目前返回 HTML fallback，不是 PDF，说明该文件尚未部署到 production。

## 8. 当前是否有项目作品集 PDF 下载入口

本地 `public/portfolio/` 当前不存在。

源文件检查结果：

- 大山版项目作品集 PDF：不存在
- 备用项目作品集 PDF：存在

可用备用源文件：

```text
D:\workhome\resume-2027-ai-agent\portfolio_pdf\王震龙_AI应用开发_项目作品集.pdf
```

文件大小：3359096 bytes。

后续应复制到：

```text
public/portfolio/wangzhenlong-ai-project-portfolio.pdf
```

并在首页、详情页、README 中使用：

```text
/portfolio/wangzhenlong-ai-project-portfolio.pdf
```

## 9. 当前 meta title / description

`index.html` 当前只有：

```html
<title>AI Agent Engineer Portfolio Hub</title>
```

缺少：

- meta description
- Open Graph title
- Open Graph description
- Open Graph type
- Open Graph url
- Twitter card

问题：

- title 仍偏泛，且和本轮“王震龙｜AI 应用开发作品集”不一致。
- 分享到聊天、招聘平台或 GitHub Profile 时缺少明确摘要。

## 10. 夸大、过时或和求职主线不一致的表达

当前没有检出两个排除项目名称。

当前 `src`、`README.md` 中存在一些用户列出的高风险词，主要出现在“否定边界”语境中，例如“不声明……”或“不是……”。这类写法在语义上是安全的，但如果最终验收使用全文 grep，仍会被命中。

后续开发建议：

- 公开页面和 README 尽量改成不含高风险词本身的安全表达，例如“仅展示本地可运行作品集工程”“外部能力默认关闭”“指标来源已标注”“不扩展为未验证的线上能力声明”。
- 项目边界仍要保留，但避免反复出现用户禁止词。
- `mock`、`local-rule fallback`、`synthetic demo cases`、`rule-based eval`、`manual dry-run`、`MCP-style adapter demo` 可以出现，但必须作为边界标签，不得包装成线上效果。

## 11. 大山 Hero 视觉现状

当前仓库已有旧视觉资产：

```text
public/images/hero-terrain-artwork.png
public/images/hero-terrain-artwork.webp
```

但本轮要求的路径尚不存在：

```text
public/images/hero/ai-mountain-hero.png
```

后续如果使用大山 Hero：

- 应放到 `public/images/hero/ai-mountain-hero.png`
- 文档与 README 必须说明它是首页品牌视觉资产，不是项目运行截图
- 项目证据仍只能使用 `public/images/projects/**` 下来自真实项目的运行截图

## 12. 审查结论

当前站点已经具备 5 个核心项目、真实项目截图、PromptOps 路由和 Vercel 静态部署基础，但还没有完全变成“投递型 AI 应用开发作品集官网”。

确认后建议优先做这些事：

1. 处理当前未提交工作树状态，确认以本地草稿为基础继续优化。
2. 首页首屏改成“王震龙｜软件工程本科 2027 届”的投递型定位。
3. 接入大山 Hero，但只作为品牌视觉，不作为项目证据。
4. 增加项目作品集 PDF 下载入口。
5. 更新 `index.html` SEO / Open Graph。
6. 统一项目顺序和详情页结构。
7. 更新截图脚本，覆盖 390 / 430 / 768 / 1366 并检查横向滚动。
8. 清理公开页面和 README 的高风险措辞。

