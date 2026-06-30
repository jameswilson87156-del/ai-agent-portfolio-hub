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
