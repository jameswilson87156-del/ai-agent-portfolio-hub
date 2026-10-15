<script setup lang="ts">
import type { TrustPanelSection } from '../../data/projectDetails'

defineProps<{
  sections: TrustPanelSection[]
}>()
</script>

<template>
  <section class="detail-section detail-boundary" aria-labelledby="detail-boundary-title">
    <div class="detail-boundary__index">07</div>
    <div class="detail-boundary__content">
      <p class="detail-kicker">07 / PROJECT BOUNDARIES</p>
      <h2 id="detail-boundary-title">项目边界</h2>
      <p class="detail-boundary__lead">
        先说清楚它是什么，也同样清楚地说出它不是什么。边界不是附注，而是作品集可信度的一部分。
      </p>

      <div class="trust-panel-grid">
        <section
          v-for="section in sections"
          :key="section.title"
          :class="['trust-panel-column', `trust-panel-column--${section.tone}`]"
        >
          <header>
            <h3>{{ section.title }}</h3>
            <p>{{ section.description }}</p>
          </header>
          <ul>
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
