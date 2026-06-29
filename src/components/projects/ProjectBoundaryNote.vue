<script setup lang="ts">
defineProps<{
  summary: string
  focus: string
  commitments: string[]
}>()
</script>

<template>
  <section class="projects-section boundary-section" aria-labelledby="boundary-title">
    <div class="boundary-section__index">04</div>

    <div class="boundary-section__content">
      <p class="section-kicker">PROJECT BOUNDARIES</p>
      <h2 id="boundary-title">诚实描述能力边界，本身也是工程能力。</h2>
      <p class="boundary-section__summary">{{ summary }}</p>
      <p class="boundary-section__focus">{{ focus }}</p>

      <ul>
        <li v-for="item in commitments" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>
