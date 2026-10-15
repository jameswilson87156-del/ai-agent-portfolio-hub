<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ProjectItem } from '../data/portfolio'

const props = defineProps<{
  project: ProjectItem
}>()

const visibleStack = computed(() => props.project.stack.slice(0, 5))
const visibleMetrics = computed(() => props.project.metrics.slice(0, 4))
</script>

<template>
  <article :class="['project-card', `project-card--${project.tone}`]">
    <header class="project-card__header">
      <span class="project-index">{{ project.index }}</span>
      <div>
        <p class="project-subtitle">{{ project.subtitle }}</p>
        <h3 class="project-title">{{ project.title }}</h3>
      </div>
    </header>

    <div class="project-card__body">
      <section class="project-card__section">
        <p class="project-label">项目定位</p>
        <p class="project-value">{{ project.position }}</p>
      </section>

      <section class="project-card__section">
        <p class="project-label">解决的问题</p>
        <p class="project-value">{{ project.problem }}</p>
      </section>

      <section class="project-card__section">
        <p class="project-label">关键数据</p>
        <ul class="project-metrics">
          <li v-for="metric in visibleMetrics" :key="metric">{{ metric }}</li>
        </ul>
      </section>

      <section class="project-card__section">
        <p class="project-label">技术栈</p>
        <div class="project-tags" aria-label="技术栈">
          <span v-for="item in visibleStack" :key="item" class="project-tag">
            {{ item }}
          </span>
        </div>
      </section>

      <p class="project-boundary">
        <span>边界说明</span>
        {{ project.boundary }}
      </p>
    </div>

    <footer class="project-card__actions">
      <a :href="project.githubUrl" target="_blank" rel="noreferrer">
        GitHub
        <span aria-hidden="true">→</span>
      </a>
      <RouterLink :to="project.href">
        Case Study
        <span aria-hidden="true">→</span>
      </RouterLink>
    </footer>
  </article>
</template>
