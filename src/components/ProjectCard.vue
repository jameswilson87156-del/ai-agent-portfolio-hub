<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectItem } from '../data/portfolio'

const props = defineProps<{
  project: ProjectItem
}>()

const visibleTags = computed(() => props.project.tags.slice(0, 3))
</script>

<template>
  <article :class="['project-card', `project-card--${project.tone}`]">
    <span class="project-index">{{ project.index }}</span>

    <div class="project-card__body">
      <h2 class="project-title">{{ project.title }}</h2>
      <p class="project-subtitle">{{ project.subtitle }}</p>

      <div class="project-detail">
        <div class="project-tags" aria-label="项目标签">
          <span v-for="tag in visibleTags" :key="tag" class="project-tag">
            {{ tag }}
          </span>
        </div>
        <p class="project-value">{{ project.value }}</p>
      </div>
    </div>

    <span class="project-arrow" aria-hidden="true">→</span>
  </article>
</template>
