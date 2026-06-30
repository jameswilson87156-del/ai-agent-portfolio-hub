<script setup lang="ts">
import { projectLabels, type CapabilityItem } from '../../data/projects'

defineProps<{
  items: CapabilityItem[]
}>()
</script>

<template>
  <section class="projects-section capability-section" aria-labelledby="capability-title">
    <header class="section-heading">
      <div>
        <p class="section-kicker">02 / SKILL COVERAGE</p>
        <h2 id="capability-title">Capability Matrix</h2>
      </div>
      <p>能力不以进度条表达，而以项目中的实际落点互相映射。</p>
    </header>

    <div class="capability-grid">
      <article v-for="item in items" :key="item.label" class="capability-item">
        <h3>{{ item.label }}</h3>
        <div class="capability-projects" :aria-label="`${item.label} 对应项目`">
          <span
            v-for="project in item.projects"
            :key="project"
            :class="`project-code--${project.toLowerCase()}`"
          >
            <b>{{ project }}</b>
            {{ projectLabels[project] }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
