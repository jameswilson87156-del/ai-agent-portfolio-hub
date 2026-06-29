export type NavItem = {
  label: string
  href: string
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

export type ProjectItem = {
  index: string
  title: string
  subtitle: string
  tags: string[]
  tone: 'orange' | 'green'
}

export const navItems: NavItem[] = [
  { label: '作品', href: '#projects' },
  { label: '能力', href: '#capabilities' },
  { label: '技术栈', href: '#stack' },
  { label: '证据链', href: '#evidence' },
  { label: '简历', href: '#resume' },
]

export const techTags: TechTag[] = [
  { label: 'Spring Boot', tone: 'orange', x: 32, y: 25, line: 82 },
  { label: 'RAG', tone: 'green', x: 45, y: 18, line: 108 },
  { label: 'MCP-style', tone: 'orange', x: 66, y: 43, line: 70 },
  { label: 'Trace Evidence', tone: 'green', x: 38, y: 72, line: 42 },
  { label: 'JSON-RPC', tone: 'green', x: 82, y: 67, line: 34 },
]

export const timelineSteps: TimelineStep[] = [
  { label: '用户请求', time: '10:21:03.112', icon: '↳' },
  { label: 'Agent 规划', time: '10:21:03.291', icon: '▤' },
  { label: 'Schema Check', time: '10:21:03.418', icon: '◇' },
  { label: 'Tool Call', time: '10:21:03.482', icon: '◈' },
  { label: 'Trace Evidence', time: '10:21:04.645', icon: '⌘' },
  { label: 'Human Review', time: '10:21:05.243', icon: '⌁' },
]

export const projects: ProjectItem[] = [
  {
    index: '01',
    title: 'DevFlow Copilot',
    subtitle: 'AI Coding / Agentic Workflow Console',
    tags: ['AI Coding', 'Prompt Studio', 'Trace', 'Knowledge Base', 'Human Review'],
    tone: 'orange',
  },
  {
    index: '02',
    title: 'Enterprise Ticket RAG Copilot',
    subtitle: '企业工单 RAG 智能助手',
    tags: ['RAG', 'Ticket Copilot', 'Knowledge Reference', 'Provider fallback', 'Trace Evidence'],
    tone: 'green',
  },
  {
    index: '03',
    title: 'MCP Tool Gateway',
    subtitle: '企业 Agent 工具网关',
    tags: ['MCP-style', 'Tool Registry', 'JSON-RPC', 'RBAC demo', 'Audit Log', 'H2 Persistence'],
    tone: 'orange',
  },
]

export const jsonRpcPayload = `{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "tool": "rag.search",
  "trace_id": "trace_ai_agent_2027",
  "audit_log": true,
  "human_review": "pending"
}`
