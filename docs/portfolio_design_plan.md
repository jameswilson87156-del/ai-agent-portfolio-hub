# Portfolio Design Plan

计划日期：2026-07-05  
状态：待用户确认后实施。  
本文件只定义设计和页面结构，不修改前端代码。

## 1. 目标定位

目标不是普通博客，也不是花哨个人主页，而是用于求职投递的 AI 应用开发作品集。主要读者：

- HR：10 秒内判断候选人方向是否匹配。
- 技术面试官：快速进入项目证据、GitHub、截图和边界。
- Boss 直聘 / 智联校园 / 简历 PDF / 微信发送：需要移动端和短链路阅读。

候选人定位：

软件工程本科 2027 届，大三学生，Java 后端基础 + Vue / TypeScript 前端展示 + AI Workflow / RAG / Agent / PromptOps 工程落地。

不包装为：

- 纯 Java 后端
- 算法工程师
- 资深架构师
- 生产平台负责人

## 2. 选定视觉方向

方向：Calm Light AI Tool Portfolio / 清爽专业的 AI 应用开发作品集。

关键词：

- 白底 / 深蓝 / 青色点缀
- Developer tool / AI workflow evidence
- 清晰项目卡片
- 截图证据优先
- 边界说明显眼
- 轻量动效
- 移动端可读

为什么适合：

- HR 更容易快速阅读，不会被深色 cinematic 首屏干扰。
- 技术面试官仍能通过 case-study、截图、指标和 GitHub 证据深入查看。
- 深蓝 + 白底 + 青色点缀符合 AI 工具产品和工程作品集的专业感。
- 比普通后台更像“AI 工具产品作品集”，但不过度营销。

与当前 v2 的关系：

- 保留当前 v2 的 evidence / boundary / case-study 深度。
- 减少首页大面积 cinematic 暗色背景。
- 让首页更像投递落地页，详情页保留更强的证据 dossier。

## 3. 设计系统建议

### 颜色

- Page background：`#f7fafc` / `#ffffff`
- Primary text：`#0f172a`
- Secondary text：`#475569`
- Deep blue：`#0f2a44`
- Cyan accent：`#06b6d4`
- Soft cyan background：`#ecfeff`
- Evidence green：`#059669`
- Boundary amber：`#d97706`
- Border：`#dbeafe` / `#e2e8f0`

### 字体与排版

- 中文优先，技术名词保留 English。
- 首页标题大但不夸张，避免海报化。
- 卡片信息使用短句和标签，适合 HR 快扫。
- 详情页使用 section anchor，适合面试官按需跳读。

### 动效

仅保留：

- 轻微 hover lift
- CTA focus state
- section fade-in 可选
- `prefers-reduced-motion` 支持

避免：

- 大量粒子、视差、闪烁
- 过重暗场景
- 复杂滚动动画

## 4. 首页结构

首页不宜太长，建议结构：

### 4.1 Hero

主标题：

`AI 应用开发作品集`

副标题 / 次标题：

`Java + AI 全栈 / RAG / PromptOps / Agent Workflow`

说明文案：

`软件工程本科 2027 届，聚焦 Java + Vue + AI Workflow 工程落地。项目覆盖 Prompt、Provider、RAG、Trace、Human Review、Eval 指标、截图验收与 GitHub 证据链。`

首屏需要显式显示：

- 软件工程本科 2027 届
- 主投方向：AI 应用开发实习 / Java + AI 全栈开发实习 / AI 工具开发实习
- 技术栈：Java、Spring Boot、Vue 3、TypeScript、Vite
- AI 工程关键词：RAG、PromptOps、Agent Workflow、Trace Evidence、Human Review

CTA：

- 查看核心项目 -> `/projects`
- 查看 GitHub -> 建议链接到 GitHub profile 或 Portfolio repo
- 下载简历 -> 待确认 PDF 路径
- 联系我 -> 待确认展示方式

### 4.2 Core Projects

首页项目顺序：

1. DevFlow Copilot
2. Enterprise Ticket RAG Copilot
3. PromptOps Studio
4. OfferFlow Copilot
5. MCP Tool Gateway

每个项目卡片必须包含：

- 项目定位
- 技术栈
- 解决的问题
- 关键数据
- GitHub 链接
- Case Study 链接
- 边界说明

卡片信息密度建议：

- 1 行定位
- 2-3 行“解决什么问题”
- 3-5 个 evidence chips
- 1 个 boundary badge
- 2 个链接按钮：GitHub / Case Study

### 4.3 Why me / Matching

用短区块说明为什么匹配主投方向：

- Java 后端：Spring Boot、API、测试、持久化、审计链路。
- Vue / TypeScript：可运行控制台、截图验收、移动端适配。
- AI Workflow：Prompt、Provider、Trace、Human Review、RAG、Eval。
- 工程证据：README、docs/metrics、真实截图、CI / build / screenshots。

### 4.4 Boundary Strip

首页底部或项目区上方放一条明确边界：

`这些项目是个人作品集工程项目，不声明真实用户、商业落地、生产流量、SLA 或真实企业数据。mock / local-rule / synthetic / rule-based / manual dry-run 均在项目卡片和详情页标注。`

## 5. `/projects` 页面结构

定位：项目索引页，给技术面试官做二次筛选。

结构：

1. 页面标题：`Core AI Application Projects`
2. 简短说明：5 个核心项目覆盖 AI Coding、RAG、PromptOps、Job Workflow、Agent Tooling。
3. 项目列表：按用户指定顺序。
4. Capability Matrix：可以保留，但视觉转为轻量表格 / chips。
5. Evidence Wall：保留，但减少装饰，强调来源。
6. Boundary Notice：保留。

## 6. 项目详情页结构

每个详情页统一结构：

1. Hero
   - 项目名
   - 一句话定位
   - GitHub 链接
   - 返回首页 / 返回项目列表
   - 关键数据 chips
   - 边界 badge

2. 项目背景
   - 为什么做
   - 对 AI 应用开发实习有什么相关性

3. 解决什么问题
   - 3 个痛点
   - 对应系统模块

4. 技术方案
   - Workflow diagram / steps
   - 前后端职责
   - 数据 / Trace / Review / Eval 链路

5. 核心页面截图
   - 只使用源项目真实运行截图
   - 每张图标注来源
   - 不使用设计参考图

6. 关键数据
   - 来自 README / docs/metrics / acceptance docs
   - 明确 demo / synthetic / mock / local-rule 边界

7. 技术难点
   - 3-5 条，可面试讲述

8. 我的实现
   - 前端产品表达
   - Java 后端 / API / 测试 / workflow
   - AI 工程边界设计

9. 项目边界
   - What it is
   - What it is not
   - Not claimed

10. 面试讲法
    - 3-5 个 Q&A，帮助现场讲项目

## 7. 移动端设计

移动端重点：

- 首屏不要超过 1.5 屏就能看到项目入口。
- 项目卡片单列展示。
- CTA 固定在首屏或 hero 内，不使用复杂横向滚动。
- 截图 gallery 在移动端使用单列缩放，避免横向溢出。
- GitHub / Case Study 链接可点击面积充足。

## 8. 不使用的方向

不采用：

- 传统后台管理系统
- 普通个人博客
- 花哨作品集海报
- 过度玻璃拟态
- 大量粒子和动画
- 第三方产品截图或图片
- 无来源指标卡

## 9. 实施时需要修改的页面

待确认后建议修改：

- `src/views/HomeView.vue`
- `src/views/ProjectsView.vue`
- `src/data/portfolio.ts`
- `src/data/projects.ts`
- `src/data/projectDetails.ts`
- `src/styles/*.css`
- 可能新增/调整通用组件：ProjectCard、BoundaryBadge、HeroCTA、EvidenceChip、ContactBar
- `scripts/capture-screenshots.mjs`：如首页视觉变化后重新截图
- `README.md`：最终实现后更新作品集说明

不需要新增路由，现有 7 个路由已经满足本轮目标。

## 10. 验收方式

实施后需要运行：

```bash
npm run build
npm run screenshots
git diff --check
git status --short
```

视觉验收：

- 首页 10 秒内能看懂候选人定位。
- 首页有明确项目入口、GitHub、简历、联系入口。
- 首页和 `/projects` 项目顺序正确。
- 移动端无横向溢出。
- 详情页截图不变形、不混用参考图。
- 不出现排除项目。
- 不出现夸大表述。
