<script setup lang="ts">
import { RouterLink } from 'vue-router'

const sourceLinks = [
  {
    label: 'DevFlow GitHub',
    href: 'https://github.com/jameswilson87156-del/devflow-copilot',
  },
  {
    label: 'Ticket RAG GitHub',
    href: 'https://github.com/jameswilson87156-del/enterprise-ai-ticket-copilot',
  },
  {
    label: 'MCP GitHub',
    href: 'https://github.com/jameswilson87156-del/mcp-tool-gateway',
  },
]
</script>

<template>
  <footer class="site-footer" aria-label="站点页脚">
    <p>Wang Zhenlong · AI Agent Engineer Portfolio Hub</p>
    <nav aria-label="作品集页脚链接">
      <RouterLink to="/projects">Projects</RouterLink>
      <a
        v-for="link in sourceLinks"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="noreferrer"
      >
        {{ link.label }}
      </a>
    </nav>
  </footer>
</template>
