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
  role: '软件工程本科 2027 届 · 测试开发方向',
  title: '测试开发',
  subtitle: '测试自动化 / API & UI / AI Agent 评测',
  summary:
    '围绕真实开源系统和本地 AI 业务模拟搭建可重复的测试链路：API 权限、浏览器工作流、持久化、Agent 行为断言、运行报告与 CI。',
  directions: [
    '测试开发实习',
    'Python / pytest / HTTPX',
    'Playwright / API 自动化',
    'AI Agent 评测与回归',
  ],
  email: '467113957@qq.com',
  github: 'https://github.com/jameswilson87156-del',
  portfolio: 'https://ai-agent-portfolio-hub.vercel.app/',
}

export const navItems: NavItem[] = [
  { label: '核心项目', href: '/projects' },
  { label: '能力匹配', href: '/#fit' },
  { label: '联系', href: '/#contact' },
]

export const contactLinks: ContactLink[] = [
  { label: '查看测试项目', href: '/projects', kind: 'primary' },
  {
    label: '查看 GitHub',
    href: profile.github,
    kind: 'secondary',
    external: true,
  },
]

export const heroSignals: HeroSignal[] = [
  { label: 'API', caption: 'contract checks', x: '58%', y: '18%', tone: 'cyan' },
  { label: 'AuthZ', caption: 'negative cases', x: '74%', y: '31%', tone: 'amber' },
  { label: 'Browser', caption: 'workflow trace', x: '63%', y: '57%', tone: 'cyan' },
  { label: 'Agent Eval', caption: 'stable assertions', x: '82%', y: '67%', tone: 'amber' },
  { label: 'CI', caption: 'run evidence', x: '69%', y: '79%', tone: 'cyan' },
]

export const projects: ProjectItem[] = [
  {
    index: '01',
    href: '/projects/gitea-quality-lab',
    githubUrl: 'https://github.com/jameswilson87156-del/gitea-quality-lab',
    title: 'Gitea Quality Lab',
    subtitle: 'Open-source Product QA',
    position: '真实开源产品的 API / 浏览器 / 持久化测试',
    problem:
      '针对本地 Gitea 28.2.0 构建可重复黑盒回归，验证身份权限、仓库与 Issue 工作流、浏览器操作和容器重启后的数据状态。',
    stack: ['Python 3.12', 'pytest', 'HTTPX', 'Playwright', 'Docker Compose'],
    metrics: ['24 个测试框架单测', '16 条本地 Gitea 集成用例', 'JSON / JUnit / HTML 报告', 'GitHub Actions 验证'],
    boundary:
      '测试对象是本地自建的开源 Gitea 28.2.0，不代表企业生产系统、线上流量或生产容量。',
    tags: ['API', 'AuthZ', 'Browser', 'Persistence'],
    tone: 'cyan',
  },
  {
    index: '02',
    href: '/projects/promptops',
    githubUrl: 'https://github.com/jameswilson87156-del/ai-agent-eval-promptops',
    title: 'PromptOps Studio',
    subtitle: 'Agent Evaluation & Test Lab',
    position: 'Agent 行为评测 + 本地订单退款模拟测试',
    problem:
      '将固定 Agent 测试集、逐条行为断言、Trace、失败归因，以及订单/退款 API 的重复执行、稳定性与本地负载采样放进一套可复查工程。',
    stack: ['Vue 3', 'Spring Boot', 'Java 17', 'pytest', 'k6', 'Prometheus'],
    metrics: ['26 条合成 Agent 用例', '24 通过 / 2 保留失败', '8,103 条本地业务工作流', '本轮活跃 VU 峰值 1'],
    boundary:
      'Agent 评测默认使用确定性 Mock；订单/退款只写本地模拟系统。k6 数据是本地采样，不是生产容量结论。',
    tags: ['Agent Eval', 'API', 'k6', 'Monitoring'],
    tone: 'blue',
  },
  {
    index: '03',
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
    index: '04',
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
    index: '05',
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
    index: '06',
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
    title: 'API 测试与服务端验证',
    detail:
      '用 HTTPX / pytest 检查身份、权限、输入校验和状态流转，并通过容器重启验证持久化结果。',
    tags: ['HTTPX', 'pytest', 'AuthZ', 'SQLite'],
  },
  {
    title: '浏览器自动化与端到端流程',
    detail:
      '使用 Playwright 覆盖登录、仓库创建、Issue 评论与关闭；保留截图和失败 Trace 作为定位证据。',
    tags: ['Playwright', 'Chromium', 'Trace', 'Screenshots'],
  },
  {
    title: 'Agent 评测与回归判断',
    detail:
      '对固定合成集执行确定性行为断言，区分执行器成功与 Agent 行为通过，并保留两条可重复失败。',
    tags: ['26 Cases', 'Mock Agent', 'Failure Attribution', 'Regression'],
  },
  {
    title: 'CI、报告与边界清晰',
    detail:
      '通过 GitHub Actions 运行本地开源目标测试并上传报告；性能采样只报告本机测量和实际活跃并发。',
    tags: ['GitHub Actions', 'JSON / JUnit', 'k6', 'Local only'],
  },
]

export const portfolioBoundary = {
  title: '测试证据与能力边界',
  summary:
    '两个主项目分别测试开源业务系统与 AI Agent 工作流，所有数字都对应仓库中的测试记录或运行报告。它们是个人本地实验，不是企业生产经历。',
  items: [
    'Gitea 用例运行在本地 Docker Compose；CI 使用托管 runner 启动一次性本地 Gitea。',
    'PromptOps 的 26 条 Agent 用例使用确定性 Mock；其中 2 条预期保留的 Agent 行为失败没有被隐藏。',
    '本地订单/退款负载采样活跃 VU 峰值为 1，不能据此推算生产并发或生产容量。',
    '山峰图是作品集视觉素材；项目证据来自源仓库、运行报告和真实浏览器截图。',
  ],
}
