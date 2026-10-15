<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import type { NavItem } from '../data/portfolio'
import { profile } from '../data/portfolio'

defineProps<{
  items: NavItem[]
}>()

const route = useRoute()

const isNavActive = (href: string) => {
  if (href === '/projects') {
    return route.path.startsWith('/projects')
  }

  if (href.startsWith('/#')) {
    return route.path === '/' && route.hash === href.slice(1)
  }

  return route.path === href
}
</script>

<template>
  <header class="top-nav" aria-label="主导航">
    <RouterLink class="brand-mark" to="/" aria-label="AI 应用开发作品集首页">
      <span>WZL</span>
      <strong>AI Portfolio</strong>
    </RouterLink>

    <nav class="nav-links" aria-label="页面导航">
      <RouterLink v-for="item in items" :key="item.label" :to="item.href" custom v-slot="{ href, navigate }">
        <a
          :href="href"
          :class="{ 'is-active': isNavActive(item.href) }"
          :aria-current="isNavActive(item.href) ? 'page' : undefined"
          @click="navigate"
        >
          {{ item.label }}
        </a>
      </RouterLink>
    </nav>

    <a class="contact-link" :href="`mailto:${profile.email}`">
      {{ profile.email }}
    </a>
  </header>
</template>
