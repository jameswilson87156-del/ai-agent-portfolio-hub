<script setup lang="ts">
import type { NavItem } from '../data/portfolio'

defineProps<{
  items: NavItem[]
}>()
</script>

<template>
  <header class="top-nav" aria-label="主导航">
    <a class="brand-mark" href="#" aria-label="AI Agent Engineer Portfolio Hub">
      <span />
      <span />
      <span />
    </a>

    <nav class="nav-links" aria-label="页面导航">
      <a v-for="item in items" :key="item.label" :href="item.href">
        {{ item.label }}
      </a>
    </nav>

    <a class="contact-link" href="#contact">联系我</a>
  </header>
</template>
