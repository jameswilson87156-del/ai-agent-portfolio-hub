<script setup lang="ts">
defineProps<{
  notes: string[]
}>()
</script>

<template>
  <section class="detail-section interview-section" aria-labelledby="interview-title">
    <header class="detail-section-heading">
      <div>
        <p class="detail-kicker">07 / INTERVIEW NARRATIVE</p>
        <h2 id="interview-title">How I explain it in interviews</h2>
      </div>
      <p>用真实实现和明确边界讲清楚设计判断，不把 demo 包装成生产系统。</p>
    </header>

    <ol class="interview-notes">
      <li v-for="(note, index) in notes" :key="note">
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
        <p>{{ note }}</p>
      </li>
    </ol>
  </section>
</template>
