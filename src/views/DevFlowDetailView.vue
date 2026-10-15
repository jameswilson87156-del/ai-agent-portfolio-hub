<script setup lang="ts">
import ProjectDetailTemplate from '../components/projects/ProjectDetailTemplate.vue'
import { devFlowDetail } from '../data/projectDetails'
</script>

<template>
  <ProjectDetailTemplate
    :detail="devFlowDetail"
    page-class="devflow-detail-page"
    kicker="CASE STUDY 01 / AI CODING WORKFLOW"
    dossier-stage="RUNNABLE PORTFOLIO PROJECT"
    dossier-description="以真实可运行项目、真实本地浏览器截图、README 记录、构建验收和明确边界说明构成证据；不包装成生产级 AI IDE。"
    background-note="DevFlow Copilot 对应 AI Coding Workbench 场景，重点展示 Prompt、Provider、Trace、Tool Call 与 Human Review 如何形成可复盘工程链路。"
    architecture-title="Prompt → Provider → Trace → Review"
    architecture-description="技术方案围绕一次 AI Coding 请求展开：Prompt 模板进入 Provider 路由，生成过程写入 Trace 与 History，再通过 Human Review 保留人工确认边界。"
    :architecture-stages="['PROMPT ENTRY', 'GENERATION CORE', 'REVIEW HISTORY']"
    screenshot-intro="以下均为本地 DevFlow Copilot 可运行页面的浏览器截图副本，来源于 ai-coding-workbench/docs/images；不使用设计参考图，也不代表生产环境。"
  />
</template>
