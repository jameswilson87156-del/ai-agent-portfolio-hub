<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TopNav from '../components/TopNav.vue'
import CapabilityMatrix from '../components/projects/CapabilityMatrix.vue'
import EvidenceWall from '../components/projects/EvidenceWall.vue'
import ProjectBoundaryNote from '../components/projects/ProjectBoundaryNote.vue'
import ProjectCaseCard from '../components/projects/ProjectCaseCard.vue'
import { navItems } from '../data/portfolio'
import {
  capabilityMatrix,
  caseStudyProjects,
  evidenceWall,
  projectBoundary,
} from '../data/projects'
</script>

<template>
  <div class="projects-page">
    <div class="projects-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="projects-main">
      <header class="projects-intro" aria-labelledby="projects-title">
        <div class="projects-intro__copy">
          <p class="projects-intro__kicker">CASE STUDY INDEX / P2</p>
          <h1 id="projects-title">Projects</h1>
          <p class="projects-intro__lead">
            三个 AI Agent 工程案例，把 Prompt、Tool、Provider、Trace Evidence 与
            Human Review 串成可展示、可解释、可验证的作品集。
          </p>
          <p class="projects-intro__audience">
            面向 Java Backend / AI Application / AI Agent / Web Full-stack 实习方向。
          </p>
        </div>

        <aside class="projects-intro__rail" aria-label="三个项目定位">
          <span>01 · AI Coding Workflow</span>
          <span>02 · Explainable RAG</span>
          <span>03 · Tool Gateway Governance</span>
        </aside>
      </header>

      <section class="case-index" aria-labelledby="case-index-title">
        <header class="case-index__heading">
          <p class="section-kicker">01 / CORE PROJECTS</p>
          <h2 id="case-index-title">Three systems, three engineering questions.</h2>
        </header>

        <div class="case-index__list">
          <ProjectCaseCard
            v-for="project in caseStudyProjects"
            :key="project.slug"
            :project="project"
          />
        </div>
      </section>

      <CapabilityMatrix :items="capabilityMatrix" />
      <EvidenceWall :items="evidenceWall" />
      <ProjectBoundaryNote
        :summary="projectBoundary.summary"
        :focus="projectBoundary.focus"
        :commitments="projectBoundary.commitments"
      />

      <footer class="projects-footer">
        <p>Wang Zhenlong · AI Agent Engineer Portfolio Hub</p>
        <RouterLink to="/">
          返回首页
          <span aria-hidden="true">↗</span>
        </RouterLink>
      </footer>
    </main>
  </div>
</template>
