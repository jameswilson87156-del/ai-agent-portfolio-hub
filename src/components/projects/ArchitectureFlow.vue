<script setup lang="ts">
import type { ArchitectureNode } from '../../data/projectDetails'

defineProps<{
  nodes: ArchitectureNode[]
}>()
</script>

<template>
  <section class="detail-section architecture-section" aria-labelledby="architecture-title">
    <header class="detail-section-heading">
      <div>
        <p class="detail-kicker">02 / SYSTEM ARCHITECTURE</p>
        <h2 id="architecture-title">Agent Governance Flow</h2>
      </div>
      <p>一条从 Agent Request 到 Human Review 的治理轨道，清楚表达入口、策略、执行与证据如何衔接。</p>
    </header>

    <div class="architecture-canvas" role="img" aria-label="MCP Tool Gateway Agent Governance Flow">
      <div class="architecture-canvas__header" aria-hidden="true">
        <span>AGENT ENTRY</span>
        <span>GOVERNANCE CORE</span>
        <span>EVIDENCE CHAIN</span>
      </div>
      <ol class="architecture-track">
        <li
          v-for="node in nodes"
          :key="node.index"
          :class="`architecture-node architecture-node--${node.layer}`"
        >
          <span>{{ node.index }}</span>
          <h3>{{ node.title }}</h3>
          <p>{{ node.detail }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
