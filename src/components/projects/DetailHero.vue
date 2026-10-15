<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  subtitle: string
  positioning: string
  tags: string[]
  githubUrl?: string
  kicker?: string
  dossierStage?: string
  dossierDescription?: string
}>()
</script>

<template>
  <header class="detail-hero" aria-labelledby="detail-title">
    <div class="detail-hero__copy">
      <p class="detail-kicker">
        {{ kicker ?? 'CASE STUDY / AI APPLICATION ENGINEERING' }}
      </p>
      <h1 id="detail-title">{{ title }}</h1>
      <p class="detail-hero__subtitle">{{ subtitle }}</p>
      <p class="detail-hero__positioning">{{ positioning }}</p>

      <div class="detail-hero__actions" aria-label="项目操作">
        <RouterLink class="detail-button detail-button--primary" to="/">
          返回首页
          <span aria-hidden="true">→</span>
        </RouterLink>
        <RouterLink class="detail-button" to="/projects">
          返回项目列表
          <span aria-hidden="true">→</span>
        </RouterLink>
        <a v-if="githubUrl" class="detail-button" :href="githubUrl" target="_blank" rel="noreferrer">
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
        <a class="detail-button detail-button--quiet" href="#evidence">
          核心截图
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>

    <aside class="detail-hero__dossier" aria-label="项目技术与边界摘要">
      <div class="detail-hero__signal">
        <span>PORTFOLIO CASE STUDY</span>
        <strong>{{ dossierStage ?? 'LOCAL DEMO / EVIDENCE-BASED' }}</strong>
      </div>
      <p>
        {{
          dossierDescription ??
          '以可运行代码、测试记录、浏览器截图和明确边界说明构成证据。页面不代表线上生产系统。'
        }}
      </p>
      <ul class="detail-tag-list" aria-label="技术栈">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
    </aside>
  </header>
</template>
