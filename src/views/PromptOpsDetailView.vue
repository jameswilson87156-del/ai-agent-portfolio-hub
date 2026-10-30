<script setup lang="ts">
import ProjectDetailTemplate from '../components/projects/ProjectDetailTemplate.vue'
import { promptOpsDetail } from '../data/projectDetails'
</script>

<template>
  <ProjectDetailTemplate
    :detail="promptOpsDetail"
    page-class="promptops-detail-page"
    kicker="CASE STUDY 02 / AGENT & BUSINESS API TESTING"
    dossier-stage="MOCK AGENT / LOCAL ORDER-REFUND SIMULATOR"
    dossier-description="证据来自固定合成 Agent 用例、确定性 Mock 运行、订单/退款模拟 API 的本地负载与监控报告，以及真实浏览器截图。本轮未调用外部模型。"
    background-note="PromptOps Studio 把 Agent 评测、失败 Trace、订单/退款 API 规则测试、稳定性采样和告警演练放在同一项目中；两类测试目标的边界分别说明。"
    architecture-title="Agent & Business API Test Chain"
    architecture-description="固定数据集先验证 Agent 执行器和逐条断言；独立模拟业务 API 再覆盖状态流转、重复执行、监控与受限负载采样。"
    :architecture-stages="['DATASET + MOCK AGENT', 'ASSERTIONS + TRACE', 'BUSINESS API + CI']"
    screenshot-intro="以下为 2026-10-28 PromptOps 页面真实浏览器截图，记录的是当时 26-case Mock 界面快照；当前固定集已升至 v1.1.0 / 38 条。Mock 结果不是模型基准。"
  />
</template>
