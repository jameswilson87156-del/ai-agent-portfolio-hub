<script setup lang="ts">
import ProjectDetailTemplate from '../components/projects/ProjectDetailTemplate.vue'
import { ticketRagDetail } from '../data/projectDetails'
</script>

<template>
  <ProjectDetailTemplate
    :detail="ticketRagDetail"
    page-class="ticket-rag-detail-page"
    kicker="CASE STUDY 02 / ENTERPRISE TICKET RAG"
    dossier-stage="SYNTHETIC DEMO / KEYWORD RETRIEVAL"
    dossier-description="指标来自 synthetic demo dataset、keyword retrieval 与 citation gating；不声明真实企业数据、真实向量 RAG 或真实模型质量。"
    background-note="Enterprise Ticket RAG Copilot 对应企业工单知识库问答场景，重点展示检索证据、引用来源、Trace Timeline 与 Human Review。"
    architecture-title="Ticket → Retrieval → Citation → Review"
    architecture-description="技术方案以工单为入口，用 keyword retrieval 召回知识片段，保留 citation evidence 与 trace timeline，再通过 Human Review 表达高风险回答边界。"
    :architecture-stages="['TICKET INTAKE', 'RAG EVIDENCE', 'REVIEW GATE']"
    screenshot-intro="以下均为 Enterprise Ticket RAG Copilot 本地运行页面截图副本，来源于 enterprise-ai-ticket-copilot/docs/images；指标仅代表 synthetic demo baseline。"
  />
</template>
