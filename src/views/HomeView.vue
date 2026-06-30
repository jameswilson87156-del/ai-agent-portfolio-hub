<script setup lang="ts">
import { ref } from 'vue'
import CinematicBackground from '../components/CinematicBackground.vue'
import FloatingTechTags from '../components/FloatingTechTags.vue'
import HeroSection from '../components/HeroSection.vue'
import JsonRpcWindow from '../components/JsonRpcWindow.vue'
import ProjectShowcase from '../components/ProjectShowcase.vue'
import SiteFooter from '../components/SiteFooter.vue'
import TopNav from '../components/TopNav.vue'
import TraceTimelinePanel from '../components/TraceTimelinePanel.vue'
import { useParallax } from '../composables/useParallax'
import {
  jsonRpcPayload,
  navItems,
  projects,
  techTags,
  timelineSteps,
} from '../data/portfolio'

const homeRef = ref<HTMLElement | null>(null)

useParallax(homeRef)
</script>

<template>
  <div ref="homeRef" class="portfolio-home">
    <CinematicBackground />
    <TopNav :items="navItems" />

    <main class="home-main" aria-labelledby="page-title">
      <HeroSection />

      <section id="evidence" class="evidence-stage" aria-label="AI Agent 工程证据链展示">
        <FloatingTechTags :tags="techTags" />

        <div class="stage-stack">
          <JsonRpcWindow :payload="jsonRpcPayload" />
          <TraceTimelinePanel :steps="timelineSteps" />
        </div>
      </section>

      <ProjectShowcase :projects="projects" />
    </main>

    <SiteFooter />
  </div>
</template>
