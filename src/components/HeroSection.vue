<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { contactLinks, profile } from '../data/portfolio'

const internalLinks = computed(() => contactLinks.filter((item) => item.href.startsWith('/') && !item.download))
const externalLinks = computed(() => contactLinks.filter((item) => !item.href.startsWith('/') || item.download))
</script>

<template>
  <section class="home-hero" data-testid="portfolio-evidence-hero" aria-labelledby="page-title">
    <div class="home-hero__copy">
      <p class="home-hero__eyebrow"><span>WZL / 01</span> 测试开发作品集</p>
      <h1 id="page-title">把每次测试，<br /><em>变成可复查的证据。</em></h1>
      <p class="home-hero__summary">
        用自动化验证真实开源软件和可观察的 Agent 工作流：覆盖接口权限、浏览器操作、状态持久化、失败定位与回归报告。
      </p>
      <p class="home-hero__identity">{{ profile.name }} <span>·</span> {{ profile.role }}</p>

      <div class="home-hero__focus" aria-label="主要测试方向">
        <span>API / 权限</span>
        <span>浏览器自动化</span>
        <span>Agent 评测</span>
        <span>CI 与负载验证</span>
      </div>

      <div class="home-hero__actions" aria-label="作品集主要操作">
        <RouterLink v-for="link in internalLinks" :key="link.label" :class="['home-action', link.kind === 'primary' && 'home-action--primary']" :to="link.href">
          {{ link.label }} <span aria-hidden="true">↗</span>
        </RouterLink>
        <a v-for="link in externalLinks" :key="link.label" :class="['home-action', link.kind === 'primary' && 'home-action--primary']" :href="link.href" :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noreferrer' : undefined" :download="link.download ? link.downloadName : undefined">
          {{ link.label }} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <figure class="home-hero__evidence">
      <div class="home-hero__evidence-head">
        <span>实测界面 / PROMPTOPS STUDIO</span>
        <span>LOCAL RUN · MOCK MODE</span>
      </div>
      <img
        src="/images/projects/promptops/eval-overview-20261028.png"
        alt="PromptOps Studio 本地 Agent 评测总览界面，包含已保存运行、逐条结果和 Mock 模式说明"
        fetchpriority="high"
      />
      <figcaption>
        <span>本地评测总览</span>
        <span>2026-10-28 历史界面快照 · 26-case Mock，不是模型 Benchmark</span>
      </figcaption>
    </figure>
  </section>
</template>

<style scoped>
.home-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  gap: clamp(34px, 5.5vw, 78px);
  align-items: center;
  padding: clamp(24px, 4vw, 48px) 0 clamp(54px, 8vw, 104px);
  border-bottom: 1px solid #d6d5cd;
}

.home-hero__copy {
  min-width: 0;
}

.home-hero__eyebrow {
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 0 0 23px;
  color: #646960;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.home-hero__eyebrow span {
  color: #b94e2b;
  font-family: var(--font-mono);
}

.home-hero h1 {
  max-width: 620px;
  margin: 0;
  color: #20251f;
  font-size: clamp(3.1rem, 6vw, 5.55rem);
  font-weight: 760;
  line-height: 1.04;
  letter-spacing: -0.075em;
}

.home-hero h1 em {
  color: #b94e2b;
  font-style: normal;
}

.home-hero__summary {
  max-width: 560px;
  margin: 22px 0 0;
  color: #51574f;
  font-size: clamp(1rem, 1.35vw, 1.1rem);
  line-height: 1.85;
}

.home-hero__identity {
  margin: 18px 0 0;
  color: #646960;
  font-size: 0.87rem;
}

.home-hero__identity span {
  margin: 0 5px;
  color: #b94e2b;
}

.home-hero__focus {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 15px;
  margin-top: 20px;
  color: #39443a;
  font-size: 0.78rem;
  font-weight: 650;
}

.home-hero__focus span + span::before {
  content: "/";
  margin-right: 15px;
  color: #b94e2b;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 22px;
  align-items: center;
  margin-top: 29px;
}

.home-action {
  display: inline-flex;
  min-height: 46px;
  gap: 12px;
  align-items: center;
  padding: 0 2px;
  color: #20251f;
  font-size: 0.88rem;
  font-weight: 720;
  text-decoration: none;
  transition: color 160ms ease, background-color 160ms ease;
}

.home-action--primary {
  padding: 0 16px;
  color: #f4f2eb;
  background: #20251f;
}

.home-action:hover,
.home-action:focus-visible {
  color: #b94e2b;
}

.home-action--primary:hover,
.home-action--primary:focus-visible {
  color: #fff;
  background: #b94e2b;
}

.home-action:focus-visible {
  outline: 2px solid #b94e2b;
  outline-offset: 4px;
}

.home-hero__evidence {
  min-width: 0;
  margin: 0;
  border: 1px solid #d0d0c9;
  background: #fff;
  box-shadow: 0 24px 55px rgb(32 37 31 / 11%);
}

.home-hero__evidence-head,
.home-hero__evidence figcaption {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  padding: 12px 15px;
  color: #646960;
  font: 600 0.67rem/1.5 var(--font-mono);
  letter-spacing: 0.025em;
}

.home-hero__evidence-head {
  border-bottom: 1px solid #d6d5cd;
}

.home-hero__evidence-head span:first-child {
  color: #20251f;
}

.home-hero__evidence img {
  display: block;
  width: 100%;
  aspect-ratio: 1.1 / 1;
  object-fit: cover;
  object-position: top center;
}

.home-hero__evidence figcaption {
  border-top: 1px solid #d6d5cd;
  font-family: inherit;
}

.home-hero__evidence figcaption span:first-child {
  color: #20251f;
  font-weight: 750;
}

@media (max-width: 900px) {
  .home-hero {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .home-hero__copy {
    max-width: 720px;
  }

  .home-hero__evidence {
    max-width: 760px;
  }
}

@media (max-width: 430px) {
  .home-hero {
    gap: 28px;
    padding-top: 12px;
  }

  .home-hero h1 {
    font-size: clamp(2.7rem, 13vw, 3.8rem);
  }

  .home-hero__evidence-head,
  .home-hero__evidence figcaption {
    align-items: flex-start;
    flex-direction: column;
    gap: 3px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-action {
    transition: none;
  }
}
</style>
