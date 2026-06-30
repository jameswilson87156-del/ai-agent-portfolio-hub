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
        <p class="detail-kicker">02 / SYSTEM MAP</p>
        <h2 id="architecture-title">System Architecture</h2>
      </div>
      <p>从 Agent 意图进入，到策略、调用、Trace、Audit 与 Review，核心价值在链路而不是单个模块。</p>
    </header>

    <div class="architecture-canvas" role="img" aria-label="MCP Tool Gateway 分层架构链路">
      <div class="architecture-legend" aria-hidden="true">
        <span>ENTRY &amp; CONTEXT</span>
        <span>GOVERNANCE CORE</span>
        <span>EVIDENCE &amp; REVIEW</span>
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
