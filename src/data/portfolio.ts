export type NavItem = {
  label: string
  href: string
}

export type ContactLink = {
  label: string
  href: string
  kind: 'primary' | 'secondary'
  external?: boolean
  download?: boolean
  downloadName?: string
}

export type TechTag = {
  label: string
  tone: 'orange' | 'green'
  x: number
  y: number
  line: number
}

export type TimelineStep = {
  label: string
  time: string
  icon: string
}

export type HeroSignal = {
  label: string
  caption: string
  x: string
  y: string
  tone: 'cyan' | 'amber'
}

export type ProjectItem = {
  index: string
  href: string
  githubUrl: string
  title: string
  subtitle: string
  position: string
  problem: string
  stack: string[]
  metrics: string[]
  boundary: string
  tags: string[]
  tone: 'cyan' | 'blue'
}

export type MatchHighlight = {
  title: string
  detail: string
  tags: string[]
}

export const profile = {
  name: '王震龙',
  role: '软件工程本科 2027 届',
  title: 'AI 应用开发作品集',
  subtitle: 'Java + AI 全栈 / RAG / PromptOps / Agent Workflow',
  summary:
    '聚焦 Java + Vue + AI Workflow 工程落地，项目覆盖 Prompt、Provider、RAG、Trace、Human Review、Eval 指标、截图验收与 GitHub 证据链。',
  directions: [
    'AI 应用开发实习',
    'Java + AI 全栈开发',
    'AI 工具开发',
    'RAG / PromptOps / Agent 工具平台',
  ],
  email: '467113957@qq.com',
  github: 'https://github.com/jameswilson87156-del',
  portfolio: 'https://ai-agent-portfolio-hub.vercel.app/',
  resume: '/resume/wangzhenlong-ai-application-resume.pdf',
  portfolioPdf: '/portfolio/wangzhenlong-ai-project-portfolio.pdf',
}

export const navItems: NavItem[] = [
  { label: '核心项目', href: '/projects' },
  { label: '能力匹配', href: '/#fit' },
  { label: '联系', href: '/#contact' },
]

export const contactLinks: ContactLink[] = [
  { label: '查看核心项目', href: '/projects', kind: 'primary' },
  {
    label: '查看 GitHub',
    href: profile.github,
    kind: 'secondary',
    external: true,
  },
  {
    label: '下载简历',
    href: profile.resume,
    kind: 'secondary',
    download: true,
    downloadName: 'wangzhenlong-ai-application-resume.pdf',
  },
  {
    label: '下载项目作品集',
    href: profile.portfolioPdf,
    kind: 'secondary',
    download: true,
    downloadName: 'wangzhenlong-ai-project-portfolio.pdf',
  },
]

export const heroSignals: HeroSignal[] = [
  { label: 'Prompt', caption: 'versioned input', x: '58%', y: '18%', tone: 'cyan' },
  { label: 'Provider', caption: 'fallback trace', x: '74%', y: '31%', tone: 'amber' },
  { label: 'RAG', caption: 'citation path', x: '63%', y: '57%', tone: 'cyan' },
  { label: 'Human Review', caption: 'decision gate', x: '82%', y: '67%', tone: 'amber' },
  { label: 'Eval', caption: 'regression loop', x: '69%', y: '79%', tone: 'cyan' },
]

export const projects: ProjectItem[] = [
  {
    index: '01',
    href: '/projects/devflow',
    githubUrl: 'https://github.com/jameswilson87156-del/devflow-copilot',
    title: 'DevFlow Copilot',
    subtitle: 'AI Coding Workbench',
    position: 'AI Coding Workbench / AI Coding Workflow 控制台',
    problem:
      '把 Prompt 编排、Provider 调用、Generation Trace、Tool Call 与 Human Review 串成可复盘的 AI Coding workflow。',
    stack: ['Vue 3', 'TypeScript', 'Spring Boot', 'Java', 'Prompt Studio'],
    metrics: ['8 个前端路由', '30 个后端 endpoint', '20 个后端测试', '13 张截图'],
    boundary: '默认 local-rule，可选 Provider 代码路径；仅按源项目证据展示本地可运行 workflow。',
    tags: ['Prompt', 'Provider', 'Trace', 'Human Review'],
    tone: 'cyan',
  },
  {
    index: '02',
    href: '/projects/ticket-rag',
    githubUrl: 'https://github.com/jameswilson87156-del/enterprise-ai-ticket-copilot',
    title: 'Enterprise Ticket RAG Copilot',
    subtitle: 'Enterprise Ticket RAG',
    position: '企业工单 RAG Copilot / 企业知识库问答工作台',
    problem:
      '围绕工单分析、知识检索、Citation Evidence、Trace Timeline 与 Human Review，展示可解释的企业 AI Copilot 链路。',
    stack: ['Vue 3', 'TypeScript', 'Spring Boot', 'Java', 'keyword retrieval'],
    metrics: ['16 条 synthetic cases', 'Top-K=3', 'Context Recall 90%', 'Citation Coverage 100%'],
    boundary: 'keyword retrieval baseline + synthetic cases；指标只按源项目样本与脚本结果标注。',
    tags: ['RAG', 'Citation', 'Trace', 'Human Review'],
    tone: 'blue',
  },
  {
    index: '03',
    href: '/projects/promptops',
    githubUrl: 'https://github.com/jameswilson87156-del/ai-agent-eval-promptops',
    title: 'PromptOps Studio',
    subtitle: 'Prompt Evaluation Console',
    position: 'Prompt 评测与回归控制台',
    problem:
      '管理 Prompt 版本、Dataset、Eval Run、Case Result、Output Compare、Trace 与 Failure Cases，形成可复盘的本地回归闭环。',
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Java 17', 'Spring Boot 3.3', 'Rule-based Eval'],
    metrics: ['8 个 Showcase 页面', '13 个后端测试', 'Rule-based Eval', 'Output Compare'],
    boundary: 'Local Demo / Mock Output / Rule-based Eval；规则评分只用于本地回归演示。',
    tags: ['Prompt Version', 'Dataset', 'Eval Run', 'Failure Cases'],
    tone: 'cyan',
  },
  {
    index: '04',
    href: '/projects/offerflow',
    githubUrl: 'https://github.com/jameswilson87156-del/offerflow-copilot',
    title: 'OfferFlow Copilot',
    subtitle: 'Java + AI Job Workflow',
    position: 'Java + AI 求职工作流平台',
    problem:
      '把 JD Intake、Resume Evidence、Match Report、Provider Trace、Human Review 与 Copy Permission 串成可审计的 AI workflow。',
    stack: ['Spring Boot 3', 'Java 17', 'Vue 3', 'TypeScript', 'MyBatis-Plus', 'Flyway'],
    metrics: ['126 tests', '18 项 Playwright / 截图验收', 'Provider Trace', 'Copy Permission'],
    boundary: '外部 Provider 默认关闭；manual dry-run 仅作为脱敏验证路径，不连接招聘平台。',
    tags: ['JD Intake', 'Evidence', 'Provider SPI', 'Copy Gate'],
    tone: 'blue',
  },
  {
    index: '05',
    href: '/projects/mcp-gateway',
    githubUrl: 'https://github.com/jameswilson87156-del/mcp-tool-gateway',
    title: 'MCP Tool Gateway',
    subtitle: 'Agent Tool Gateway',
    position: 'Agent 工具网关与审计链路',
    problem:
      '围绕 Tool Registry、Policy Check、Trace Evidence、Audit Log 与 Human Review，展示 Agent 调用工具时的治理闭环。',
    stack: ['Spring Boot 3', 'Java 17', 'Vue 3', 'TypeScript', 'OpenAPI', 'H2'],
    metrics: ['60 tests', '9 张 demo 表', 'MCP-style adapter demo', 'tools/list / tools/call'],
    boundary: 'MCP-style adapter demo；协议与权限能力只按源项目 README 边界描述。',
    tags: ['Tool Registry', 'Policy', 'Audit Log', 'JSON-RPC'],
    tone: 'cyan',
  },
]

export const matchHighlights: MatchHighlight[] = [
  {
    title: 'Java 后端基础',
    detail:
      '用 Spring Boot、API、测试、持久化、Trace / Audit 数据链路承载 AI workflow，而不是只做静态展示页。',
    tags: ['Spring Boot', 'Java 17', 'API', 'Tests'],
  },
  {
    title: 'Vue / TypeScript 产品表达',
    detail:
      '把 Prompt、RAG、Eval、Tool、Review 等抽象流程做成可演示、可截图、可面试讲清楚的前端控制台。',
    tags: ['Vue 3', 'TypeScript', 'Vite', 'Playwright'],
  },
  {
    title: 'AI Workflow 工程边界',
    detail:
      '重点展示 Prompt、Provider、RAG、Trace、Human Review、Rule-based Eval 与 Copy Permission 的工程闭环。',
    tags: ['RAG', 'PromptOps', 'Agent Workflow', 'Human Review'],
  },
]

export const portfolioBoundary = {
  title: '作品集边界',
  summary:
    '这些项目用于求职投递和面试讲解，重点展示 AI 应用开发的工程拆解、前后端实现、截图验收和 GitHub 证据链。',
  items: [
    '项目数据来自对应 README、测试记录、指标脚本或真实浏览器截图。',
    'mock、local-rule fallback、synthetic cases、rule-based eval、manual dry-run 都按边界标签展示。',
    'Hero mountain image is a visual portfolio asset, not runtime project evidence.',
  ],
}
