<script setup lang="ts">
import { computed } from 'vue'
import type { ArchitectureNode } from '../../data/projectDetails'

const props = withDefaults(defineProps<{
  nodes: ArchitectureNode[]
  kicker?: string
  title?: string
  description?: string
  ariaLabel?: string
  stages?: string[]
}>(), {
  kicker: '02 / SYSTEM ARCHITECTURE',
  title: 'Agent Governance Flow',
  description:
    '一条从 Agent Request 到 Human Review 的治理轨道，清楚表达入口、策略、执行与证据如何衔接。',
  ariaLabel: 'MCP Tool Gateway Agent Governance Flow',
  stages: () => ['AGENT ENTRY', 'GOVERNANCE CORE', 'EVIDENCE CHAIN'],
})

const architectureStyle = computed(() => ({
  '--architecture-columns': String(props.nodes.length),
}))
</script>

<template>
  <section class="detail-section architecture-section" aria-labelledby="architecture-title">
    <header class="detail-section-heading">
      <div>
        <p class="detail-kicker">{{ kicker }}</p>
        <h2 id="architecture-title">{{ title }}</h2>
      </div>
      <p>{{ description }}</p>
    </header>

    <div class="architecture-canvas" role="img" :aria-label="ariaLabel">
      <div class="architecture-canvas__header" aria-hidden="true">
        <span v-for="stage in stages" :key="stage">{{ stage }}</span>
      </div>
      <ol class="architecture-track" :style="architectureStyle">
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
