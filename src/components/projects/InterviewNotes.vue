<script setup lang="ts">
import type { InterviewQA } from '../../data/projectDetails'

defineProps<{
  items: InterviewQA[]
}>()
</script>

<template>
  <section class="detail-section interview-section" aria-labelledby="interview-title">
    <header class="detail-section-heading">
      <div>
        <p class="detail-kicker">07 / INTERVIEW NARRATIVE</p>
        <h2 id="interview-title">How I explain it in interviews</h2>
      </div>
      <p>用真实实现和明确边界讲清楚设计判断，不把作品集工程包装成生产系统。</p>
    </header>

    <div class="interview-qa-grid">
      <article v-for="item in items" :key="item.index" class="interview-qa-card">
        <span>{{ item.index }}</span>
        <h3><b>Q</b>{{ item.question }}</h3>
        <p><b>A</b>{{ item.answer }}</p>
      </article>
    </div>
  </section>
</template>
