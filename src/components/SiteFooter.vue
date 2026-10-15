<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { profile, projects } from '../data/portfolio'
</script>

<template>
  <footer class="site-footer" id="contact" aria-label="站点页脚">
    <div>
      <p>王震龙 · AI 应用开发作品集</p>
      <small>Java + Vue + AI Workflow / RAG / PromptOps / Agent Tooling</small>
    </div>

    <nav aria-label="作品集页脚链接">
      <RouterLink to="/projects">核心项目</RouterLink>
      <a :href="profile.github" target="_blank" rel="noreferrer">GitHub Profile</a>
      <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      <a :href="profile.resume" download="wangzhenlong-ai-application-resume.pdf">下载简历</a>
      <a :href="profile.portfolioPdf" download="wangzhenlong-ai-project-portfolio.pdf">
        下载项目作品集
      </a>
      <a
        v-for="project in projects"
        :key="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noreferrer"
      >
        {{ project.title }}
      </a>
    </nav>
  </footer>
</template>
