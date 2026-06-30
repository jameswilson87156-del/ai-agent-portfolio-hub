<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ProjectItem } from '../data/portfolio'

const props = defineProps<{
  project: ProjectItem
}>()

const visibleTags = computed(() => props.project.tags.slice(0, 2))
</script>

<template>
  <RouterLink
    :to="project.href"
    :class="['project-card', `project-card--${project.tone}`]"
    :aria-label="`查看 ${project.title} 项目详情`"
  >
    <span class="project-index">{{ project.index }}</span>

    <div class="project-card__body">
      <h2 class="project-title">{{ project.title }}</h2>
      <p class="project-subtitle">{{ project.subtitle }}</p>

      <div class="project-detail">
        <p class="project-value">{{ project.value }}</p>
        <div class="project-tags" aria-label="项目标签">
          <span v-for="tag in visibleTags" :key="tag" class="project-tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <span class="project-arrow" aria-hidden="true">→</span>
  </RouterLink>
</template>
