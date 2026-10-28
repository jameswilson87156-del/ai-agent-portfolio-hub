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

const projectOrder = [
  'gitea-quality-lab',
  'promptops',
  'devflow',
  'ticket-rag',
  'offerflow',
  'mcp-gateway',
] as const

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

const primaryProjects = computed(() => orderedCaseStudyProjects.value.slice(0, 2))
const engineeringBackgroundProjects = computed(() => orderedCaseStudyProjects.value.slice(2))
</script>

<template>
  <div class="projects-page">
    <div class="projects-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="projects-main">
      <header class="projects-intro" aria-labelledby="projects-title">
        <div class="projects-intro__copy">
          <p class="projects-intro__kicker">TEST DEVELOPMENT / PROJECT EVIDENCE</p>
          <h1 id="projects-title">测试开发</h1>
          <p class="projects-intro__lead">
            两个主项目分别覆盖真实开源系统测试与 AI Agent / 本地业务 API 评测。每个项目都能从页面跳到源代码、运行报告和边界说明。
          </p>
          <p class="projects-intro__audience">
            主投测试开发实习：API、权限、浏览器自动化、持久化、固定数据集、Trace、CI 与本地稳定性验证。
          </p>
        </div>

        <aside class="projects-intro__rail" aria-label="项目档案结构">
          <span>01 · Open-source API / UI QA</span>
          <span>02 · Agent Eval / Business API</span>
          <span>03–07 · Engineering background</span>
        </aside>
      </header>

      <section class="case-index" aria-labelledby="case-index-title">
        <header class="case-index__heading">
          <p class="section-kicker">01 / TEST DEVELOPMENT</p>
          <h2 id="case-index-title">两条主线：测试真实产品行为，评测 Agent 与业务 API。</h2>
        </header>

        <div class="case-index__list">
          <ProjectCaseCard
            v-for="project in primaryProjects"
            :key="project.slug"
            :project="project"
          />
        </div>
      </section>

      <section class="case-index engineering-background" aria-labelledby="engineering-background-title">
        <header class="case-index__heading">
          <p class="section-kicker">02 / SUPPORTING ENGINEERING</p>
          <h2 id="engineering-background-title">其余项目保留为编码、系统拆解和 AI 工作流工程背景。</h2>
        </header>

        <div class="case-index__list">
          <ProjectCaseCard
            v-for="project in engineeringBackgroundProjects"
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
