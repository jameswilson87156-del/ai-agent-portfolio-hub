<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { NavItem } from '../data/portfolio'

defineProps<{
  items: NavItem[]
}>()
</script>

<template>
  <header class="top-nav" aria-label="主导航">
    <RouterLink class="brand-mark" to="/" aria-label="AI Agent Engineer Portfolio Hub 首页">
      <span />
      <span />
      <span />
    </RouterLink>

    <nav class="nav-links" aria-label="页面导航">
      <RouterLink v-for="item in items" :key="item.label" :to="item.href">
        {{ item.label }}
      </RouterLink>
    </nav>

    <RouterLink class="contact-link" to="/#contact">联系我</RouterLink>
  </header>
</template>
