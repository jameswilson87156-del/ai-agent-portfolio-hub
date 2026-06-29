<script setup lang="ts">
import type { TimelineStep } from '../data/portfolio'

defineProps<{
  steps: TimelineStep[]
}>()
</script>

<template>
  <article class="trace-panel" id="evidence" aria-label="Trace Timeline 面板">
    <div class="trace-panel__header">
      <span>Trace Timeline</span>
      <span class="trace-status">已验证</span>
    </div>

    <div class="trace-steps">
      <div v-for="step in steps" :key="step.label" class="trace-step">
        <span class="trace-icon" aria-hidden="true">{{ step.icon }}</span>
        <span class="trace-label">{{ step.label }}</span>
        <span class="trace-time">{{ step.time }}</span>
      </div>
    </div>
  </article>
</template>
