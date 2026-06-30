<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <section class="detail-section detail-boundary" aria-labelledby="detail-boundary-title">
    <div class="detail-boundary__index">06</div>
    <div class="detail-boundary__content">
      <p class="detail-kicker">PROJECT BOUNDARIES</p>
      <h2 id="detail-boundary-title">Project Boundaries</h2>
      <p class="detail-boundary__lead">
        这页展示的是一个可运行、可测试、可截图复核的 portfolio demo。边界不是附注，而是工程结论的一部分。
      </p>
      <ul>
        <li v-for="(item, index) in items" :key="item">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
