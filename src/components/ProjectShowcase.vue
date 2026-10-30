<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { ProjectItem } from '../data/portfolio'

defineProps<{
  projects: ProjectItem[]
}>()
</script>

<template>
  <section class="home-projects" id="projects" aria-labelledby="home-projects-title">
    <header class="home-projects__heading">
      <p class="home-section-label">PROJECTS / 02</p>
      <div>
        <h2 id="home-projects-title">两个测试对象，两条完整证据链。</h2>
        <p>一个检验成熟开源系统，一个观察 Agent 行为与本地业务接口。选项目看的是能否复现问题、跑完流程并复核结果。</p>
      </div>
    </header>

    <div class="home-projects__list">
      <article v-for="(project, index) in projects" :key="project.title" :class="['home-project-row', index % 2 === 1 && 'home-project-row--reverse']" data-testid="home-project-row">
        <figure class="home-project-row__visual">
          <RouterLink :to="project.href" :aria-label="`打开 ${project.title} 项目档案`">
            <img v-if="project.evidence" :src="project.evidence.src" :alt="project.evidence.alt" loading="lazy" />
          </RouterLink>
          <figcaption>
            <span>{{ project.title }}</span>
            <span>{{ project.evidence?.caption }}</span>
          </figcaption>
        </figure>

        <div class="home-project-row__copy">
          <p class="home-project-row__index"><span>0{{ index + 1 }}</span>{{ project.subtitle }}</p>
          <h3><RouterLink :to="project.href">{{ project.title }}</RouterLink></h3>
          <p class="home-project-row__position">{{ project.position }}</p>
          <p class="home-project-row__problem">{{ project.problem }}</p>

          <div class="home-project-row__evidence">
            <p>运行证据</p>
            <ul>
              <li v-for="metric in project.metrics" :key="metric">{{ metric }}</li>
            </ul>
          </div>

          <p class="home-project-row__stack"><strong>工具</strong>{{ project.stack.join(' · ') }}</p>
          <p class="home-project-row__boundary"><strong>测试边界</strong>{{ project.boundary }}</p>

          <div class="home-project-row__links">
            <a :href="project.githubUrl" target="_blank" rel="noreferrer">GitHub 仓库 <span aria-hidden="true">↗</span></a>
            <RouterLink :to="project.href">查看测试档案 <span aria-hidden="true">→</span></RouterLink>
          </div>
        </div>
      </article>
    </div>

    <RouterLink class="home-projects__archive" to="/projects">查看其它工程项目与技术背景 <span aria-hidden="true">→</span></RouterLink>
  </section>
</template>

<style scoped>
.home-section-label {
  margin: 7px 0 0;
  color: #b94e2b;
  font: 700 0.73rem/1.4 var(--font-mono);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.home-projects {
  margin-top: clamp(76px, 10vw, 140px);
}

.home-projects__heading {
  display: grid;
  grid-template-columns: minmax(170px, 0.35fr) minmax(0, 1fr);
  gap: 48px;
  margin-bottom: 32px;
}

.home-projects__heading h2 {
  max-width: 820px;
  margin: 0;
  color: #20251f;
  font-size: clamp(2rem, 3.8vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.05em;
}

.home-projects__heading > div > p {
  max-width: 750px;
  margin: 14px 0 0;
  color: #646960;
  font-size: 1rem;
  line-height: 1.8;
}

.home-projects__list {
  border-top: 1px solid #d6d5cd;
}

.home-project-row {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: center;
  padding: clamp(28px, 5vw, 58px) 0;
  border-bottom: 1px solid #d6d5cd;
}

.home-project-row--reverse .home-project-row__visual {
  order: 2;
}

.home-project-row__visual {
  min-width: 0;
  margin: 0;
  border: 1px solid #d0d0c9;
  background: #fff;
  box-shadow: 0 12px 30px rgb(32 37 31 / 7%);
}

.home-project-row__visual a {
  display: block;
  overflow: hidden;
}

.home-project-row__visual img {
  display: block;
  width: 100%;
  aspect-ratio: 1.46 / 1;
  object-fit: cover;
  object-position: top center;
  transition: transform 220ms ease;
}

.home-project-row__visual a:hover img,
.home-project-row__visual a:focus-visible img {
  transform: scale(1.015);
}

.home-project-row__visual a:focus-visible {
  outline: 3px solid #b94e2b;
  outline-offset: -3px;
}

.home-project-row__visual figcaption {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 14px;
  border-top: 1px solid #d0d0c9;
  color: #646960;
  font-size: 0.75rem;
  line-height: 1.5;
}

.home-project-row__visual figcaption span:first-child {
  color: #20251f;
  font-weight: 700;
}

.home-project-row__copy {
  min-width: 0;
}

.home-project-row__index {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 12px;
  color: #646960;
  font: 600 0.75rem/1.5 var(--font-mono);
  letter-spacing: 0.04em;
}

.home-project-row__index span {
  color: #b94e2b;
}

.home-project-row__copy h3 {
  margin: 0;
  color: #20251f;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.05em;
}

.home-project-row__copy h3 a {
  color: inherit;
  text-decoration: none;
}

.home-project-row__copy h3 a:hover,
.home-project-row__copy h3 a:focus-visible {
  color: #b94e2b;
}

.home-project-row__position {
  margin: 10px 0 0;
  color: #39443a;
  font-size: 1.05rem;
  font-weight: 650;
  line-height: 1.55;
}

.home-project-row__problem {
  margin: 12px 0 20px;
  color: #646960;
  line-height: 1.8;
}

.home-project-row__evidence {
  padding: 16px 0;
  border-top: 1px solid #d6d5cd;
  border-bottom: 1px solid #d6d5cd;
}

.home-project-row__evidence > p,
.home-project-row__stack strong,
.home-project-row__boundary strong {
  margin: 0;
  color: #20251f;
  font-size: 0.77rem;
  font-weight: 750;
}

.home-project-row__evidence ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 16px;
  margin: 11px 0 0;
  padding: 0;
  color: #39443a;
  font-size: 0.83rem;
  line-height: 1.6;
  list-style: none;
}

.home-project-row__evidence li::before {
  content: "↳ ";
  color: #b94e2b;
}

.home-project-row__stack,
.home-project-row__boundary {
  display: grid;
  grid-template-columns: 74px minmax(0, 1fr);
  gap: 10px;
  margin: 14px 0 0;
  color: #646960;
  font-size: 0.79rem;
  line-height: 1.65;
}

.home-project-row__boundary {
  margin-top: 9px;
}

.home-project-row__links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 21px;
}

.home-project-row__links a,
.home-projects__archive {
  color: #20251f;
  font-size: 0.84rem;
  font-weight: 750;
  text-decoration: none;
}

.home-project-row__links a span,
.home-projects__archive span {
  margin-left: 4px;
  color: #b94e2b;
}

.home-project-row__links a:hover,
.home-project-row__links a:focus-visible,
.home-projects__archive:hover,
.home-projects__archive:focus-visible {
  color: #b94e2b;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.home-projects__archive {
  display: inline-block;
  margin-top: 24px;
}

@media (max-width: 760px) {
  .home-projects__heading {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .home-project-row,
  .home-project-row--reverse {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .home-project-row--reverse .home-project-row__visual {
    order: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-project-row__visual img {
    transition: none;
  }
}
</style>
