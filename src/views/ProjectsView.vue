<script setup lang="ts">
import { computed } from 'vue'
import TopNav from '../components/TopNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import CapabilityMatrix from '../components/projects/CapabilityMatrix.vue'
import EvidenceWall from '../components/projects/EvidenceWall.vue'
import ProjectBoundaryNote from '../components/projects/ProjectBoundaryNote.vue'
import ProjectCaseCard from '../components/projects/ProjectCaseCard.vue'
import { navItems, projects as homeProjects } from '../data/portfolio'
import {
  capabilityMatrix,
  caseStudyProjects,
  evidenceGroups,
  projectBoundary,
} from '../data/projects'

const projectOrder = ['devflow', 'ticket-rag', 'promptops', 'offerflow', 'mcp-gateway'] as const

const orderedCaseStudyProjects = computed(() =>
  projectOrder
    .flatMap((slug, index) => {
      const project = caseStudyProjects.find((item) => item.slug === slug)
      const homeProject = homeProjects.find((item) => item.href === project?.detailPath)

      return project
        ? [
            {
              ...project,
              index: String(index + 1).padStart(2, '0'),
              githubUrl: homeProject?.githubUrl,
            },
          ]
        : []
    }),
)
</script>

<template>
  <div class="projects-page">
    <div class="projects-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="projects-main">
      <header class="projects-intro" aria-labelledby="projects-title">
        <div class="projects-intro__copy">
          <p class="projects-intro__kicker">CORE AI APPLICATION PROJECTS</p>
          <h1 id="projects-title">项目证据</h1>
          <p class="projects-intro__lead">
            五个 AI 应用开发项目，覆盖 AI Coding、企业工单 RAG、PromptOps、求职 AI workflow 和 Agent Tool Gateway。
            每个项目都保留 GitHub、真实截图、关键数据和边界说明。
          </p>
          <p class="projects-intro__audience">
            面向 AI 应用开发实习 / Java + AI 全栈开发 / AI 工具开发 / RAG / PromptOps / Agent 工具平台方向。
          </p>
        </div>

        <aside class="projects-intro__rail" aria-label="五个项目定位">
          <span>01 · AI Coding Workflow</span>
          <span>02 · Explainable Ticket RAG</span>
          <span>03 · Prompt Eval & Regression</span>
          <span>04 · Evidence-first Job Workflow</span>
          <span>05 · Tool Gateway Governance</span>
        </aside>
      </header>

      <section class="case-index" aria-labelledby="case-index-title">
        <header class="case-index__heading">
          <p class="section-kicker">01 / CORE PROJECTS</p>
          <h2 id="case-index-title">五个项目，分别对应 AI 应用开发的五类工程问题。</h2>
        </header>

        <div class="case-index__list">
          <ProjectCaseCard
            v-for="project in orderedCaseStudyProjects"
            :key="project.slug"
            :project="project"
          />
        </div>
      </section>

      <CapabilityMatrix :items="capabilityMatrix" />
      <EvidenceWall :groups="evidenceGroups" />
      <ProjectBoundaryNote
        :summary="projectBoundary.summary"
        :focus="projectBoundary.focus"
        :commitments="projectBoundary.commitments"
      />

      <SiteFooter />
    </main>
  </div>
</template>
