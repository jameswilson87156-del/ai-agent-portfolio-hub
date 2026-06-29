<script setup lang="ts">
import type { ProjectItem } from '../data/portfolio'

defineProps<{
  project: ProjectItem
}>()
</script>

<template>
  <article :class="['project-card', `project-card--${project.tone}`]">
    <span class="project-index">{{ project.index }}</span>
    <span class="project-thumb" aria-hidden="true" />

    <div>
      <h2 class="project-title">{{ project.title }}</h2>
      <p class="project-subtitle">{{ project.subtitle }}</p>
    </div>

    <div class="project-tags" aria-label="项目标签">
      <span v-for="tag in project.tags" :key="tag" class="project-tag">
        {{ tag }}
      </span>
    </div>

    <span class="project-arrow" aria-hidden="true">→</span>
  </article>
</template>
