<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
        <h2 id="home-projects-title">两个测试开发主项目，先看目标、再看运行证据。</h2>
        <p>
          一个测试真实开源系统，一个验证 Agent 行为与本地业务 API；测试数、失败数和负载边界均对应源仓库报告。
        </p>
      </div>
    </div>

    <div class="project-showcase__grid">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>

    <RouterLink class="project-showcase__archive-link" to="/projects">
      查看完整项目档案与工程背景
      <span aria-hidden="true">→</span>
    </RouterLink>
  </section>
</template>
