<script setup lang="ts">
import { projectLabels, type EvidenceGroup } from '../../data/projects'

defineProps<{
  groups: EvidenceGroup[]
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

    <div class="evidence-groups">
      <article v-for="group in groups" :key="group.index" class="evidence-group">
        <header class="evidence-group__header">
          <span>{{ group.index }}</span>
          <div>
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
          </div>
        </header>

        <ul class="evidence-group__list">
          <li v-for="item in group.items" :key="item.index" class="evidence-wall__item">
            <span class="evidence-wall__index">{{ item.index }}</span>
            <div>
              <h4>{{ item.label }}</h4>
              <p>{{ item.detail }}</p>
            </div>
            <div class="evidence-wall__projects" :aria-label="`${item.label} 对应项目`">
              <span
                v-for="project in item.projects"
                :key="project"
                :class="`project-code--${project.toLowerCase()}`"
                :title="projectLabels[project]"
              >
                {{ project }}
              </span>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
