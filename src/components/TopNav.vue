<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import type { NavItem } from '../data/portfolio'

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
    <RouterLink class="brand-mark" to="/" aria-label="AI Agent Engineer Portfolio Hub 首页">
      <span />
      <span />
      <span />
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

    <RouterLink class="contact-link" :class="{ 'is-active': route.path.startsWith('/projects') }" to="/projects">
      项目证据
    </RouterLink>
  </header>
</template>
