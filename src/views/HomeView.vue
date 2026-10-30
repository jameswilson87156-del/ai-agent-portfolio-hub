<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import ProjectShowcase from '../components/ProjectShowcase.vue'
import SiteFooter from '../components/SiteFooter.vue'
import TopNav from '../components/TopNav.vue'
import { matchHighlights, navItems, portfolioBoundary, projects } from '../data/portfolio'

const primaryProjects = projects.slice(0, 2)
</script>

<template>
  <div class="portfolio-home portfolio-home--evidence">
    <TopNav :items="navItems" />

    <main class="home-main">
      <HeroSection />

      <ProjectShowcase :projects="primaryProjects" />

      <section class="home-methods" id="fit" aria-labelledby="home-methods-title">
        <div class="home-methods__heading">
          <p class="home-section-label">TESTING APPROACH / 03</p>
          <div>
            <h2 id="home-methods-title">从接口到回归，我主要验证四件事。</h2>
            <p>每个方向都落在可重复的脚本、运行记录或失败现场里。</p>
          </div>
        </div>

        <ol class="home-methods__list">
          <li v-for="(item, index) in matchHighlights" :key="item.title">
            <span class="home-methods__number">0{{ index + 1 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </li>
        </ol>
      </section>

      <section class="home-boundary" aria-labelledby="home-boundary-title">
        <div>
          <p class="home-section-label">EVIDENCE BOUNDARY / 04</p>
          <h2 id="home-boundary-title">{{ portfolioBoundary.title }}</h2>
          <p>{{ portfolioBoundary.summary }}</p>
        </div>
        <ul>
          <li v-for="item in portfolioBoundary.items" :key="item">{{ item }}</li>
        </ul>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.portfolio-home--evidence {
  --home-paper: #f4f2eb;
  --home-ink: #20251f;
  --home-muted: #646960;
  --home-rule: #d6d5cd;
  --home-accent: #b94e2b;
  min-height: 100dvh;
  color: var(--home-ink);
  background: var(--home-paper);
}

.portfolio-home--evidence :deep(.home-backdrop) {
  display: none;
}

.portfolio-home--evidence :deep(.top-nav) {
  position: relative;
  width: min(1180px, calc(100vw - 64px));
  height: 78px;
  background: var(--home-paper);
  box-shadow: none;
  border-bottom: 1px solid var(--home-rule);
  color: var(--home-ink);
  backdrop-filter: none;
}

.portfolio-home--evidence :deep(.top-nav::before) {
  display: none;
}

.portfolio-home--evidence :deep(.brand-mark) {
  color: var(--home-ink);
}

.portfolio-home--evidence :deep(.brand-mark span) {
  border-radius: 50%;
  color: var(--home-paper);
  background: var(--home-ink);
}

.portfolio-home--evidence :deep(.nav-links a) {
  color: var(--home-muted);
}

.portfolio-home--evidence :deep(.nav-links a:hover),
.portfolio-home--evidence :deep(.nav-links a:focus-visible),
.portfolio-home--evidence :deep(.nav-links a.is-active) {
  color: var(--home-ink);
}

.portfolio-home--evidence :deep(.contact-link) {
  color: var(--home-accent);
}

.portfolio-home--evidence :deep(.home-main) {
  width: min(1180px, calc(100vw - 64px));
  padding: clamp(36px, 5vw, 64px) 0 96px;
}

.home-methods {
  margin-top: clamp(76px, 10vw, 140px);
}

.home-methods__heading {
  display: grid;
  grid-template-columns: minmax(170px, 0.35fr) minmax(0, 1fr);
  gap: 48px;
  margin-bottom: 30px;
}

.home-section-label {
  margin: 7px 0 0;
  color: var(--home-accent);
  font: 700 0.73rem/1.4 var(--font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-methods h2,
.home-boundary h2 {
  max-width: 760px;
  margin: 0;
  color: var(--home-ink);
  font-size: clamp(1.85rem, 3.4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.13;
  letter-spacing: -0.045em;
}

.home-methods__heading > div > p,
.home-boundary > div > p:last-child {
  max-width: 690px;
  margin: 14px 0 0;
  color: var(--home-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.home-methods__list {
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--home-rule);
  list-style: none;
}

.home-methods__list li {
  display: grid;
  grid-template-columns: 58px minmax(180px, 0.65fr) minmax(0, 1.35fr);
  gap: 22px;
  align-items: baseline;
  padding: 19px 0;
  border-bottom: 1px solid var(--home-rule);
}

.home-methods__number {
  color: var(--home-accent);
  font: 600 0.78rem/1.5 var(--font-mono);
}

.home-methods__list h3 {
  margin: 0;
  color: var(--home-ink);
  font-size: 1.02rem;
  font-weight: 700;
}

.home-methods__list p {
  margin: 0;
  color: var(--home-muted);
  line-height: 1.7;
}

.home-boundary {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(30px, 7vw, 90px);
  margin-top: clamp(76px, 10vw, 140px);
  padding: clamp(24px, 4vw, 44px) 0;
  border-top: 2px solid var(--home-ink);
  border-bottom: 1px solid var(--home-rule);
  background: transparent;
  box-shadow: none;
}

.home-boundary .home-section-label {
  margin-bottom: 16px;
}

.home-boundary ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-boundary li {
  padding: 0 0 14px 18px;
  color: var(--home-muted);
  line-height: 1.7;
}

.home-boundary li::before {
  width: 5px;
  height: 5px;
  margin-left: -17px;
  background: var(--home-accent);
}

.portfolio-home--evidence :deep(.site-footer) {
  width: min(1180px, calc(100vw - 64px));
  margin: 0 auto;
  border-top: 1px solid var(--home-rule);
  color: var(--home-muted);
}

@media (max-width: 760px) {
  .portfolio-home--evidence :deep(.top-nav),
  .portfolio-home--evidence :deep(.home-main),
  .portfolio-home--evidence :deep(.site-footer) {
    width: min(100% - 36px, 600px);
  }

  .portfolio-home--evidence :deep(.top-nav) {
    height: 68px;
  }

  .portfolio-home--evidence :deep(.contact-link) {
    display: none;
  }

  .home-methods__heading,
  .home-boundary {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .home-methods__list li {
    grid-template-columns: 38px 1fr;
    gap: 8px 14px;
  }

  .home-methods__list p {
    grid-column: 2;
  }
}

@media (max-width: 430px) {
  .portfolio-home--evidence :deep(.home-main) {
    padding-top: 26px;
  }
}
</style>
