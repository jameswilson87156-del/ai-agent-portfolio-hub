<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  subtitle: string
  positioning: string
  tags: string[]
  githubUrl: string
}>()
</script>

<template>
  <header class="detail-hero" aria-labelledby="detail-title">
    <div class="detail-hero__copy">
      <p class="detail-kicker">CASE STUDY 03 / JAVA BACKEND + AGENT GOVERNANCE</p>
      <h1 id="detail-title">{{ title }}</h1>
      <p class="detail-hero__subtitle">{{ subtitle }}</p>
      <p class="detail-hero__positioning">{{ positioning }}</p>

      <div class="detail-hero__actions" aria-label="项目操作">
        <RouterLink class="detail-button detail-button--primary" to="/projects">
          <span aria-hidden="true">←</span>
          返回 Projects
        </RouterLink>
        <a class="detail-button" :href="githubUrl" target="_blank" rel="noreferrer">
          查看 GitHub
          <span aria-hidden="true">↗</span>
        </a>
        <a class="detail-button detail-button--quiet" href="#evidence">
          查看截图证据
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>

    <aside class="detail-hero__dossier" aria-label="项目技术与边界摘要">
      <div class="detail-hero__signal">
        <span>PORTFOLIO DOSSIER</span>
        <strong>P3A / LOCAL DEMO</strong>
      </div>
      <p>
        以可运行代码、测试记录、浏览器截图和明确边界说明构成证据。页面不代表线上生产系统。
      </p>
      <ul class="detail-tag-list" aria-label="技术栈">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
    </aside>
  </header>
</template>
