<script setup lang="ts">
import type { ProjectSummaryItem } from '../../data/projectDetails'

defineProps<{
  items: ProjectSummaryItem[]
}>()
</script>

<template>
  <section class="project-summary-rail" aria-label="项目关键数据">
    <div
      v-for="item in items"
      :key="item.label"
      :class="['project-summary-rail__item', `project-summary-rail__item--${item.tone}`]"
    >
      <span>{{ item.label }}</span>
      <strong>{{ item.value }}</strong>
    </div>
  </section>
</template>
