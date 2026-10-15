export type ArchitectureNode = {
  index: string
  title: string
  detail: string
  layer: 'entry' | 'governance' | 'evidence'
}

export type ProjectSummaryItem = {
  label: string
  value: string
  tone: 'orange' | 'green'
}

export type FlowStep = {
  index: string
  title: string
  detail: string
}

export type CoreModuleItem = {
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

export type EngineeringEvidenceGroup = {
  index: string
  title: string
  description: string
  items: EngineeringEvidence[]
}

export type TrustPanelSection = {
  title: string
  description: string
  items: string[]
  tone: 'positive' | 'negative' | 'neutral'
}

export type InterviewQA = {
  index: string
  question: string
  answer: string
}

export const devFlowDetail = {
  title: 'DevFlow Copilot',
  subtitle: 'AI Coding / Agentic Workflow Console',
  positioning:
    '一个真实可运行的 AI Coding 工作流作品集工程项目，用于展示 Prompt 编排、Provider 调用、Generation Trace、Knowledge Reference、Human Review 与生成记录如何串成可复盘的 Agentic Coding Workflow。',
  tags: [
    'Vue 3',
    'TypeScript',
    'Spring Boot',
    'Java',
    'Prompt Studio',
    'Generation Trace',
    'Knowledge Base',
    'Human Review',
    'Playwright',
  ],
  githubUrl: 'https://github.com/jameswilson87156-del/devflow-copilot',
  summary: [
    {
      label: 'Role',
      value: 'AI Coding Workflow / Frontend Product Engineering',
      tone: 'orange',
    },
    {
      label: 'Core',
      value: 'Prompt + Provider + Trace + Human Review',
      tone: 'green',
    },
    {
      label: 'Evidence',
      value: 'Real screenshots / build passed / Playwright screenshots / README',
      tone: 'orange',
    },
    {
      label: 'Boundary',
      value: 'Portfolio engineering project, not production AI IDE',
      tone: 'green',
    },
  ] satisfies ProjectSummaryItem[],
  problem:
    'AI Coding 不应该只是输入 Prompt 和展示结果。DevFlow Copilot 的重点是把 Prompt、Provider、Trace、Knowledge Reference、Save Record、Human Review 和 Confirmed History 组织成可追踪的工程链路，让一次生成从输入到复盘都有清楚的记录。',
  problemSignals: [
    {
      label: 'PROMPT',
      value: '模板、变量、项目上下文和编码约束需要被版本化与复盘。',
    },
    {
      label: 'TRACE',
      value: 'Provider、模型、耗时、失败原因和 Knowledge 引用需要进入生成记录。',
    },
    {
      label: 'REVIEW',
      value: '生成 Artifact 必须先保存、再确认，避免把输出直接包装成自动执行能力。',
    },
  ],
  architecture: [
    {
      index: '01',
      title: 'Prompt Template',
      detail: '选择模板、变量、项目上下文和 coding rules，形成可复用的生成入口。',
      layer: 'entry',
    },
    {
      index: '02',
      title: 'Provider Call',
      detail: '通过 Provider Router 进入 local-rule 或 OpenAI-compatible 代码路径。',
      layer: 'entry',
    },
    {
      index: '03',
      title: 'Generation Trace',
      detail: '记录模板版本、渲染摘要、provider、model、status、latency 和 error。',
      layer: 'governance',
    },
    {
      index: '04',
      title: 'Knowledge Reference',
      detail: '检索轻量 Knowledge Base chunks，并把引用返回到生成结果中。',
      layer: 'governance',
    },
    {
      index: '05',
      title: 'Save Record',
      detail: '把 Artifact、状态、token usage 估算或真实 usage 与失败原因持久化。',
      layer: 'governance',
    },
    {
      index: '06',
      title: 'Human Review',
      detail: '通过 READY_FOR_REVIEW -> SAVED -> CONFIRMED 约束人工确认边界。',
      layer: 'evidence',
    },
    {
      index: '07',
      title: 'Confirmed History',
      detail: '在历史记录和 Trace 页面中回放一次可解释的 AI Coding workflow。',
      layer: 'evidence',
    },
  ] satisfies ArchitectureNode[],
  modules: [
    {
      index: 'M01',
      title: 'Dashboard',
      detail: '汇总工作流状态、待确认队列、最近 Trace 和 Prompt 模板健康度。',
    },
    {
      index: 'M02',
      title: 'Workbench',
      detail: '围绕项目上下文生成需求拆解、代码计划、README、Commit Message 和修复 Prompt。',
    },
    {
      index: 'M03',
      title: 'Prompt Templates',
      detail: '维护模板变量、启用状态、版本记录和渲染预览。',
    },
    {
      index: 'M04',
      title: 'Generation History',
      detail: '保存 provider、model、latency、status、错误摘要和生成 Artifact。',
    },
    {
      index: 'M05',
      title: 'Knowledge Base',
      detail: '提供文档、chunk、关键词/简单相似度检索和引用返回。',
    },
    {
      index: 'M06',
      title: 'Human Review',
      detail: '把生成结果放入保存、确认和复盘状态机，而不是自动执行。',
    },
    {
      index: 'M07',
      title: 'Trace / Activity',
      detail: '展示 Generation Trace、Agent Run Trace、Tool Call 和活动时间线。',
    },
  ] satisfies CoreModuleItem[],
  screenshots: [
    {
      index: 'S01',
      title: 'Agentic Dashboard',
      description: 'DevFlow 控制台首页，展示 AI Coding 工作流、Trace、模板和待确认状态。',
      src: '/images/projects/devflow/dashboard-agentic.png',
      alt: 'DevFlow Copilot Agentic Dashboard 真实浏览器截图',
      source: 'D:\\workhome\\ai-coding-workbench\\docs\\images\\dashboard-agentic.png',
      featured: true,
    },
    {
      index: 'S02',
      title: 'Workbench Running',
      description: 'AI 工作台把项目上下文、生成类型、模板和输出 Artifact 放在同一流程里。',
      src: '/images/projects/devflow/workbench-running.png',
      alt: 'DevFlow Copilot Workbench Running 真实浏览器截图',
      source: 'D:\\workhome\\ai-coding-workbench\\docs\\images\\workbench-running.png',
    },
    {
      index: 'S03',
      title: 'Generation History',
      description: '生成历史记录 provider、model、latency、status 与 review 状态，便于复盘。',
      src: '/images/projects/devflow/generation-history.png',
      alt: 'DevFlow Copilot Generation History 真实浏览器截图',
      source: 'D:\\workhome\\ai-coding-workbench\\docs\\images\\generation-history.png',
    },
    {
      index: 'S04',
      title: 'Prompt Templates',
      description: 'Prompt 模板页面展示变量、启用状态和模板版本意识。',
      src: '/images/projects/devflow/prompt-templates.png',
      alt: 'DevFlow Copilot Prompt Templates 真实浏览器截图',
      source: 'D:\\workhome\\ai-coding-workbench\\docs\\images\\prompt-templates.png',
    },
    {
      index: 'S05',
      title: 'Human Review Trace',
      description: 'Human Review 与 Trace 详情放在一起，说明生成结果如何被保存和确认。',
      src: '/images/projects/devflow/human-review-trace-detail.png',
      alt: 'DevFlow Copilot Human Review Trace 真实浏览器截图',
      source: 'D:\\workhome\\ai-coding-workbench\\docs\\images\\human-review-trace-detail.png',
    },
  ] satisfies ScreenshotEvidence[],
  engineeringEvidenceGroups: [
    {
      index: 'G01',
      title: 'Frontend Product Surface',
      description: '用 Vue 3 + TypeScript 把 AI Coding workflow 表达成可浏览、可演示的控制台。',
      items: [
        {
          index: 'E01',
          title: 'Vue 3 + TypeScript frontend',
          detail: '前端以 Vite、Vue 3、TypeScript 和 Element Plus 组织工作台、模板、历史、知识库和 review 页面。',
          scope: 'Frontend',
        },
        {
          index: 'E02',
          title: 'Prompt Studio workflow',
          detail: '模板变量、启用状态、版本记录和渲染预览让 Prompt 不再只是散落文本。',
          scope: 'Prompt UI',
        },
      ],
    },
    {
      index: 'G02',
      title: 'Spring Boot Workflow Core',
      description: '后端承载生成记录、状态流转、Provider 抽象和数据持久化边界。',
      items: [
        {
          index: 'E03',
          title: 'Spring Boot backend',
          detail: 'README 记录后端使用 Java 17、Spring Boot 3、Controller / Service / Mapper 分层和统一响应。',
          scope: 'Java backend',
        },
        {
          index: 'E04',
          title: 'Human review state machine',
          detail: '生成结果经过 READY_FOR_REVIEW -> SAVED -> CONFIRMED，非法状态流转返回 HTTP 409。',
          scope: 'Workflow state',
        },
      ],
    },
    {
      index: 'G03',
      title: 'Trace & Knowledge',
      description: '把生成过程、上下文引用和 Agent Run 步骤变成可解释记录。',
      items: [
        {
          index: 'E05',
          title: 'Generation Trace',
          detail: '记录 promptVersion、inputVariables、renderedPrompt 摘要、provider、model、status、latencyMs 和 errorMessage。',
          scope: 'Trace record',
        },
        {
          index: 'E06',
          title: 'Knowledge reference',
          detail: 'Knowledge Base 采用关键词/简单相似度检索，返回文档 chunk 引用，不冒充生产级向量 RAG。',
          scope: 'Light RAG',
        },
        {
          index: 'E07',
          title: 'Agent Run Trace',
          detail: '记录一次任务运行、拆解步骤、Prompt 渲染、Knowledge 检索、Provider 调用和 Human Review 状态。',
          scope: 'Agent trace',
        },
      ],
    },
    {
      index: 'G04',
      title: 'Verification & Documentation',
      description: '用可读文档、测试记录和真实截图说明完成度，同时保留未完成边界。',
      items: [
        {
          index: 'E08',
          title: '20 backend tests',
          detail: 'README 记录 20 个 Spring Boot 测试覆盖模板渲染、Provider 降级、状态机、Trace、Knowledge 检索和 RAG 引用。',
          scope: 'Testing',
        },
        {
          index: 'E09',
          title: 'Build verification',
          detail: 'README 记录前端 npm run build passed，当前 portfolio 本页也会通过本仓库构建验证。',
          scope: 'Build',
        },
        {
          index: 'E10',
          title: 'Real screenshots',
          detail: '页面引用的截图均从本地 DevFlow docs/images 复制，不使用设计参考图冒充运行证据。',
          scope: 'Playwright',
        },
      ],
    },
  ] satisfies EngineeringEvidenceGroup[],
  trustPanel: [
    {
      title: 'What is real',
      description: '当前真实定位',
      tone: 'positive',
      items: [
        '真实前端页面、真实项目结构和可运行的 AI Coding workflow。',
        '真实浏览器截图、build / screenshots 验收和 README / 文档证据。',
        '一个 portfolio-grade engineering project，用于证明前端产品表达、Java 后端分层和 AI 工程化边界意识。',
      ],
    },
    {
      title: 'What it is not',
      description: '明确不声称的能力',
      tone: 'negative',
      items: [
        '不是生产级 AI IDE，也不会自动修改代码、自动提交 Git 或自动部署。',
        '不虚构真实线上用户、企业客户、业务流量或商业数据。',
        '不声称已稳定接入真实大模型；真实 Provider 需要环境变量和单独验证。',
      ],
    },
    {
      title: 'Scope assumptions',
      description: '项目边界与假设',
      tone: 'neutral',
      items: [
        '默认 local-rule Provider 是本地规则/模板生成，不是真实 LLM 推理。',
        'Knowledge Base 是关键词/简单相似度检索，不是生产级向量数据库。',
        'Human Review 是作品集工程中的 workflow 状态设计，用于展示可解释和可复盘意识。',
        '截图来自真实本地浏览器页面副本，不是设计参考图。',
      ],
    },
  ] satisfies TrustPanelSection[],
  interviewQuestions: [
    {
      index: 'Q01',
      question: '这个项目和普通 AI 生成页面有什么区别？',
      answer:
        '我不是只做一个 Prompt 输入框，而是把 Prompt、Provider、Trace、Knowledge Reference 和 Human Review 串成可复盘的 AI Coding 工作流。',
    },
    {
      index: 'Q02',
      question: '这个项目主要体现什么能力？',
      answer:
        '它体现前端产品表达、AI 工作流拆解、状态流转设计、工程证据整理，以及用 Java 后端承载基础业务接口的能力。',
    },
    {
      index: 'Q03',
      question: '为什么要做 Human Review？',
      answer:
        'AI Coding 结果不能只看生成，还需要保存、确认、复盘和人工审核，这样更接近可解释的工程流程。',
    },
    {
      index: 'Q04',
      question: '这个项目是真实项目还是 demo？',
      answer:
        '它是真实可运行的个人作品集工程项目，有前端页面、后端接口、状态流转、真实浏览器截图和构建验收。但我不会把它包装成生产级 AI IDE，也不会虚构真实用户、企业客户或线上流量。',
    },
    {
      index: 'Q05',
      question: '项目边界是什么？',
      answer:
        '它是 runnable portfolio project，不是生产级商业系统；local-rule fallback 不等于稳定真实 LLM 服务，也不声称生产级 RAG 或 Agent 平台能力。',
    },
  ] satisfies InterviewQA[],
}

export const ticketRagDetail = {
  title: 'Enterprise Ticket RAG Copilot',
  subtitle: '企业工单 RAG 智能助手',
  positioning:
    '一个真实可运行的企业工单 RAG Copilot 作品集工程项目，围绕工单检索、知识引用、Provider fallback、Trace Evidence 与 Human Review，展示企业 AI 助手如何把回答过程变得可解释、可追踪、可审核。',
  tags: [
    'Vue 3',
    'TypeScript',
    'Spring Boot',
    'Java',
    'RAG',
    'Knowledge Base',
    'Provider fallback',
    'Trace Evidence',
    'Human Review',
    'Playwright',
  ],
  githubUrl: 'https://github.com/jameswilson87156-del/enterprise-ai-ticket-copilot',
  summary: [
    {
      label: 'Role',
      value: 'AI Application / Enterprise Copilot Workflow',
      tone: 'green',
    },
    {
      label: 'Core',
      value: 'Ticket + RAG + Trace Evidence + Human Review',
      tone: 'orange',
    },
    {
      label: 'Evidence',
      value: 'Real screenshots / README / build screenshots / Showcase pages',
      tone: 'green',
    },
    {
      label: 'Boundary',
      value: 'Runnable portfolio project, not production enterprise RAG',
      tone: 'orange',
    },
  ] satisfies ProjectSummaryItem[],
  problem:
    '企业工单场景中，AI 回答不能只是生成一段文本。面试官和业务方更关心答案引用了哪些知识、Provider 是否 fallback、Trace 是否可追踪、是否经过人工审核、风险和边界是否清晰。Enterprise Ticket RAG Copilot 用一个可运行的作品集工程项目展示企业 AI Copilot 的可解释链路。',
  problemSignals: [
    {
      label: 'TICKET',
      value: '工单上下文、系统名、错误日志和优先级需要进入同一条处理链路。',
    },
    {
      label: 'RAG',
      value: '知识引用要说明来源、命中关键词、相关度和片段，而不是只给出结论。',
    },
    {
      label: 'REVIEW',
      value: 'Provider fallback、Trace Evidence 和 Human Review 共同保留可审核运行边界。',
    },
  ],
  architecture: [
    {
      index: '01',
      title: 'Ticket Intake',
      detail: '接收工单标题、描述、系统、错误日志与当前处理状态。',
      layer: 'entry',
    },
    {
      index: '02',
      title: 'Knowledge Retrieval',
      detail: '通过关键词和分类匹配知识条目，保留命中原因和来源路径。',
      layer: 'entry',
    },
    {
      index: '03',
      title: 'RAG Context',
      detail: '把知识标题、片段、相关度和引用关系组织成回复上下文。',
      layer: 'governance',
    },
    {
      index: '04',
      title: 'Provider / fallback',
      detail: '记录 OpenAI-compatible 路径或 local-rule fallback 的 provider、model 与原因。',
      layer: 'governance',
    },
    {
      index: '05',
      title: 'AI Analysis',
      detail: '生成分类、风险提示、排查步骤和待人工确认的回复草稿。',
      layer: 'governance',
    },
    {
      index: '06',
      title: 'Trace Evidence',
      detail: '聚合 generation record、状态历史、知识引用和 JSON 摘要。',
      layer: 'evidence',
    },
    {
      index: '07',
      title: 'Human Review',
      detail: '通过 Approve、Request Changes、Reject 保留人工决策权。',
      layer: 'evidence',
    },
    {
      index: '08',
      title: 'Final Response',
      detail: '最终回复与知识沉淀必须经过人工确认，不自动关闭工单。',
      layer: 'evidence',
    },
  ] satisfies ArchitectureNode[],
  modules: [
    {
      index: 'M01',
      title: 'Ticket Workbench',
      detail: '围绕工单上下文、处理建议和状态历史组织主工作台。',
    },
    {
      index: 'M02',
      title: 'Knowledge Base',
      detail: '展示知识文章、来源路径、命中关键词和引用片段。',
    },
    {
      index: 'M03',
      title: 'RAG Evidence',
      detail: '把知识命中和回复草稿之间的依据关系显式呈现。',
    },
    {
      index: 'M04',
      title: 'Provider fallback',
      detail: '记录 provider、model、latency、fallbackUsed 与 fallbackReason。',
    },
    {
      index: 'M05',
      title: 'Trace Evidence',
      detail: '聚合工单分析、generation record、状态历史和知识引用。',
    },
    {
      index: 'M06',
      title: 'Human Review',
      detail: '通过人工审核控制建议草稿、处理结论和知识发布。',
    },
    {
      index: 'M07',
      title: 'Showcase Screenshots',
      detail: 'README 使用真实浏览器生成的五个 Showcase 页面截图。',
    },
    {
      index: 'M08',
      title: 'README Evidence',
      detail: '文档明确验证结果、能力边界和 Provider 调试口径。',
    },
  ] satisfies CoreModuleItem[],
  screenshots: [
    {
      index: 'S01',
      title: 'Enterprise Copilot Dashboard',
      description: '企业工单 Copilot 总览，展示队列、运行边界、知识覆盖和人工审核状态。',
      src: '/images/projects/ticket-rag/dashboard.png',
      alt: 'Enterprise Ticket RAG Copilot Dashboard 真实浏览器截图',
      source: 'D:\\workhome\\enterprise-ai-ticket-copilot\\docs\\images\\dashboard.png',
      featured: true,
    },
    {
      index: 'S02',
      title: 'Ticket Workbench',
      description: '工单上下文、处理建议、知识命中和人工确认入口放在同一工作流里。',
      src: '/images/projects/ticket-rag/ticket-detail.png',
      alt: 'Enterprise Ticket RAG Copilot Ticket Workbench 真实浏览器截图',
      source: 'D:\\workhome\\enterprise-ai-ticket-copilot\\docs\\images\\ticket-detail.png',
    },
    {
      index: 'S03',
      title: 'Knowledge / RAG',
      description: '知识引用页面展示来源路径、关键词命中、相关度和片段证据。',
      src: '/images/projects/ticket-rag/knowledge-base.png',
      alt: 'Enterprise Ticket RAG Copilot Knowledge Base 真实浏览器截图',
      source: 'D:\\workhome\\enterprise-ai-ticket-copilot\\docs\\images\\knowledge-base.png',
    },
    {
      index: 'S04',
      title: 'Trace Evidence',
      description: 'Trace 页面聚合 Provider fallback、generation record、RAG Reference 和 JSON 证据。',
      src: '/images/projects/ticket-rag/trace-evidence.png',
      alt: 'Enterprise Ticket RAG Copilot Trace Evidence 真实浏览器截图',
      source: 'D:\\workhome\\enterprise-ai-ticket-copilot\\docs\\images\\trace-evidence.png',
    },
    {
      index: 'S05',
      title: 'Human Review',
      description: '人工审核页面展示 Approve、Request Changes、Reject 的决策边界。',
      src: '/images/projects/ticket-rag/human-review.png',
      alt: 'Enterprise Ticket RAG Copilot Human Review 真实浏览器截图',
      source: 'D:\\workhome\\enterprise-ai-ticket-copilot\\docs\\images\\human-review.png',
    },
  ] satisfies ScreenshotEvidence[],
  engineeringEvidenceGroups: [
    {
      index: 'G01',
      title: 'Frontend Showcase',
      description: '用 Vue 3 + TypeScript 呈现企业 Copilot 的多页面工作流，而不是聊天框或后台表格。',
      items: [
        {
          index: 'E01',
          title: 'Vue 3 + TypeScript frontend',
          detail: '源项目 README 记录前端使用 Vue 3、TypeScript、Vite 和原生 CSS Design Tokens。',
          scope: 'Frontend',
        },
        {
          index: 'E02',
          title: 'Five showcase pages',
          detail: 'Dashboard、Ticket Workbench、Knowledge / RAG、Trace Evidence 与 Human Review 均有真实浏览器截图。',
          scope: 'Showcase',
        },
      ],
    },
    {
      index: 'G02',
      title: 'Spring Boot Workflow',
      description: '后端支撑工单、Trace Evidence、Provider fallback、RBAC demo 和 Human Review 接口。',
      items: [
        {
          index: 'E03',
          title: 'Spring Boot backend',
          detail: 'README 记录 Java 17、Spring Boot 3、MyBatis-Plus、Bean Validation 与 SpringDoc OpenAPI。',
          scope: 'Java backend',
        },
        {
          index: 'E04',
          title: 'Ticket workflow',
          detail: '工单状态流转、知识草稿和处理结论都保留人工确认边界，不自动回复或关闭工单。',
          scope: 'Workflow state',
        },
      ],
    },
    {
      index: 'G03',
      title: 'RAG & Evidence Chain',
      description: '把知识引用、Provider 记录、fallback 原因和 Trace Evidence 放进可复盘链路。',
      items: [
        {
          index: 'E05',
          title: 'Knowledge Base / RAG context',
          detail: '当前 RAG 表示关键词知识引用与证据展示，不是 embedding、Vector DB 或完整 RAG Pipeline。',
          scope: 'Light RAG',
        },
        {
          index: 'E06',
          title: 'Provider fallback',
          detail: 'OpenAI-compatible Provider 代码路径已实现；未配置、超时或失败时记录原因并回退 local-rule。',
          scope: 'Provider path',
        },
        {
          index: 'E07',
          title: 'Trace Evidence',
          detail: '聚合 ticket_ai_analysis、generation_record、ticket_status_history 与 knowledge_article。',
          scope: 'Evidence API',
        },
      ],
    },
    {
      index: 'G04',
      title: 'Verification & Boundaries',
      description: '用构建、测试、截图和 README 说明项目可运行，同时保留真实能力边界。',
      items: [
        {
          index: 'E08',
          title: '24 backend tests',
          detail: 'README 记录后端 Tests run: 24, Failures: 0, Errors: 0, Skipped: 0。',
          scope: 'Testing',
        },
        {
          index: 'E09',
          title: 'Build verification',
          detail: 'README 记录前端 npm run build 通过；截图脚本覆盖 5 个 Showcase 路由。',
          scope: 'Build',
        },
        {
          index: 'E10',
          title: 'README portfolio documentation',
          detail: 'README 明确当前不声明真实模型成功响应、生产级 RAG 或生产级客服系统。',
          scope: 'Docs',
        },
      ],
    },
  ] satisfies EngineeringEvidenceGroup[],
  trustPanel: [
    {
      title: 'What is real',
      description: '当前真实定位',
      tone: 'positive',
      items: [
        '一个真实可运行的企业工单 RAG Copilot 作品集工程项目，不是静态页面。',
        '真实前端 Showcase 页面、真实浏览器截图、README 文档和 build / screenshots 验收。',
        '后端接口、工单状态流转、Trace Evidence、Provider fallback 和 Human Review 均有项目证据支撑。',
      ],
    },
    {
      title: 'What it is not',
      description: '明确不声称的能力',
      tone: 'negative',
      items: [
        '不包装成生产级企业 RAG 系统、自动客服系统或无人值守 Agent。',
        '不虚构真实企业客户、真实工单数据、线上流量或商业指标。',
        '不声称 OpenAI、DeepSeek 或真实 Provider 稳定连接成功；以源项目 README 和实际验证为准。',
      ],
    },
    {
      title: 'Scope assumptions',
      description: '项目边界与假设',
      tone: 'neutral',
      items: [
        '默认 local-rule fallback 是本地规则、关键词知识匹配和模板化建议草稿。',
        'Provider fallback 是作品集工程路径，不等于稳定真实大模型服务。',
        'RAG 表示知识引用与证据展示，不是 embedding、Vector DB 或完整生产级 RAG Pipeline。',
        'Human Review 是作品集工程中的人工审核闭环，不是生产级审核任务平台。',
      ],
    },
  ] satisfies TrustPanelSection[],
  interviewQuestions: [
    {
      index: 'Q01',
      question: '这个项目和普通客服问答页面有什么区别？',
      answer:
        '我不是只做一个聊天框，而是把 Ticket、Knowledge Retrieval、Provider fallback、Trace Evidence 和 Human Review 串成企业 Copilot 的可解释工作流。',
    },
    {
      index: 'Q02',
      question: '为什么要做 Trace Evidence？',
      answer:
        '企业场景里，AI 回答需要知道依据来自哪里、调用路径是什么、是否需要人工确认。Trace Evidence 是为了让回答过程可复盘。',
    },
    {
      index: 'Q03',
      question: 'Provider fallback 的作用是什么？',
      answer:
        '它展示系统在模型不可用或未配置时如何保留可运行路径，但我不会把 fallback 包装成真实大模型稳定能力。',
    },
    {
      index: 'Q04',
      question: '这个项目主要体现什么能力？',
      answer:
        '它体现 RAG 场景理解、企业 AI Copilot 流程拆解、前端产品表达、Java 后端接口组织和工程证据整理能力。',
    },
    {
      index: 'Q05',
      question: '项目边界是什么？',
      answer:
        '它是真实可运行的作品集工程项目，但不是生产级企业 RAG 系统，也不虚构真实客户、工单数据或线上业务指标。',
    },
  ] satisfies InterviewQA[],
}

export const promptOpsDetail = {
  title: 'PromptOps Studio',
  subtitle: 'AI Agent Eval / Prompt Regression Console',
  positioning:
    'PromptOps Studio 是一个本地可运行的 Prompt 评测与回归分析控制台，用于展示 Prompt 版本、批量评测、输出对比、Trace 追踪、失败归因与人工复核闭环。',
  tags: [
    'Vue 3',
    'TypeScript',
    'Vite',
    'Java 17',
    'Spring Boot 3.3',
    'MyBatis-Plus',
    'MySQL / H2 Demo Profile',
    'Playwright',
    'Rule-based Eval',
  ],
  githubUrl: 'https://github.com/jameswilson87156-del/ai-agent-eval-promptops',
  summary: [
    {
      label: 'Role',
      value: 'Prompt Evaluation / Regression Analysis',
      tone: 'orange',
    },
    {
      label: 'Workflow',
      value: 'Dataset + Prompt Version + Eval + Trace + Review',
      tone: 'green',
    },
    {
      label: 'Evidence',
      value: 'Real browser screenshots / 13-test acceptance record / README',
      tone: 'orange',
    },
    {
      label: 'Boundary',
      value: 'Local Demo / Mock Output / Rule-based Eval',
      tone: 'green',
    },
  ] satisfies ProjectSummaryItem[],
  problem:
    'Prompt 迭代不能只靠主观浏览单次输出。PromptOps Studio 把 Prompt Version、Dataset、Eval Run、Case Result、Generation Trace、Failure Case 与 Human Review 放进同一条本地可复现链路，用确定性规则建立可解释的评测与回归基线。',
  problemSignals: [
    {
      label: 'VERSION',
      value: 'Prompt 模板、变量和版本链路需要可比较，避免改动后无法解释差异。',
    },
    {
      label: 'EVAL',
      value: '同一 Dataset 上的批量运行、规则评分和输出对比需要可重复查看。',
    },
    {
      label: 'REVIEW',
      value: '失败样本需要进入归因与人工复核，但当前复核结论只在页面中演示。',
    },
  ],
  architecture: [
    {
      index: '01',
      title: 'Dataset / Test Cases',
      detail: '组织本地虚构样本、期望输出、标签、覆盖率与难度结构。',
      layer: 'entry',
    },
    {
      index: '02',
      title: 'Prompt Version',
      detail: '选择模板版本、变量与规则集，形成可比较的评测输入。',
      layer: 'entry',
    },
    {
      index: '03',
      title: 'Mock Output',
      detail: '由确定性 MockOutputGenerator 生成本地输出，不调用真实模型。',
      layer: 'governance',
    },
    {
      index: '04',
      title: 'Rule-based Eval',
      detail: '使用 MUST_CONTAIN、FORBIDDEN_WORD、RISK_NOTICE_REQUIRED 与 FORMAT 规则评分。',
      layer: 'governance',
    },
    {
      index: '05',
      title: 'Output Compare',
      detail: '对比 Prompt 版本输出、规则分、Schema 差异与回归风险。',
      layer: 'governance',
    },
    {
      index: '06',
      title: 'Trace / Failure Case',
      detail: '追踪输入、Prompt 构建、Mock Output、规则检查与失败原因。',
      layer: 'evidence',
    },
    {
      index: '07',
      title: 'Human Review',
      detail: '把失败样本带入本地复核闭环；结论不持久化，也不是生产审批。',
      layer: 'evidence',
    },
  ] satisfies ArchitectureNode[],
  modules: [
    {
      index: 'M01',
      title: 'Eval Dashboard',
      detail: '汇总当前评测实验、规则指标、风险样本、Trace 与 Prompt 迭代建议。',
    },
    {
      index: 'M02',
      title: 'Prompt Version Management',
      detail: '维护 Prompt 模板、变量、版本链路、规则配置与本地调试上下文。',
    },
    {
      index: 'M03',
      title: 'Batch Evaluation',
      detail: '组合 Dataset、Prompt Version 与规则集，查看 Run 状态和 Score Matrix。',
    },
    {
      index: 'M04',
      title: 'Output Compare',
      detail: '比较版本输出、规则分、Schema 差异与回归风险，不声称真实模型提升。',
    },
    {
      index: 'M05',
      title: 'Trace / Run Detail',
      detail: '回放输入、Prompt Build、Mock Output、Rule Evaluator、Score 与失败节点。',
    },
    {
      index: 'M06',
      title: 'Failure Cases',
      detail: '按根因聚合失败样本，关联修复建议、回归状态与人工复核节点。',
    },
    {
      index: 'M07',
      title: 'Dataset / Test Cases',
      detail: '管理本地评测样本、期望输出、标签、覆盖率与难度结构。',
    },
    {
      index: 'M08',
      title: 'System Boundary',
      detail: '集中说明 Local Demo、Mock Output、Rule-based Eval、数据来源与未实现能力。',
    },
  ] satisfies CoreModuleItem[],
  screenshots: [
    {
      index: 'S01',
      title: 'Eval Dashboard',
      description: '聚合本地评测实验、规则指标、风险样本、Trace 与 Prompt 迭代建议。',
      src: '/images/projects/promptops/eval-dashboard.png',
      alt: 'PromptOps Studio 本地评测总览真实浏览器截图',
      source: 'ai-agent-eval-promptops · docs/images/eval-dashboard.png',
      featured: true,
    },
    {
      index: 'S02',
      title: 'Batch Evaluation',
      description: '组合 Dataset、Prompt Version 与规则集，展示运行进度和 Score Matrix。',
      src: '/images/projects/promptops/batch-evaluation.png',
      alt: 'PromptOps Studio 批量评测真实浏览器截图',
      source: 'ai-agent-eval-promptops · docs/images/batch-evaluation.png',
    },
    {
      index: 'S03',
      title: 'Output Compare',
      description: '对比 Prompt 版本输出、规则得分、Schema 差异与本地回归风险。',
      src: '/images/projects/promptops/output-compare.png',
      alt: 'PromptOps Studio 输出对比真实浏览器截图',
      source: 'ai-agent-eval-promptops · docs/images/output-compare.png',
    },
    {
      index: 'S04',
      title: 'Trace / Run Detail',
      description: '回放从输入、Prompt Build、Mock Output 到规则评测、失败样本和人工复核的链路。',
      src: '/images/projects/promptops/trace-detail.png',
      alt: 'PromptOps Studio 运行追踪详情真实浏览器截图',
      source: 'ai-agent-eval-promptops · docs/images/trace-detail.png',
      featured: true,
    },
    {
      index: 'S05',
      title: 'Failure Cases',
      description: '按规则失败与根因聚合样本，展示修复建议和回归任务。',
      src: '/images/projects/promptops/failure-cases.png',
      alt: 'PromptOps Studio 失败归因真实浏览器截图',
      source: 'ai-agent-eval-promptops · docs/images/failure-cases.png',
    },
    {
      index: 'S06',
      title: 'Dataset / Test Cases',
      description: '展示本地测试集、Case、期望输出、标签分布与覆盖结构。',
      src: '/images/projects/promptops/dataset.png',
      alt: 'PromptOps Studio 测试集真实浏览器截图',
      source: 'ai-agent-eval-promptops · docs/images/dataset.png',
    },
    {
      index: 'S07',
      title: 'System Boundary',
      description: '把 Local Demo、Mock Output、Rule-based Eval、无需 API Key 和未启用能力集中说明。',
      src: '/images/projects/promptops/system-boundary.png',
      alt: 'PromptOps Studio 系统边界真实浏览器截图',
      source: 'ai-agent-eval-promptops · docs/images/system-boundary.png',
      featured: true,
    },
  ] satisfies ScreenshotEvidence[],
  engineeringEvidenceGroups: [
    {
      index: 'G01',
      title: 'Prompt Evaluation Domain',
      description: '把 Prompt 迭代拆成可查询、可比较、可追踪的领域对象。',
      items: [
        {
          index: 'E01',
          title: 'Prompt + Version Model',
          detail: 'Prompt Template、Prompt Version 与 variables JSON 形成版本化输入边界。',
          scope: 'Version management',
        },
        {
          index: 'E02',
          title: 'Dataset + Case Model',
          detail: 'Eval Dataset 与 Eval Case 组织本地虚构样本、期望输出与规则绑定。',
          scope: 'Synthetic demo data',
        },
        {
          index: 'E03',
          title: 'Run + Case Result',
          detail: 'Eval Run 保存聚合结果，Eval Case Result 保存逐 Case 状态、评分与解释。',
          scope: 'Local persistence',
        },
      ],
    },
    {
      index: 'G02',
      title: 'Deterministic Eval & Trace',
      description: '当前质量链路以确定性 Mock 和规则评分为基线，不冒充真实模型评测。',
      items: [
        {
          index: 'E04',
          title: 'MockOutputGenerator',
          detail: '根据版本与 Case 生成确定性本地输出，不进行真实 Provider 调用。',
          scope: 'Mock Output',
        },
        {
          index: 'E05',
          title: 'RuleEvaluator',
          detail: '执行四类确定性规则并计算加权分数；JSON FORMAT 规则使用 Jackson 解析。',
          scope: 'Rule-based Eval',
        },
        {
          index: 'E06',
          title: 'Generation Trace',
          detail: '保存输入/输出摘要、规则检查与失败原因，支持按 Run 和 Case 查询。',
          scope: 'Trace evidence',
        },
        {
          index: 'E07',
          title: 'EvaluationPolicy',
          detail: '统一判断 Review 与回归风险；该判断不等同于持久化审批。',
          scope: 'Review gate demo',
        },
      ],
    },
    {
      index: 'G03',
      title: 'Full-Stack Delivery',
      description: '前端、后端、数据 profile 与浏览器截图形成可复查的本地交付证据。',
      items: [
        {
          index: 'E08',
          title: 'Vue 3 + TypeScript',
          detail: '多页面 PromptOps 控制台覆盖 Prompt、Batch Eval、Compare、Trace、Failure、Dataset 与 Boundary。',
          scope: 'Frontend',
        },
        {
          index: 'E09',
          title: 'Spring Boot + MyBatis-Plus',
          detail: '后端提供 Prompt、Dataset、Case、Rule、Eval Run 与 Trace API。',
          scope: 'Java 17 backend',
        },
        {
          index: 'E10',
          title: 'MySQL / H2 Demo Profile',
          detail: '默认模式使用 MySQL；demo/test 使用内存 H2 与虚构种子数据。',
          scope: 'Local demo profile',
        },
        {
          index: 'E11',
          title: 'Acceptance Evidence',
          detail: '源项目验收清单记录 13 个后端测试通过，并通过 Playwright 生成 8 张真实浏览器截图。',
          scope: 'Existing acceptance record',
        },
      ],
    },
  ] satisfies EngineeringEvidenceGroup[],
  trustPanel: [
    {
      title: 'What is real',
      description: '当前真实定位',
      items: [
        '本地可运行的 Prompt 评测与回归分析控制台。',
        '真实 Vue 页面、Spring Boot API、MyBatis-Plus 领域模型与 H2 demo profile。',
        '真实浏览器截图来自源项目 docs/images，不使用 docs/design_refs。',
        'Prompt Version、Dataset、Batch Evaluation、Output Compare、Trace 与 Failure Case 均有页面证据。',
      ],
      tone: 'positive',
    },
    {
      title: 'What is not claimed',
      description: '明确不做的生产声明',
      items: [
        '不包含真实用户数据、线上用户、商业落地、生产流量、收益或 SLA。',
        '未接入真实模型，不声明真实模型质量、准确率、成本或 latency。',
        '未启用 LLM-as-Judge、多模型对比、RAG、异步队列或生产监控。',
        'Human Review 结论不持久化，不代表生产审批记录或权限系统。',
      ],
      tone: 'negative',
    },
    {
      title: 'Demo conditions',
      description: '演示成立条件',
      items: [
        '输出来自确定性 MockOutputGenerator，不是真实 LLM 推理。',
        '评分来自 RuleEvaluator，不是 AI 语义裁判。',
        'Demo profile 使用 H2 与虚构种子数据，无需 API Key。',
        '页面中的延迟/耗时属于本地模拟数据，不能表述为 Provider 性能。',
      ],
      tone: 'neutral',
    },
  ] satisfies TrustPanelSection[],
  interviewQuestions: [
    {
      index: 'Q01',
      question: '为什么先做 Rule-based Eval，而不是直接接 LLM-as-Judge？',
      answer:
        '确定性规则更容易复现、解释和回归，适合先验证领域模型、批量运行、失败归因与版本对比链路；LLM-as-Judge 仍是未启用的后续方向。',
    },
    {
      index: 'Q02',
      question: 'PromptOps 与 DevFlow 有什么区别？',
      answer:
        'DevFlow 关注 AI Coding 生成工作流；PromptOps 关注 Prompt 版本、同一 Dataset 上的评测、输出比较、失败归因和回归复核。',
    },
    {
      index: 'Q03',
      question: '页面中的分数和延迟能代表真实模型效果吗？',
      answer:
        '不能。当前输出是 Mock Output，分数来自确定性规则，延迟是本地模拟数据；页面只证明评测工作流和工程结构。',
    },
    {
      index: 'Q04',
      question: 'Human Review 为什么不算生产审批？',
      answer:
        '当前复核结论主要保存在页面状态中，没有持久化审批、角色权限和完整审计，因此只能描述为本地复核闭环演示。',
    },
  ] satisfies InterviewQA[],
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
  summary: [
    {
      label: 'Role',
      value: 'Java Backend / AI Agent Tooling',
      tone: 'orange',
    },
    {
      label: 'Core',
      value: 'Tool Gateway + JSON-RPC + RBAC demo',
      tone: 'green',
    },
    {
      label: 'Evidence',
      value: '60 tests / CI / Docker / OpenAPI',
      tone: 'orange',
    },
    {
      label: 'Boundary',
      value: 'MCP-style prototype, not full official MCP',
      tone: 'green',
    },
  ] satisfies ProjectSummaryItem[],
  problem:
    '企业 AI Agent 如果直接调用工具，容易出现工具边界不清、权限不可见、调用过程不可追踪、审核与审计缺失的问题。MCP Tool Gateway 用一个作品集级工具网关，把 Tool Registry、Policy Check、Trace Evidence、Audit Log 与 Human Review 串起来，展示 Agent 工具调用治理的完整链路。',
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
      title: 'Policy Check',
      detail: '由 PolicyService 检查 demo 角色与动作边界。',
      layer: 'governance',
    },
    {
      index: '04',
      title: 'JSON-RPC Adapter',
      detail: '提供 HTTP-only MCP-style list / call 入口。',
      layer: 'governance',
    },
    {
      index: '05',
      title: 'Tool Call',
      detail: '创建调用记录，并在允许时执行 sandbox Tool。',
      layer: 'governance',
    },
    {
      index: '06',
      title: 'Trace Evidence',
      detail: '聚合请求、Schema、Policy、Review 与执行步骤。',
      layer: 'evidence',
    },
    {
      index: '07',
      title: 'Audit Log',
      detail: '记录 actor、action、target、时间与 metadata。',
      layer: 'evidence',
    },
    {
      index: '08',
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
  engineeringEvidenceGroups: [
    {
      index: 'G01',
      title: 'Testing & CI',
      description: '用可重复测试与自动化构建说明代码可以被验证。',
      items: [
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
      ],
    },
    {
      index: 'G02',
      title: 'API & Deployment',
      description: '接口契约和本地交付路径都有清楚入口。',
      items: [
        {
          index: 'E03',
          title: 'OpenAPI / Swagger',
          detail: 'springdoc 描述现有 REST demo endpoints，便于接口检查与联调。',
          scope: 'API contract',
        },
        {
          index: 'E04',
          title: 'Docker Compose',
          detail: '提供本地前后端组合启动路径，不包装成生产部署方案。',
          scope: 'Local delivery',
        },
      ],
    },
    {
      index: 'G03',
      title: 'Persistence & Repository',
      description: '以显式数据访问边界承载本地 demo 状态。',
      items: [
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
      ],
    },
    {
      index: 'G04',
      title: 'Agent Governance',
      description: '把调用入口、策略、Trace 与 Audit 收束成治理链。',
      items: [
        {
          index: 'E07',
          title: 'JSON-RPC adapter',
          detail: 'HTTP POST 入口演示 tools/list、tools/call、prompts/list 与 resources/list。',
          scope: 'MCP-style scope',
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
      ],
    },
  ] satisfies EngineeringEvidenceGroup[],
  trustPanel: [
    {
      title: 'What it is',
      description: '当前真实定位',
      tone: 'positive',
      items: [
        '一个面向作品集展示的 MCP-style Agent 工具治理网关原型。',
        '一条可运行、可测试、可截图复核的 Tool / Policy / Trace / Audit / Review 链路。',
      ],
    },
    {
      title: 'What it is not',
      description: '明确不声称的能力',
      tone: 'negative',
      items: [
        '不声称完整实现官方 MCP 协议或具备完整 MCP compatibility。',
        'RBAC 是 PolicyService demo，不是生产级权限系统。',
      ],
    },
    {
      title: 'Scope assumptions',
      description: '项目边界与本地运行假设',
      tone: 'neutral',
      items: [
        'X-Demo-Role 是 demo/testing helper，不是生产鉴权。',
        'H2 是本地 demo persistence，不是生产数据库方案。',
        'Tool execution 是 demo/sandbox，不执行真实危险操作。',
        '没有真实企业客户、线上流量或商业数据。',
      ],
    },
  ] satisfies TrustPanelSection[],
  interviewQuestions: [
    {
      index: 'Q01',
      question: '这个项目和普通 CRUD 有什么区别？',
      answer: '我重点不是做工具列表，而是把 Tool、Policy、Trace、Audit 和 Human Review 串成 Agent 工具治理闭环。',
    },
    {
      index: 'Q02',
      question: '为什么做 JSON-RPC adapter？',
      answer: '用它模拟 MCP-style 的统一调用入口，让 Tool Call 可以复用同一套 Policy、Trace、Audit 和 Review 逻辑。',
    },
    {
      index: 'Q03',
      question: '高风险 Tool Call 怎么处理？',
      answer: '调用会先留下待审记录与 Trace；只有 Human Review 批准后才执行 sandbox Tool，拒绝或要求修改都不会执行。',
    },
    {
      index: 'Q04',
      question: '为什么使用 H2 和 JdbcTemplate？',
      answer: 'H2 让本地 demo 和测试更容易复现，JdbcTemplate 让我显式展示 SQL、RowMapper 与 repository 边界；它们都不是生产数据库结论。',
    },
    {
      index: 'Q05',
      question: '这个项目最能证明什么能力？',
      answer: '它更适合证明 Java 后端、Agent Tooling、策略检查、证据链设计和工程化交付能力，而不是证明生产级 MCP 平台经验。',
    },
  ] satisfies InterviewQA[],
}

export const offerFlowDetail = {
  title: 'OfferFlow Copilot',
  subtitle: 'JD Intake · Resume Evidence · Human Review · Provider Trace',
  positioning:
    'Java + AI workflow demo for JD intake, resume evidence management, match report versioning, human review, provider traceability, and copy permission governance.',
  githubUrl: 'https://github.com/jameswilson87156-del/offerflow-copilot',
  tags: [
    'Spring Boot 3',
    'Java 17',
    'Vue 3',
    'TypeScript',
    'MyBatis-Plus',
    'Flyway',
    'Provider SPI',
    'Prompt / Schema Contract',
    'Risk Guard',
    'Copy Permission',
    'Trace Evidence',
    'GitHub Actions',
    'Playwright',
  ],
  summary: [
    {
      label: 'Status',
      value: 'Portfolio-ready local release',
      tone: 'green',
    },
    {
      label: 'Core',
      value: 'JD + Evidence + Review + Copy Gate',
      tone: 'orange',
    },
    {
      label: 'Provider',
      value: 'Optional manual dry-run verified',
      tone: 'green',
    },
    {
      label: 'Boundary',
      value: 'No platform API / crawler / auto-apply',
      tone: 'orange',
    },
  ] satisfies ProjectSummaryItem[],
  problem:
    'OfferFlow Copilot 不是普通 JD 分析器。它把 JD 入库、简历证据、匹配报告版本、Provider Trace、Schema Validate、Risk Guard、Human Review 和 Copy Permission 串成一条 evidence-first AI workflow，避免把 AI 生成内容直接当作可复制结果。',
  problemSignals: [
    {
      label: 'EVIDENCE',
      value: '简历证据需要先确认、可编辑、可审计，再进入匹配报告。',
    },
    {
      label: 'TRACE',
      value: 'Provider 输出必须经过 prompt/schema/risk/copy 状态链路，而不是直接信任。',
    },
    {
      label: 'REVIEW',
      value: '最终复制前必须经过 Human Review confirmed 与 Copy Permission Contract。',
    },
  ],
  architecture: [
    {
      index: '01',
      title: 'JD Intake',
      detail: '手动粘贴 JD，生成结构化解析版本并保留输入边界。',
      layer: 'entry',
    },
    {
      index: '02',
      title: 'Resume Evidence',
      detail: '把简历项目、技能和证明材料放入可审计的证据库。',
      layer: 'entry',
    },
    {
      index: '03',
      title: 'Evidence Binding',
      detail: '将岗位要求与已确认或待复核证据建立绑定关系。',
      layer: 'entry',
    },
    {
      index: '04',
      title: 'Match Report',
      detail: '生成版本化匹配报告、评分拆解和证据来源说明。',
      layer: 'governance',
    },
    {
      index: '05',
      title: 'Provider Trace',
      detail: '记录 provider、fallback、schema、risk 和 run timeline。',
      layer: 'governance',
    },
    {
      index: '06',
      title: 'Schema Validate',
      detail: 'Provider response 必须符合 task schema，失败时 fallback。',
      layer: 'governance',
    },
    {
      index: '07',
      title: 'Risk Guard',
      detail: '拦截 Offer 概率、录取概率、保证通过等禁用表述。',
      layer: 'governance',
    },
    {
      index: '08',
      title: 'Human Review',
      detail: '通过 confirm、return、flag-risk 保留人工决策和审计记录。',
      layer: 'evidence',
    },
    {
      index: '09',
      title: 'Copy Permission',
      detail: '只有 confirmed 且 Copy Permission Contract 通过后才允许复制。',
      layer: 'evidence',
    },
  ] satisfies ArchitectureNode[],
  modules: [
    {
      index: 'M01',
      title: 'Structured JD Intake',
      detail: '手动输入 JD，形成 parse version、requirements 和 evidence binding 上下文。',
    },
    {
      index: 'M02',
      title: 'Resume Evidence Library',
      detail: '维护证据状态、详情、覆盖图、编辑记录和审计历史。',
    },
    {
      index: 'M03',
      title: 'Match Report Versioning',
      detail: '把报告、评分拆解、证据来源和 Human Review handoff 作为版本化对象。',
    },
    {
      index: 'M04',
      title: 'Provider Trace Evidence',
      detail: '展示 Provider descriptors、config check、schema validation、risk guard 和 fallback trace。',
    },
    {
      index: 'M05',
      title: 'Human Review Audit Trail',
      detail: '保留 confirm、return、flag-risk 等人工动作的审计链路。',
    },
    {
      index: 'M06',
      title: 'Copy Permission Contract',
      detail: '把复制行为从生成行为里拆出来，确认前 copyAllowed=false。',
    },
    {
      index: 'M07',
      title: 'Persistence + CI',
      detail: 'Flyway、H2 demo mode、MySQL profile、GitHub Actions 和 Playwright screenshots 支撑工程验收。',
    },
  ] satisfies CoreModuleItem[],
  screenshots: [
    {
      index: 'S01',
      title: 'JD Analyzer',
      description: '手动 JD 入库、解析版本、证据绑定和工作台导航。',
      src: '/images/projects/offerflow/jd-analyzer.png',
      alt: 'OfferFlow Copilot JD Analyzer 真实运行截图',
      source: 'D:\\workhome\\offerflow-copilot\\docs\\images\\offerflow-dashboard.png',
      featured: true,
    },
    {
      index: 'S02',
      title: 'Resume Evidence Library',
      description: '证据状态、编辑上下文、详情面板、覆盖图和审计历史。',
      src: '/images/projects/offerflow/evidence-library.png',
      alt: 'OfferFlow Copilot Resume Evidence Library 真实运行截图',
      source: 'D:\\workhome\\offerflow-copilot\\docs\\images\\offerflow-evidence-library.png',
    },
    {
      index: 'S03',
      title: 'Match Report',
      description: '版本化报告、评分拆解、Human Review handoff 和 copy permission。',
      src: '/images/projects/offerflow/match-report.png',
      alt: 'OfferFlow Copilot Match Report 真实运行截图',
      source: 'D:\\workhome\\offerflow-copilot\\docs\\images\\offerflow-match-report.png',
    },
    {
      index: 'S04',
      title: 'Human Review',
      description: 'confirm、return、flag-risk 的审计链路和风险状态。',
      src: '/images/projects/offerflow/human-review.png',
      alt: 'OfferFlow Copilot Human Review 真实运行截图',
      source: 'D:\\workhome\\offerflow-copilot\\docs\\images\\offerflow-human-review.png',
    },
    {
      index: 'S05',
      title: 'Provider Settings',
      description: 'Provider Trace、Schema Validate、Risk Guard 和 manual dry-run 边界。',
      src: '/images/projects/offerflow/provider-trace.png',
      alt: 'OfferFlow Copilot Provider Trace 真实运行截图',
      source: 'D:\\workhome\\offerflow-copilot\\docs\\images\\offerflow-provider-trace.png',
    },
  ] satisfies ScreenshotEvidence[],
  engineeringEvidenceGroups: [
    {
      index: 'G01',
      title: 'Java Workflow Backend',
      description: '用 Spring Boot 3、MyBatis-Plus 和 Flyway 承载 JD、证据、报告、review 与 trace 数据路径。',
      items: [
        {
          index: 'E01',
          title: 'Spring Boot 3 + Java 17',
          detail: '后端以 Controller / Service / Persistence 分层组织业务流程，默认 H2 demo mode 可本地启动。',
          scope: 'Java backend',
        },
        {
          index: 'E02',
          title: 'Flyway + H2/MySQL',
          detail: 'Flyway 管理 schema migration；H2 用于 demo/test，MySQL profile 和 Docker Compose 用于本地验证。',
          scope: 'Persistence',
        },
      ],
    },
    {
      index: 'G02',
      title: 'AI Governance Contracts',
      description: '把 Provider 输出放进 prompt、schema、risk、review 和 copy 的 contract 链路。',
      items: [
        {
          index: 'E03',
          title: 'Provider SPI',
          detail: 'Provider SPI 支持 local-rule、no-op adapters 和 optional manual real Provider dry-run path。',
          scope: 'Provider boundary',
        },
        {
          index: 'E04',
          title: 'Prompt / Schema Contract',
          detail: 'Provider task type 绑定 promptVersion、schemaVersion 和 required fields。',
          scope: 'Contract registry',
        },
        {
          index: 'E05',
          title: 'Provider Response Validator',
          detail: '校验 schemaVersion、required fields、rawResponseSaved=false 和禁用表述。',
          scope: 'Validation',
        },
        {
          index: 'E06',
          title: 'Risk Policy Guard',
          detail: '检查 Offer prediction、guaranteed pass、real-time interview assistance 等禁用边界。',
          scope: 'Risk guard',
        },
      ],
    },
    {
      index: 'G03',
      title: 'Review & Copy Gates',
      description: '把“生成了”与“可以使用/复制”分开，保留人工确认和审计记录。',
      items: [
        {
          index: 'E07',
          title: 'Human Review Audit Trail',
          detail: 'Draft、Needs review、Confirmed、Returned 和 Risk flagged 状态都有 audit evidence。',
          scope: 'Review workflow',
        },
        {
          index: 'E08',
          title: 'Copy Permission Contract',
          detail: 'copyAllowed 在 confirmed 前保持 false；复制检查本身也写入 audit history。',
          scope: 'Copy gate',
        },
        {
          index: 'E09',
          title: 'Local Permission Workflow',
          detail: '本地 demo role 控制写操作边界，不冒充生产 authentication 或 authorization。',
          scope: 'Demo permission',
        },
      ],
    },
    {
      index: 'G04',
      title: 'Verification & Release Packaging',
      description: '用测试、构建、截图、CI 和 release docs 证明作品集展示可信度。',
      items: [
        {
          index: 'E10',
          title: '126 backend tests',
          detail: 'OfferFlow P5C 本地验收记录为 126 tests passed。',
          scope: 'Testing',
        },
        {
          index: 'E11',
          title: 'GitHub Actions CI',
          detail: 'CI 覆盖 Maven tests、frontend build 和 Playwright screenshot validation，默认 local-rule mode。',
          scope: 'CI',
        },
        {
          index: 'E12',
          title: 'Playwright screenshots',
          detail: '18 passed，覆盖 runtime screenshots 和 1366 horizontal overflow validation。',
          scope: 'Screenshots',
        },
      ],
    },
  ] satisfies EngineeringEvidenceGroup[],
  trustPanel: [
    {
      title: 'What is real',
      description: '当前真实定位',
      tone: 'positive',
      items: [
        '一个 portfolio-ready local release 的 Java + AI workflow demo。',
        '真实运行截图来自 OfferFlow docs/images 和 docs/images/large，不使用 docs/design/references。',
        'P5C 验收记录包括 126 backend tests、frontend build、18 个 Playwright screenshot checks 和 GitHub Actions CI。',
      ],
    },
    {
      title: 'What it is not',
      description: '明确不声称的能力',
      tone: 'negative',
      items: [
        '不是生产级招聘平台，不接招聘平台 API，不爬虫，不自动投递。',
        '不保存真实隐私数据，不输出 Offer 概率、录取概率或保证通过。',
        '不做实时面试辅助；不声明生产级 DeepSeek、GPT 或中转站接入。',
      ],
    },
    {
      title: 'Provider dry-run wording',
      description: '真实 Provider 只能这样表达',
      tone: 'neutral',
      items: [
        'Optional manual real Provider dry-run path，disabled by default。',
        'API keys are read from environment variables only；rawResponseSaved=false。',
        'DeepSeek manual dry-run verified; OpenAI-compatible relay manual dry-run verified。',
        'Output still requires Schema Validate, Risk Guard, Human Review, and Copy Permission; copyAllowed=false before confirmation。',
      ],
    },
  ] satisfies TrustPanelSection[],
  interviewQuestions: [
    {
      index: 'Q01',
      question: 'OfferFlow 和普通 JD 分析器有什么区别？',
      answer:
        '它不是把 JD 丢给模型然后展示文本，而是把 JD intake、resume evidence、match report versioning、Provider Trace、Human Review 和 Copy Permission 串成 evidence-first workflow。',
    },
    {
      index: 'Q02',
      question: '为什么强调 Copy Permission？',
      answer:
        'AI 生成内容不能默认可复制。OfferFlow 把 copy gate 独立出来，只有 Human Review confirmed 且 Copy Permission Contract 通过后才允许复制。',
    },
    {
      index: 'Q03',
      question: '真实 Provider dry-run 表示什么？',
      answer:
        '它只表示 optional manual dry-run path 已用脱敏输入手动验证过 DeepSeek 和 OpenAI-compatible relay；这不是生产级稳定接入，也不绕过 schema、risk、review 和 copy gate。',
    },
    {
      index: 'Q04',
      question: '这个项目最能证明什么工程能力？',
      answer:
        '它能证明 Java 后端分层、数据迁移、Provider 契约、风险校验、审计链路、前端产品表达和自动化验收能力。',
    },
    {
      index: 'Q05',
      question: '项目边界是什么？',
      answer:
        '它是 portfolio-grade engineering demo，不是生产招聘系统；不接平台 API、不爬虫、不自动投递、不保存真实隐私，也不预测 Offer 或提供实时面试辅助。',
    },
  ] satisfies InterviewQA[],
}
