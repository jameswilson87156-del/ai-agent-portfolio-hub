<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import ProjectShowcase from '../components/ProjectShowcase.vue'
import SiteFooter from '../components/SiteFooter.vue'
import TopNav from '../components/TopNav.vue'
import { matchHighlights, navItems, portfolioBoundary, projects } from '../data/portfolio'

const primaryProjects = projects.slice(0, 2)
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
            <h2 id="fit-title">面向测试开发岗位，给出可以点开复查的工程证据。</h2>
            <p>
              两个主项目分别验证真实开源协作系统和本地 AI Agent / 业务 API。其余项目保留为编码与系统实现背景，不作为主投方向。
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

      <ProjectShowcase :projects="primaryProjects" />

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
