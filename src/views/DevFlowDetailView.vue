<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import ArchitectureFlow from '../components/projects/ArchitectureFlow.vue'
import BoundaryPanel from '../components/projects/BoundaryPanel.vue'
import DetailHero from '../components/projects/DetailHero.vue'
import EngineeringEvidenceGrid from '../components/projects/EngineeringEvidenceGrid.vue'
import InterviewNotes from '../components/projects/InterviewNotes.vue'
import ProjectSummaryRail from '../components/projects/ProjectSummaryRail.vue'
import ScreenshotGallery from '../components/projects/ScreenshotGallery.vue'
import { navItems } from '../data/portfolio'
import { devFlowDetail } from '../data/projectDetails'
</script>

<template>
  <div class="mcp-detail-page devflow-detail-page">
    <div class="detail-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="detail-main">
      <DetailHero
        :title="devFlowDetail.title"
        :subtitle="devFlowDetail.subtitle"
        :positioning="devFlowDetail.positioning"
        :tags="devFlowDetail.tags"
        :github-url="devFlowDetail.githubUrl"
        kicker="CASE STUDY 01 / AI CODING WORKFLOW"
        dossier-stage="P3B / RUNNABLE PROJECT"
        dossier-description="以真实可运行项目、真实本地浏览器截图、README 记录、构建验收和明确边界说明构成证据；不包装成生产级 AI IDE。"
      />
      <ProjectSummaryRail :items="devFlowDetail.summary" />

      <section class="detail-section problem-section" aria-labelledby="problem-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">01 / PROBLEM</p>
            <h2 id="problem-title">Why this project exists</h2>
          </div>
          <p>
            DevFlow 关注 AI Coding workflow，而不是 Tool Governance。它把一次生成行为拆成可记录、可保存、可审核、可复盘的工程流程。
          </p>
        </header>

        <div class="problem-layout">
          <p class="problem-statement">{{ devFlowDetail.problem }}</p>
          <dl class="problem-signals">
            <div v-for="signal in devFlowDetail.problemSignals" :key="signal.label">
              <dt>{{ signal.label }}</dt>
              <dd>{{ signal.value }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ArchitectureFlow
        :nodes="devFlowDetail.architecture"
        kicker="02 / WORKFLOW ARCHITECTURE"
        title="Agentic Coding Workflow"
        description="这条链路与 MCP 的 Tool Governance 不同：DevFlow 展示的是 Prompt、Provider、Generation Trace、Knowledge Reference、Save Record 与 Human Review 如何形成 AI Coding 闭环。"
        aria-label="DevFlow Copilot Agentic Coding Workflow"
        :stages="['PROMPT ENTRY', 'GENERATION CORE', 'REVIEW HISTORY']"
      />

      <section class="detail-section module-section" aria-labelledby="modules-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">03 / PRODUCT MODULES</p>
            <h2 id="modules-title">Core Product Modules</h2>
          </div>
          <p>
            页面不是普通 dashboard，而是把 AI Coding 工作流拆成可运行的产品模块：输入、生成、引用、记录、审核和复盘。
          </p>
        </header>

        <ol class="module-grid">
          <li v-for="module in devFlowDetail.modules" :key="module.index" class="module-card">
            <span>{{ module.index }}</span>
            <h3>{{ module.title }}</h3>
            <p>{{ module.detail }}</p>
          </li>
        </ol>
      </section>

      <ScreenshotGallery
        :items="devFlowDetail.screenshots"
        intro="以下均为本地 DevFlow Copilot 可运行页面的浏览器截图副本，来源于 ai-coding-workbench/docs/images，不是设计参考图或生产环境截图。"
      />
      <EngineeringEvidenceGrid
        :groups="devFlowDetail.engineeringEvidenceGroups"
        title="Engineering Evidence"
        description="证据来自 DevFlow 源项目 README、docs 与真实浏览器截图；Provider、Knowledge Base 和 Human Review 都按作品集工程项目的真实边界表达。"
      />
      <BoundaryPanel :sections="devFlowDetail.trustPanel" />
      <InterviewNotes :items="devFlowDetail.interviewQuestions" />

      <SiteFooter />
    </main>
  </div>
</template>
