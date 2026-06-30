<script setup lang="ts">
import type { ScreenshotEvidence } from '../../data/projectDetails'

withDefaults(defineProps<{
  items: ScreenshotEvidence[]
  intro?: string
}>(), {
  intro: '以下均为本地 MCP Tool Gateway 可运行页面的浏览器截图副本，不是设计参考图或生产环境截图。',
})
</script>

<template>
  <section id="evidence" class="detail-section screenshot-section" aria-labelledby="evidence-title">
    <header class="detail-section-heading">
      <div>
        <p class="detail-kicker">04 / RUNTIME PROOF</p>
        <h2 id="evidence-title">Real Browser Evidence</h2>
      </div>
      <p>{{ intro }}</p>
    </header>

    <div class="screenshot-gallery">
      <figure
        v-for="item in items"
        :key="item.index"
        :class="['screenshot-item', { 'screenshot-item--featured': item.featured }]"
      >
        <div class="screenshot-item__frame">
          <div class="screenshot-item__chrome" aria-hidden="true">
            <span class="screenshot-item__lights"><i /><i /><i /></span>
            <span>LOCAL BROWSER EVIDENCE / {{ item.title }}</span>
            <small>READ-ONLY COPY</small>
          </div>
          <div class="screenshot-item__viewport">
            <img :src="item.src" :alt="item.alt" loading="eager" decoding="async" />
          </div>
        </div>
        <figcaption>
          <span>{{ item.index }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <small>{{ item.source }}</small>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
