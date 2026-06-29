<script setup lang="ts">
import type { ProjectItem } from '../data/portfolio'
import ProjectCard from './ProjectCard.vue'

defineProps<{
  projects: ProjectItem[]
}>()
</script>

<template>
  <section class="project-showcase" id="projects" aria-label="核心项目入口">
    <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
  </section>
</template>
