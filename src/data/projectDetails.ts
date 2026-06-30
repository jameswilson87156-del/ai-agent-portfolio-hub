export type ArchitectureNode = {
  index: string
  title: string
  detail: string
  layer: 'entry' | 'governance' | 'evidence'
}

export type FlowStep = {
  index: string
  title: string
  detail: string
}

export type ScreenshotEvidence = {
  index: string
  title: string
  description: string
  src: string
  alt: string
  source: string
  featured?: boolean
}

export type EngineeringEvidence = {
  index: string
  title: string
  detail: string
  scope: string
}

export const mcpGatewayDetail = {
  title: 'MCP Tool Gateway',
  subtitle: '企业 Agent 工具网关',
  positioning:
    '面向企业 AI Agent 的 MCP-style 工具接入与治理平台，围绕 Tool、Prompt、Resource、JSON-RPC、RBAC demo、Trace Evidence、Audit Log 与 Human Review 构建可解释的工具调用链路。',
  tags: [
    'Spring Boot 3',
    'Java 17',
    'Vue 3',
    'TypeScript',
    'JSON-RPC',
    'RBAC demo',
    'Audit Log',
    'OpenAPI',
    'Docker',
    'GitHub Actions',
  ],
  githubUrl: 'https://github.com/jameswilson87156-del/mcp-tool-gateway',
  problem:
    '企业 AI Agent 如果直接调用工具，容易出现工具边界不清、权限不可见、调用过程不可追踪、审核与审计缺失的问题。MCP Tool Gateway 用一个 demo 级工具网关，把 Tool Registry、Policy Check、Trace Evidence、Audit Log 与 Human Review 串起来，展示 Agent 工具调用治理的完整链路。',
  architecture: [
    {
      index: '01',
      title: 'Agent Request',
      detail: '接收工具意图、调用参数与请求上下文。',
      layer: 'entry',
    },
    {
      index: '02',
      title: 'Tool Registry',
      detail: '解析 ToolDefinition、Schema、Provider 与风险等级。',
      layer: 'entry',
    },
    {
      index: '03',
      title: 'Prompt / Resource',
      detail: '管理可复用模板与受治理的上下文资源。',
      layer: 'entry',
    },
    {
      index: '04',
      title: 'Policy Check',
      detail: '由 PolicyService 检查 demo 角色与动作边界。',
      layer: 'governance',
    },
    {
      index: '05',
      title: 'JSON-RPC Adapter',
      detail: '提供 HTTP-only MCP-style list / call 入口。',
      layer: 'governance',
    },
    {
      index: '06',
      title: 'Tool Call',
      detail: '创建调用记录，并在允许时执行 sandbox Tool。',
      layer: 'governance',
    },
    {
      index: '07',
      title: 'Trace Evidence',
      detail: '聚合请求、Schema、Policy、Review 与执行步骤。',
      layer: 'evidence',
    },
    {
      index: '08',
      title: 'Audit Log',
      detail: '记录 actor、action、target、时间与 metadata。',
      layer: 'evidence',
    },
    {
      index: '09',
      title: 'Human Review',
      detail: '高风险调用在 sandbox 执行前等待人工决策。',
      layer: 'evidence',
    },
  ] satisfies ArchitectureNode[],
  flow: [
    {
      index: '01',
      title: 'Agent Request',
      detail: '接收 Agent 的 Tool 意图与结构化参数，生成本地 request / call 标识。',
    },
    {
      index: '02',
      title: 'Tool Registry',
      detail: '匹配 ToolDefinition，读取 Provider、Schema、权限范围与风险级别。',
    },
    {
      index: '03',
      title: 'Policy Check',
      detail: 'PolicyService 用 demo 角色动作矩阵判断调用能否继续。',
    },
    {
      index: '04',
      title: 'JSON-RPC / Tool Call',
      detail: 'REST 与 HTTP-only JSON-RPC adapter 复用同一条 Tool invoke 治理路径。',
    },
    {
      index: '05',
      title: 'Trace Evidence',
      detail: '保存 Schema Check、Permission Check、Review 与 Execute 等步骤证据。',
    },
    {
      index: '06',
      title: 'Audit Log',
      detail: '记录调用、阻断、待审和决策事件，回答谁对什么做了什么。',
    },
    {
      index: '07',
      title: 'Human Review',
      detail: '高风险调用先形成待审记录；批准后才执行 sandbox Tool，拒绝或要求修改均不执行。',
    },
  ] satisfies FlowStep[],
  screenshots: [
    {
      index: 'S01',
      title: 'Tool Call Workbench',
      description: '从 Tool 选择、JSON 参数到响应与 Trace Timeline 的主调用工作台。',
      src: '/images/projects/mcp/mcp-tool-workbench.png',
      alt: 'MCP Tool Gateway Tool Call Workbench 真实浏览器截图',
      source: 'docs/images/large/mcp-tool-workbench.png',
      featured: true,
    },
    {
      index: 'S02',
      title: 'Tool Registry',
      description: '展示 Tool、Provider、Schema、风险等级与 permission scope。',
      src: '/images/projects/mcp/tool-registry.png',
      alt: 'MCP Tool Gateway Tool Registry 真实浏览器截图',
      source: 'docs/images/large/tool-registry.png',
    },
    {
      index: 'S03',
      title: 'Human Review Center',
      description: '高风险 Tool Call 的待审、风险说明与人工决策界面。',
      src: '/images/projects/mcp/human-review-center.png',
      alt: 'MCP Tool Gateway Human Review Center 真实浏览器截图',
      source: 'docs/images/large/human-review-center.png',
    },
    {
      index: 'S04',
      title: 'Trace Evidence',
      description: '按一次 Tool Call 聚合步骤、输入输出、Review 与 Audit evidence。',
      src: '/images/projects/mcp/trace-evidence.png',
      alt: 'MCP Tool Gateway Trace Evidence 真实浏览器截图',
      source: 'docs/images/large/trace-evidence.png',
    },
    {
      index: 'S05',
      title: 'Audit Log',
      description: '以 actor、action、target 与 metadata 形成可查询的 demo 审计记录。',
      src: '/images/projects/mcp/audit-log.png',
      alt: 'MCP Tool Gateway Audit Log 真实浏览器截图',
      source: 'docs/images/large/audit-log.png',
    },
  ] satisfies ScreenshotEvidence[],
  engineeringEvidence: [
    {
      index: 'E01',
      title: '60 backend tests',
      detail: '源项目最近验收记录为 60 tests、0 failures、0 errors，覆盖主要 API 与工程边界。',
      scope: 'JUnit 5 / MockMvc',
    },
    {
      index: 'E02',
      title: 'GitHub Actions CI',
      detail: 'push 与 pull request 时分别执行 Java 17 tests 和 Node 20 frontend build。',
      scope: 'CI workflow',
    },
    {
      index: 'E03',
      title: 'Docker Compose',
      detail: '提供本地前后端组合启动路径，不包装成生产部署方案。',
      scope: 'Local delivery',
    },
    {
      index: 'E04',
      title: 'OpenAPI / Swagger',
      detail: 'springdoc 描述现有 REST demo endpoints，便于接口检查与联调。',
      scope: 'API contract',
    },
    {
      index: 'E05',
      title: 'H2 Persistence',
      detail: '本地内存库保存 Tool、Call、Review、Trace、Audit、Prompt 与 Resource demo 数据。',
      scope: 'Demo persistence',
    },
    {
      index: 'E06',
      title: 'JdbcTemplate repositories',
      detail: '显式维护 SQL、RowMapper 与 repository 数据边界。',
      scope: 'Data access',
    },
    {
      index: 'E07',
      title: 'JSON-RPC adapter',
      detail: 'HTTP POST 入口演示 tools/list、tools/call、prompts/list 与 resources/list。',
      scope: 'MCP-style demo',
    },
    {
      index: 'E08',
      title: 'RBAC PolicyService',
      detail: '用本地角色动作 allowlist 演示敏感入口的策略检查与结构化 403。',
      scope: 'Policy demo',
    },
    {
      index: 'E09',
      title: 'Audit Log',
      detail: '记录 actor、action、target、timestamp 与 metadata，不声称不可篡改审计。',
      scope: 'Governance evidence',
    },
    {
      index: 'E10',
      title: 'Trace Repository',
      detail: '通过 repository 边界持久化步骤事件，并按 Tool Call 聚合可解释证据。',
      scope: 'Trace evidence',
    },
  ] satisfies EngineeringEvidence[],
  boundaries: [
    'MCP-style，不声称完整实现官方 MCP 协议。',
    'RBAC 是 PolicyService demo，不是生产级权限系统。',
    'X-Demo-Role 只是 demo/testing helper，不是生产鉴权。',
    'H2 是本地 demo persistence，不是生产数据库方案。',
    'Tool execution 是 demo/sandbox，不执行真实危险操作。',
    '这是个人作品集项目，不虚构真实企业客户、线上流量或商业数据。',
  ],
  interviewNotes: [
    '我把这个项目理解成企业 Agent 调工具前的一层治理网关，重点是让调用边界、风险和证据都能被看见。',
    '后端重点不是 CRUD，而是把 Tool、Policy、Trace、Audit 与 Human Review 串成一个有状态的闭环。',
    'JSON-RPC adapter 用来模拟 MCP-style 调用入口，并复用已有的 Policy、Review、Trace 与 Audit 逻辑。',
    'RBAC、X-Demo-Role 和 H2 都是明确的 demo 边界，主要用于展示分层、策略与持久化设计能力。',
    '这个项目最适合证明我在 Java 后端与 AI Agent 平台方向上的系统拆解和工程交付能力。',
  ],
}
