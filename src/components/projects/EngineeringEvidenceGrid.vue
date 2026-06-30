<script setup lang="ts">
import type { EngineeringEvidenceGroup } from '../../data/projectDetails'

withDefaults(defineProps<{
  groups: EngineeringEvidenceGroup[]
  kicker?: string
  title?: string
  description?: string
}>(), {
  kicker: '05 / DELIVERY EVIDENCE',
  title: 'Backend & Engineering Evidence',
  description: '证据来自源项目代码、文档与最近验收记录；其中边界型能力均保持明确标注。',
})
</script>

<template>
  <section class="detail-section engineering-section" aria-labelledby="engineering-title">
    <header class="detail-section-heading">
      <div>
        <p class="detail-kicker">{{ kicker }}</p>
        <h2 id="engineering-title">{{ title }}</h2>
      </div>
      <p>{{ description }}</p>
    </header>

    <div class="engineering-groups">
      <article v-for="group in groups" :key="group.index" class="engineering-group">
        <header class="engineering-group__header">
          <span>{{ group.index }}</span>
          <div>
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
          </div>
        </header>

        <ul>
          <li v-for="item in group.items" :key="item.index" class="engineering-item">
            <span class="engineering-item__index">{{ item.index }}</span>
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.detail }}</p>
            </div>
            <span class="engineering-item__scope">{{ item.scope }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
