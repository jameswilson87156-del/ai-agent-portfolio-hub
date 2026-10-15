<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import ProjectShowcase from '../components/ProjectShowcase.vue'
import SiteFooter from '../components/SiteFooter.vue'
import TopNav from '../components/TopNav.vue'
import { matchHighlights, navItems, portfolioBoundary, projects } from '../data/portfolio'
</script>

<template>
  <div class="portfolio-home">
    <div class="home-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="home-main">
      <HeroSection />

      <section class="fit-section" id="fit" aria-labelledby="fit-title">
        <div class="section-heading">
          <p class="section-kicker">WHY IT MATCHES</p>
          <div>
            <h2 id="fit-title">主投 AI 应用开发，不是纯后端，也不是算法包装。</h2>
            <p>
              作品集重点是把 Java 后端、Vue 前端、AI Workflow、RAG、PromptOps、Trace 与 Human Review
              做成能运行、能截图、能解释的工程项目。
            </p>
          </div>
        </div>

        <div class="fit-grid">
          <article v-for="item in matchHighlights" :key="item.title" class="fit-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
            <div class="fit-tags">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </section>

      <ProjectShowcase :projects="projects" />

      <section class="home-boundary" aria-labelledby="home-boundary-title">
        <p class="section-kicker">BOUNDARY</p>
        <h2 id="home-boundary-title">{{ portfolioBoundary.title }}</h2>
        <p>{{ portfolioBoundary.summary }}</p>
        <ul>
          <li v-for="item in portfolioBoundary.items" :key="item">{{ item }}</li>
        </ul>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
