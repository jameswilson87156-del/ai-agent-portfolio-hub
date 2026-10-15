<script setup lang="ts">
import ProjectDetailTemplate from '../components/projects/ProjectDetailTemplate.vue'
import { promptOpsDetail } from '../data/projectDetails'
</script>

<template>
  <ProjectDetailTemplate
    :detail="promptOpsDetail"
    page-class="promptops-detail-page"
    kicker="CASE STUDY 03 / PROMPT EVAL & REGRESSION"
    dossier-stage="LOCAL DEMO / RULE-BASED EVAL"
    dossier-description="证据来自源项目 README、architecture、acceptance checklist 与真实浏览器截图；当前使用 Mock Output 与 Rule-based Eval，不声明真实模型质量或生产审批能力。"
    background-note="PromptOps Studio 对应 Prompt 评测与回归控制台，重点展示 Prompt Version、Dataset、Batch Evaluation、Output Compare、Trace、Failure Cases 与 Human Review。"
    architecture-title="Prompt Regression Chain"
    architecture-description="技术方案围绕 Prompt 版本、测试集、Mock Output、Rule-based Eval、失败样本归因和人工复核建立可复现回归链路。"
    :architecture-stages="['DATASET + VERSION', 'MOCK + RULE EVAL', 'TRACE + REVIEW']"
    screenshot-intro="以下均为 PromptOps Studio 本地运行页面真实浏览器截图副本，来源于 ai-agent-eval-promptops/docs/images；未使用 docs/design_refs，也不是生产环境截图。"
  />
</template>
