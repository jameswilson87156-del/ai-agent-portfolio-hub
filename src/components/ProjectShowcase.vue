<script setup lang="ts">
import type { ProjectItem } from '../data/portfolio'
import ProjectCard from './ProjectCard.vue'

defineProps<{
  projects: ProjectItem[]
}>()
</script>

<template>
  <section class="project-showcase" id="projects" aria-labelledby="home-projects-title">
    <div class="section-heading">
      <p class="section-kicker">CORE PROJECTS</p>
      <div>
        <h2 id="home-projects-title">五个 AI 应用开发项目，一眼看定位，点进去看证据。</h2>
        <p>
          每个项目都保留 GitHub、真实截图、关键数据和能力边界，适合 HR 快速筛选，也适合技术面试官继续追问。
        </p>
      </div>
    </div>

    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>
