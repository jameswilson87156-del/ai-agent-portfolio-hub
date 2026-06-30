export type ProjectCode = 'DF' | 'RAG' | 'MCP'

export type CaseStudyProject = {
  index: string
  code: ProjectCode
  slug: string
  detailPath?: string
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
  DF: 'DevFlow',
  RAG: 'Ticket RAG',
  MCP: 'MCP Gateway',
}

export const caseStudyProjects: CaseStudyProject[] = [
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
      caption: 'Agentic Coding workflow console / local demo',
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
    index: '03',
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
    tone: 'orange',
  },
]

export const capabilityMatrix: CapabilityItem[] = [
  { label: 'Java Backend', projects: ['DF', 'RAG', 'MCP'] },
  { label: 'Spring Boot', projects: ['DF', 'RAG', 'MCP'] },
  { label: 'Vue 3 + TypeScript', projects: ['DF', 'RAG', 'MCP'] },
  { label: 'AI Application', projects: ['DF', 'RAG', 'MCP'] },
  { label: 'Agent Workflow', projects: ['DF', 'MCP'] },
  { label: 'RAG', projects: ['RAG'] },
  { label: 'MCP-style Tooling', projects: ['MCP'] },
  { label: 'Trace Evidence', projects: ['DF', 'RAG', 'MCP'] },
  { label: 'Human Review', projects: ['DF', 'RAG', 'MCP'] },
  { label: 'Audit Log', projects: ['MCP'] },
  { label: 'RBAC demo', projects: ['MCP'] },
  { label: 'CI / Docker / OpenAPI', projects: ['MCP'] },
]

export const evidenceGroups: EvidenceGroup[] = [
  {
    index: 'G01',
    title: 'Documentation',
    description: '说明如何运行，也说明能力做到哪里。',
    items: [
      {
        index: 'E01',
        label: 'README',
        detail: '范围、运行方式与工程边界说明',
        projects: ['DF', 'RAG', 'MCP'],
      },
      {
        index: 'E02',
        label: 'Boundary notes',
        detail: '明确 demo、协议兼容与生产能力边界',
        projects: ['DF', 'RAG', 'MCP'],
      },
    ],
  },
  {
    index: 'G02',
    title: 'Runtime Evidence',
    description: '由可运行页面和可重复命令留下验证材料。',
    items: [
      {
        index: 'E03',
        label: '真实浏览器截图',
        detail: '来自三个本地项目的实际页面，不使用概念图冒充',
        projects: ['DF', 'RAG', 'MCP'],
      },
      {
        index: 'E04',
        label: 'Playwright screenshots',
        detail: '固定视口的可重复页面验收',
        projects: ['DF', 'RAG', 'MCP'],
      },
      {
        index: 'E05',
        label: 'Build passed',
        detail: '以可复现构建结果作为交付证据',
        projects: ['DF', 'RAG', 'MCP'],
      },
      {
        index: 'E06',
        label: 'Trace Evidence',
        detail: '保留请求、调用与结果之间的解释链',
        projects: ['DF', 'RAG', 'MCP'],
      },
    ],
  },
  {
    index: 'G03',
    title: 'Backend Evidence',
    description: '通过测试、契约和交付路径证明后端工程工作。',
    items: [
      {
        index: 'E07',
        label: 'Backend tests',
        detail: 'MCP Tool Gateway 包含 60 项后端测试',
        projects: ['MCP'],
      },
      {
        index: 'E08',
        label: 'CI',
        detail: 'GitHub Actions 自动化校验路径',
        projects: ['MCP'],
      },
      {
        index: 'E09',
        label: 'OpenAPI',
        detail: '后端接口契约与联调入口',
        projects: ['MCP'],
      },
      {
        index: 'E10',
        label: 'Docker',
        detail: '可重复的本地容器运行方式',
        projects: ['MCP'],
      },
    ],
  },
  {
    index: 'G04',
    title: 'AI Governance',
    description: '把回退、审核、权限与审计放进 Agent 链路。',
    items: [
      {
        index: 'E11',
        label: 'Human Review',
        detail: '高风险输出保留人工确认边界',
        projects: ['DF', 'RAG', 'MCP'],
      },
      {
        index: 'E12',
        label: 'Provider fallback',
        detail: '演示 Provider 不可用时的明确回退路径',
        projects: ['DF', 'RAG'],
      },
      {
        index: 'E13',
        label: 'Audit Log',
        detail: '展示工具调用与策略检查的审计意识',
        projects: ['MCP'],
      },
      {
        index: 'E14',
        label: 'RBAC demo',
        detail: '只表达演示权限边界，不冒充生产鉴权',
        projects: ['MCP'],
      },
    ],
  },
]

export const projectBoundary = {
  summary:
    '这些项目是个人作品集和实习求职展示项目，不虚构生产级能力、真实企业客户、真实线上流量或商业数据。',
  focus:
    '重点展示系统拆解能力、AI Agent 流程理解、Java 后端工程能力、前端产品表达和工程证据意识。',
  commitments: [
    'Demo 能力明确标注',
    '概念协议不冒充完整实现',
    '本地样例不冒充生产数据',
    '真实截图只来自可运行页面',
  ],
}
