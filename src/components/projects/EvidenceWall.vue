<script setup lang="ts">
import type { EvidenceItem } from '../../data/projects'

defineProps<{
  items: EvidenceItem[]
}>()
</script>

<template>
  <section class="projects-section evidence-wall-section" aria-labelledby="evidence-wall-title">
    <header class="section-heading">
      <div>
        <p class="section-kicker">03 / CREDIBILITY</p>
        <h2 id="evidence-wall-title">Evidence Wall</h2>
      </div>
      <p>不使用虚构 KPI；可信度来自可运行、可阅读、可重复检查的工程材料。</p>
    </header>

    <div class="evidence-wall">
      <article v-for="item in items" :key="item.index" class="evidence-wall__item">
        <span class="evidence-wall__index">{{ item.index }}</span>
        <div>
          <h3>{{ item.label }}</h3>
          <p>{{ item.detail }}</p>
        </div>
        <div class="evidence-wall__projects" :aria-label="`${item.label} 对应项目`">
          <span
            v-for="project in item.projects"
            :key="project"
            :class="`project-code--${project.toLowerCase()}`"
          >
            {{ project }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
