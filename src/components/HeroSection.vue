<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { contactLinks, heroSignals, profile } from '../data/portfolio'

const internalLinks = computed(() =>
  contactLinks.filter((item) => item.href.startsWith('/') && !item.download),
)

const externalLinks = computed(() =>
  contactLinks.filter((item) => !item.href.startsWith('/') || item.download),
)
</script>

<template>
  <section class="mountain-hero" id="capabilities" aria-labelledby="page-title">
    <div class="mountain-hero__copy">
      <p class="hero-kicker">TEST DEVELOPMENT / ENGINEERING EVIDENCE</p>

      <h1 class="hero-title" id="page-title">
        {{ profile.title }}
      </h1>

      <p class="hero-subtitle">{{ profile.subtitle }}</p>
      <p class="identity-line">{{ profile.name }}｜{{ profile.role }}</p>
      <p class="hero-description">{{ profile.summary }}</p>

      <div class="direction-chips" aria-label="主投方向">
        <span v-for="direction in profile.directions" :key="direction">
          {{ direction }}
        </span>
      </div>

      <div class="hero-actions" aria-label="作品集主要操作">
        <RouterLink
          v-for="link in internalLinks"
          :key="link.label"
          :class="['hero-button', link.kind === 'primary' && 'hero-button--primary']"
          :to="link.href"
        >
          {{ link.label }}
          <span class="button-icon" aria-hidden="true">→</span>
        </RouterLink>

        <a
          v-for="link in externalLinks"
          :key="link.label"
          :class="['hero-button', link.kind === 'primary' && 'hero-button--primary']"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noreferrer' : undefined"
          :download="link.download ? link.downloadName : undefined"
        >
          {{ link.label }}
          <span class="button-icon" aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div class="mountain-hero__visual" aria-label="大山 Hero 视觉资产，不是项目运行截图">
      <img
        src="/images/hero/ai-mountain-hero.png"
        alt="深色山峰作品集视觉，橙色与青色路径象征测试执行和结果追踪；不是项目截图"
      />
      <span class="trace-line trace-line--one" aria-hidden="true" />
      <span class="trace-line trace-line--two" aria-hidden="true" />
      <span
        v-for="signal in heroSignals"
        :key="signal.label"
        :class="['hero-signal', `hero-signal--${signal.tone}`]"
        :style="{ left: signal.x, top: signal.y }"
      >
        <strong>{{ signal.label }}</strong>
        <small>{{ signal.caption }}</small>
      </span>
    </div>
  </section>
</template>
