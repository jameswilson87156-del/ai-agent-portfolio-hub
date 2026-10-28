export type ProjectCode = 'QA' | 'EVAL' | 'DF' | 'RAG' | 'MCP' | 'OFF'

export type CaseStudyProject = {
  index: string
  code: ProjectCode
  slug: string
  detailPath?: string
  githubUrl?: string
  title: string
  position: string
  problem: string
  workflow: string[]
  stack: string[]
  evidence: string[]
  boundary: string
  resumeValue: string
  preview: {
    src: string
    alt: string
    caption: string
    source: string
  }
  tone: 'orange' | 'green'
}

export type CapabilityItem = {
  label: string
  projects: ProjectCode[]
}

export type EvidenceItem = {
  index: string
  label: string
  detail: string
  projects: ProjectCode[]
}

export type EvidenceGroup = {
  index: string
  title: string
  description: string
  items: EvidenceItem[]
}

export const projectLabels: Record<ProjectCode, string> = {
  QA: 'Gitea QA',
  EVAL: 'PromptOps',
  DF: 'DevFlow',
  RAG: 'Ticket RAG',
  MCP: 'MCP Gateway',
  OFF: 'OfferFlow',
}

export const caseStudyProjects: CaseStudyProject[] = [
  {
    index: '01',
    code: 'QA',
    slug: 'gitea-quality-lab',
    detailPath: '/projects/gitea-quality-lab',
    githubUrl: 'https://github.com/jameswilson87156-del/gitea-quality-lab',
    title: 'Gitea Quality Lab',
    position: '开源协作系统的 API、浏览器与持久化自动化',
    problem:
      '在没有企业测试环境的前提下，针对固定版本的真实开源 Gitea 产品搭建本地测试目标，验证认证、权限、仓库与 Issue 生命周期、浏览器操作和重启持久化。',
    workflow: [
      'Docker Compose / Gitea 28.2.0',
      'HTTP API / AuthN + AuthZ',
      'Repository + Issue lifecycle',
      'Chromium browser workflow',
      'Restart / persistence assertion',
      'JSON + JUnit + HTML + CI artifact',
    ],
    stack: ['Python 3.12', 'pytest', 'HTTPX', 'Playwright', 'Docker Compose', 'SQLite'],
    evidence: [
      '24 harness unit tests',
      '16 local API / browser / persistence cases',
      'GitHub Actions run #40710451708 passed',
      'JSON / JUnit / HTML reports + screenshot',
    ],
    boundary:
      '目标是本地 Docker Compose 中的 Gitea 28.2.0。托管 CI 运行的是一次性本地服务；不代表企业生产系统、真实用户流量或生产容量。',
    resumeValue:
      '展示黑盒测试设计、权限负向用例、API 与 UI 自动化、容器状态管理、数据持久化验证和报告交付。',
    preview: {
      src: '/images/projects/gitea-quality-lab/browser-workflow-20261028.png',
      alt: 'Gitea Quality Lab 本地 Chromium 自动化验收的 Gitea Issue 工作流截图',
      caption: 'Accepted local browser workflow / Gitea 28.2.0',
      source: 'gitea-quality-lab · reports/runs/20261028T144605Z-9971cee7/artifacts/20261028T144605Z-9971cee7-UI-001.png',
    },
    tone: 'green',
  },
  {
    index: '02',
    code: 'EVAL',
    slug: 'promptops',
    detailPath: '/projects/promptops',
    githubUrl: 'https://github.com/jameswilson87156-del/ai-agent-eval-promptops',
    title: 'PromptOps Studio',
    position: 'AI Agent 评测、业务 API 测试与本地稳定性实验',
    problem:
      '为 AI Agent 设计可重复行为断言和失败归因，并将订单/退款模拟 API 的业务规则、可观测性、回归和有界负载采样纳入一套可复查工程。',
    workflow: [
      '26 固定合成 Agent cases',
      'Deterministic Mock / rule assertions',
      'Run + case result + trace',
      'Order / refund simulator API',
      'k6 / soak / metrics / alert drill',
      'JSON report + quality gate',
    ],
    stack: ['Vue 3', 'Spring Boot', 'Java 17', 'H2', 'k6', 'Prometheus', 'Alertmanager'],
    evidence: [
      '26 cases: 24 behavior pass / 2 retained failures',
      '8,103 local workflows / 40,515 HTTP requests',
      '0 workflow failures / 0 dropped iterations in recorded load run',
      'Active VU peak 1; not a production capacity result',
      '30-minute local soak and alert drill evidence',
    ],
    boundary:
      'Agent 默认使用确定性 Mock；可选 Provider 未在该轮外部调用。订单/退款只写本地模拟数据。k6 记录为单活跃 VU 的分阶段本机采样，不支持生产容量声明。',
    resumeValue:
      '体现测试集与确定性断言、Agent 失败归因、业务 API 状态机、可观测性、稳定性采样和测试质量门禁。',
    preview: {
      src: '/images/projects/promptops/eval-overview-20261028.png',
      alt: 'PromptOps Studio 26 条 Agent 合成测试用例的真实本地运行总览',
      caption: 'Recorded deterministic Mock Agent evaluation / local run',
      source: 'ai-agent-eval-promptops · docs/images/agent-eval-overview-rc-final-20261028.png',
    },
    tone: 'orange',
  },
  {
    index: '01',
    code: 'DF',
    slug: 'devflow',
    detailPath: '/projects/devflow',
    title: 'DevFlow Copilot',
    position: 'AI Coding / Agentic Workflow Console',
    problem:
      '把 Prompt 编排、Provider 调用、代码生成记录、Trace 与 Human Review 串成可追踪的 AI Coding 工作流。',
    workflow: [
      'Prompt',
      'Provider',
      'Generation Trace',
      'Knowledge Reference',
      'Human Review',
    ],
    stack: ['Vue 3', 'TypeScript', 'Spring Boot', 'Java'],
    evidence: [
      '真实浏览器截图',
      'Generation History',
      'Prompt Templates',
      'Trace + Human Review',
    ],
    boundary:
      '真实可运行的作品集工程项目，不包装成生产级 AI IDE，不虚构真实线上用户。',
    resumeValue:
      '体现 AI Coding 工作流拆解、Provider 抽象、可追踪生成记录与前后端产品表达能力。',
    preview: {
      src: '/images/projects/devflow-preview.png',
      alt: 'DevFlow Copilot Agentic Coding 工作流控制台真实浏览器截图',
      caption: 'Agentic Coding workflow console / runnable local project',
      source: 'ai-coding-workbench · docs/images/dashboard-agentic.png',
    },
    tone: 'orange',
  },
  {
    index: '02',
    code: 'RAG',
    slug: 'ticket-rag',
    detailPath: '/projects/ticket-rag',
    title: 'Enterprise Ticket RAG Copilot',
    position: '企业工单 RAG 智能助手',
    problem:
      '围绕工单检索、知识引用、RAG 回答、Provider fallback、Human Review 和 Trace Evidence，展示企业 AI Copilot 的可解释流程。',
    workflow: [
      'Ticket',
      'RAG Retrieval',
      'Provider / fallback',
      'Trace Evidence',
      'Human Review',
    ],
    stack: [
      'Vue 3',
      'TypeScript',
      'Spring Boot',
      'Java',
      'RAG demo',
      'Provider fallback',
    ],
    evidence: [
      '真实浏览器截图',
      'Knowledge Reference',
      'Trace Evidence',
      'Human Review',
    ],
    boundary:
      '真实可运行的作品集工程项目，不包装成生产级企业 RAG 系统，不虚构真实工单数据。',
    resumeValue:
      '体现 RAG 应用流程、知识引用、Provider 回退和人工复核等企业 AI 场景理解。',
    preview: {
      src: '/images/projects/ticket-rag-preview.png',
      alt: 'Enterprise Ticket RAG Copilot Trace 证据控制台真实浏览器截图',
      caption: 'Trace evidence console / explainable RAG path',
      source: 'enterprise-ai-ticket-copilot · docs/images/large/trace-evidence.png',
    },
    tone: 'green',
  },
  {
    index: '04',
    code: 'MCP',
    slug: 'mcp-gateway',
    detailPath: '/projects/mcp-gateway',
    title: 'MCP Tool Gateway',
    position: '企业 Agent 工具网关',
    problem:
      '为企业 AI Agent 提供 Tool / Prompt / Resource 接入、JSON-RPC adapter、RBAC demo、Human Review、Trace Evidence 与 Audit Log。',
    workflow: [
      'Agent Request',
      'Tool Registry',
      'Policy Check',
      'JSON-RPC / Tool Call',
      'Trace',
      'Audit Log',
      'Human Review',
    ],
    stack: [
      'Spring Boot 3',
      'Java 17',
      'Vue 3',
      'TypeScript',
      'OpenAPI',
      'Docker',
    ],
    evidence: [
      '60 backend tests',
      'CI + OpenAPI',
      'JSON-RPC adapter',
      'Audit Log',
      '真实浏览器截图',
    ],
    boundary:
      'MCP-style，不声称完整官方 MCP 协议；RBAC 是 demo；X-Demo-Role 不是生产鉴权。',
    resumeValue:
      '突出 Java 后端、工具接入、策略检查、审计链路与工程化交付能力。',
    preview: {
      src: '/images/projects/mcp-gateway-preview.png',
      alt: 'MCP Tool Gateway 工具调用工作台真实浏览器截图',
      caption: 'Tool call workbench / policy and audit chain',
      source: 'mcp-tool-gateway · docs/images/large/mcp-tool-workbench.png',
    },
    tone: 'green',
  },
  {
    index: '05',
    code: 'OFF',
    slug: 'offerflow',
    detailPath: '/projects/offerflow',
    title: 'OfferFlow Copilot',
    position: 'Java + AI workflow demo for JD intake and evidence-backed review',
    problem:
      '把 JD 分析、简历证据、匹配报告、Provider Trace、人工复核和复制门禁串成一条可追踪、可审核、可验证的 AI 工作流。',
    workflow: [
      'JD Intake',
      'Resume Evidence',
      'Match Report',
      'Provider Trace',
      'Human Review',
      'Copy Permission',
    ],
    stack: [
      'Spring Boot 3',
      'Vue 3',
      'MyBatis-Plus',
      'Flyway',
      'Provider SPI',
      'Human Review',
      'Copy Permission',
      'Trace Evidence',
    ],
    evidence: [
      '126 backend tests',
      'GitHub Actions CI',
      'Playwright screenshots',
      'Manual Provider dry-run summary',
    ],
    boundary:
      'Portfolio-grade engineering demo，不是生产级招聘系统；不接招聘平台 API、不爬虫、不自动投递、不预测 Offer。',
    resumeValue:
      '突出 Java 后端、AI workflow 治理、Provider 契约、审计链路和复制权限边界的工程表达能力。',
    preview: {
      src: '/images/projects/offerflow/jd-analyzer.png',
      alt: 'OfferFlow Copilot JD Analyzer 真实运行截图',
      caption: 'Evidence-first job workflow / human review and copy gate',
      source: 'offerflow-copilot · docs/images/offerflow-dashboard.png',
    },
    tone: 'orange',
  },
]

export const capabilityMatrix: CapabilityItem[] = [
  { label: 'Python / pytest', projects: ['QA'] },
  { label: 'HTTPX / API assertions', projects: ['QA'] },
  { label: 'Playwright / Chromium', projects: ['QA', 'EVAL'] },
  { label: 'Authentication / authorization', projects: ['QA'] },
  { label: 'Stateful workflow / persistence', projects: ['QA', 'EVAL'] },
  { label: 'JSON / JUnit / HTML reports', projects: ['QA', 'EVAL'] },
  { label: 'GitHub Actions / Docker Compose', projects: ['QA', 'EVAL', 'MCP', 'OFF'] },
  { label: 'Fixed dataset / deterministic assertions', projects: ['EVAL'] },
  { label: 'Agent trace / failure attribution', projects: ['EVAL'] },
  { label: 'k6 / local load sampling', projects: ['EVAL'] },
  { label: 'Prometheus / Alertmanager demo', projects: ['EVAL'] },
  { label: 'Java / Spring Boot', projects: ['EVAL', 'DF', 'RAG', 'MCP', 'OFF'] },
  { label: 'Vue 3 / TypeScript', projects: ['EVAL', 'DF', 'RAG', 'MCP', 'OFF'] },
  { label: 'RAG / MCP-style tooling', projects: ['RAG', 'MCP'] },
]

export const evidenceGroups: EvidenceGroup[] = [
  {
    index: 'G01',
    title: 'System Test Automation',
    description: '本地真实产品目标与可重复接口、浏览器和数据验证。',
    items: [
      {
        index: 'E01',
        label: 'API + AuthZ matrix',
        detail: 'Gitea 登录身份、管理权限、公开/私有仓库与负向访问断言',
        projects: ['QA'],
      },
      {
        index: 'E02',
        label: 'Browser workflow',
        detail: 'Chromium 登录、建仓、Issue、评论与关闭流程及截图',
        projects: ['QA'],
      },
      {
        index: 'E03',
        label: 'Persistence after restart',
        detail: '容器重启后重新查询仓库和 Issue，验证 SQLite 数据状态',
        projects: ['QA'],
      },
    ],
  },
  {
    index: 'G02',
    title: 'Runs, Reports & CI',
    description: '保留逐次运行、报告完整性和 CI 可复核证据。',
    items: [
      {
        index: 'E04',
        label: 'Stable run IDs',
        detail: '固定 case IDs、唯一 run ID、逐条结果、失败原因和耗时',
        projects: ['QA', 'EVAL'],
      },
      {
        index: 'E05',
        label: 'Cross-checked reports',
        detail: 'JSON 与 JUnit 总数相互校验，生成 HTML 和浏览器证据',
        projects: ['QA'],
      },
      {
        index: 'E06',
        label: 'GitHub Actions',
        detail: '在托管 runner 上启动一次性本地系统并上传运行报告',
        projects: ['QA', 'EVAL', 'MCP', 'OFF'],
      },
      {
        index: 'E07',
        label: 'Known Agent failures retained',
        detail: 'Agent Mock 用例 agent-014 / agent-015 保持失败，质量门禁据此失败',
        projects: ['EVAL'],
      },
    ],
  },
  {
    index: 'G03',
    title: 'Agent & Business API Evaluation',
    description: '把固定 Agent 行为、订单规则、负载采样和观测边界放在一起审查。',
    items: [
      {
        index: 'E08',
        label: 'Agent test matrix',
        detail: '26 个原创合成用例；该次 Mock 运行有 24 条 Agent 行为通过、2 条失败',
        projects: ['EVAL'],
      },
      {
        index: 'E09',
        label: 'Local business load report',
        detail: '8,103 工作流、40,515 HTTP 请求；记录为本地模拟系统和单活跃 VU 采样',
        projects: ['EVAL'],
      },
      {
        index: 'E10',
        label: 'Monitoring / alert rehearsal',
        detail: 'Prometheus 抓取本机服务指标，告警路由到本地证据 sink',
        projects: ['EVAL'],
      },
      {
        index: 'E11',
        label: 'Engineering background',
        detail: '其余 AI 应用、RAG、Tool Gateway 和 Java 全栈项目作为测试开发补充背景保留',
        projects: ['DF', 'RAG', 'MCP', 'OFF'],
      },
    ],
  },
]

export const projectBoundary = {
  summary:
    '这是面向测试开发实习的个人工程作品集。Gitea 是本地开源目标，PromptOps 使用 Mock Agent 与本地业务模拟；没有企业生产系统访问权限。',
  focus:
    '重点展示测试设计、API / UI 自动化、权限与数据边界、确定性 Agent 断言、运行报告、CI 与本地性能采样。',
  commitments: [
    '通过数、失败数和并发数据都链接到具体运行证据',
    '把执行器成功与 Agent 行为通过分开统计',
    '本地开源目标和模拟业务不写成生产经历',
    '保留失败样例、失败报告与负向用例',
  ],
}
