export type ProjectCode = 'DF' | 'RAG' | 'MCP'

export type CaseStudyProject = {
  index: string
  code: ProjectCode
  slug: string
  title: string
  position: string
  problem: string
  workflow: string[]
  stack: string[]
  evidence: string[]
  boundary: string
  resumeValue: string
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

export const caseStudyProjects: CaseStudyProject[] = [
  {
    index: '01',
    code: 'DF',
    slug: 'devflow',
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
    stack: ['Vue 3', 'TypeScript', 'Spring Boot', 'Java', 'H2', 'Playwright'],
    evidence: [
      '真实浏览器截图',
      'README',
      'Generation History',
      'Prompt Templates',
      'Trace',
      'build 验收',
    ],
    boundary:
      '作品集 demo，不夸大为生产级 AI IDE，不虚构真实线上用户。',
    resumeValue:
      '体现 AI Coding 工作流拆解、Provider 抽象、可追踪生成记录与前后端产品表达能力。',
    tone: 'orange',
  },
  {
    index: '02',
    code: 'RAG',
    slug: 'ticket-rag',
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
      'Playwright',
    ],
    evidence: [
      '工单工作台',
      '知识库',
      'Trace Evidence',
      'Human Review',
      'README',
      '真实浏览器截图',
    ],
    boundary:
      'RAG / Provider 为作品集演示路径，不虚构真实企业客户或线上生产数据。',
    resumeValue:
      '体现 RAG 应用流程、知识引用、Provider 回退和人工复核等企业 AI 场景理解。',
    tone: 'green',
  },
  {
    index: '03',
    code: 'MCP',
    slug: 'mcp-gateway',
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
      'H2',
      'JdbcTemplate',
      'OpenAPI',
      'Docker',
      'GitHub Actions',
    ],
    evidence: [
      '60 backend tests',
      'CI',
      'Docker',
      'OpenAPI',
      'JSON-RPC adapter',
      'H2 Persistence',
      'RBAC demo',
      'Audit Log',
      '真实浏览器截图',
    ],
    boundary:
      'MCP-style，不声称完整官方 MCP 协议；RBAC 是 demo；X-Demo-Role 不是生产鉴权。',
    resumeValue:
      '突出 Java 后端、工具接入、策略检查、审计链路与工程化交付能力。',
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

export const evidenceWall: EvidenceItem[] = [
  {
    index: 'E01',
    label: 'README',
    detail: '范围、运行方式与工程边界说明',
    projects: ['DF', 'RAG', 'MCP'],
  },
  {
    index: 'E02',
    label: '真实浏览器截图',
    detail: '由本地可运行前端生成，不使用概念图冒充',
    projects: ['DF', 'RAG', 'MCP'],
  },
  {
    index: 'E03',
    label: 'Playwright screenshots',
    detail: '固定视口的可重复页面验收',
    projects: ['DF', 'RAG', 'MCP'],
  },
  {
    index: 'E04',
    label: 'Build passed',
    detail: '以可复现构建结果作为交付证据',
    projects: ['DF', 'RAG', 'MCP'],
  },
  {
    index: 'E05',
    label: 'Backend tests',
    detail: 'MCP Tool Gateway 包含 60 项后端测试',
    projects: ['MCP'],
  },
  {
    index: 'E06',
    label: 'CI',
    detail: 'GitHub Actions 自动化校验路径',
    projects: ['MCP'],
  },
  {
    index: 'E07',
    label: 'OpenAPI',
    detail: '后端接口契约与联调入口',
    projects: ['MCP'],
  },
  {
    index: 'E08',
    label: 'Docker',
    detail: '可重复的本地容器运行方式',
    projects: ['MCP'],
  },
  {
    index: 'E09',
    label: 'Trace Evidence',
    detail: '保留请求、调用与结果之间的解释链',
    projects: ['DF', 'RAG', 'MCP'],
  },
  {
    index: 'E10',
    label: 'Human Review',
    detail: '高风险输出保留人工确认边界',
    projects: ['DF', 'RAG', 'MCP'],
  },
  {
    index: 'E11',
    label: 'Audit Log',
    detail: '展示工具调用与策略检查的审计意识',
    projects: ['MCP'],
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
