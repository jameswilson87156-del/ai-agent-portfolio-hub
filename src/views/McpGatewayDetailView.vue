<script setup lang="ts">
import ProjectDetailTemplate from '../components/projects/ProjectDetailTemplate.vue'
import { mcpGatewayDetail } from '../data/projectDetails'
</script>

<template>
  <ProjectDetailTemplate
    :detail="mcpGatewayDetail"
    page-class="mcp-gateway-detail-page"
    kicker="CASE STUDY 05 / AGENT TOOL GATEWAY"
    dossier-stage="MCP-STYLE DEMO / GOVERNANCE"
    dossier-description="MCP Tool Gateway 是 MCP-style 工具网关 demo，支持有限 HTTP JSON-RPC adapter；不声明完整 MCP 官方协议兼容或生产级权限系统。"
    background-note="MCP Tool Gateway 对应 Agent 调用工具时的治理链路，重点展示 Tool Registry、Policy Check、Trace Evidence、Audit Log 与 Human Review。"
    architecture-title="Tool Registry → Policy → Trace → Audit"
    architecture-description="技术方案以工具调用为入口，将 Schema Check、PolicyService demo、Human Review、Trace Evidence 和 Audit Log 串成可解释闭环。"
    :architecture-stages="['TOOL ENTRY', 'POLICY + REVIEW', 'TRACE + AUDIT']"
    screenshot-intro="以下均为 MCP Tool Gateway 本地运行页面真实截图副本，来源于 mcp-tool-gateway/docs/images/large；MCP-style adapter demo 不代表完整 MCP 协议兼容。"
  />
</template>
