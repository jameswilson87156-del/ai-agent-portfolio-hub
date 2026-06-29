<script setup lang="ts">
import type { TechTag } from '../data/portfolio'

defineProps<{
  tags: TechTag[]
}>()
</script>

<template>
  <div class="floating-tags" aria-label="技术标签" id="stack">
    <span
      v-for="(tag, index) in tags"
      :key="tag.label"
      :class="['tech-tag', `tech-tag--${tag.tone}`]"
      :style="{
        '--x': `${tag.x}%`,
        '--y': `${tag.y}%`,
        '--line': `${tag.line}px`,
        '--tag-delay': `${-index * 0.55}s`,
      }"
    >
      {{ tag.label }}
    </span>
  </div>
</template>
