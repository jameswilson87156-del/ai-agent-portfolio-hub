<script setup lang="ts">
import ProjectDetailTemplate from '../components/projects/ProjectDetailTemplate.vue'
import { offerFlowDetail } from '../data/projectDetails'
</script>

<template>
  <ProjectDetailTemplate
    :detail="offerFlowDetail"
    page-class="offerflow-detail-page"
    kicker="CASE STUDY 04 / JAVA + AI JOB WORKFLOW"
    dossier-stage="LOCAL RELEASE / REVIEW-GATED"
    dossier-description="OfferFlow 是 evidence-first Java + AI workflow demo；真实 Provider 默认关闭，manual dry-run 是脱敏验证路径，不接招聘平台、不爬虫、不自动投递。"
    background-note="OfferFlow Copilot 对应求职场景里的 JD Intake、Resume Evidence、Match Report、Provider Trace、Human Review 与 Copy Permission。"
    architecture-title="JD → Evidence → Review → Copy Gate"
    architecture-description="技术方案把 JD、简历证据、报告版本、Provider Trace、Schema/Risk 校验、Human Review 与 Copy Permission 串成可审计 workflow。"
    :architecture-stages="['JD + EVIDENCE', 'PROVIDER TRACE', 'REVIEW + COPY']"
    screenshot-intro="以下均为 OfferFlow Copilot 本地运行页面真实截图副本，来源于 offerflow-copilot/docs/images；manual dry-run 不代表生产级 Provider 服务。"
  />
</template>
