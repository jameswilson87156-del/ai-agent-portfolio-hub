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
import { ticketRagDetail } from '../data/projectDetails'
</script>

<template>
  <div class="mcp-detail-page ticket-rag-detail-page">
    <div class="detail-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="detail-main">
      <DetailHero
        :title="ticketRagDetail.title"
        :subtitle="ticketRagDetail.subtitle"
        :positioning="ticketRagDetail.positioning"
        :tags="ticketRagDetail.tags"
        :github-url="ticketRagDetail.githubUrl"
        kicker="CASE STUDY 02 / ENTERPRISE RAG COPILOT"
        dossier-stage="P3C / RUNNABLE PROJECT"
        dossier-description="以真实可运行项目、真实浏览器 Showcase 截图、README 记录、构建验收和明确边界说明构成证据；不包装成生产级企业 RAG 系统。"
      />
      <ProjectSummaryRail :items="ticketRagDetail.summary" />

      <section class="detail-section problem-section" aria-labelledby="problem-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">01 / PROBLEM</p>
            <h2 id="problem-title">Why this project exists</h2>
          </div>
          <p>
            Ticket RAG 关注 Enterprise RAG Copilot Workflow，而不是 MCP 的 Tool Governance 或 DevFlow 的 AI Coding Workflow。
          </p>
        </header>

        <div class="problem-layout">
          <p class="problem-statement">{{ ticketRagDetail.problem }}</p>
          <dl class="problem-signals">
            <div v-for="signal in ticketRagDetail.problemSignals" :key="signal.label">
              <dt>{{ signal.label }}</dt>
              <dd>{{ signal.value }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ArchitectureFlow
        :nodes="ticketRagDetail.architecture"
        kicker="02 / RAG COPILOT WORKFLOW"
        title="Ticket RAG Copilot Workflow"
        description="这条链路与 MCP / DevFlow 区分清楚：MCP 是 Agent Tool Governance，DevFlow 是 AI Coding Workflow，Ticket RAG 是 Enterprise RAG Copilot Workflow。"
        aria-label="Enterprise Ticket RAG Copilot Workflow"
        :stages="['TICKET ENTRY', 'RAG + PROVIDER', 'TRACE + REVIEW']"
      />

      <section class="detail-section module-section" aria-labelledby="modules-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">03 / PRODUCT MODULES</p>
            <h2 id="modules-title">Core Product Modules</h2>
          </div>
          <p>
            页面不是普通 dashboard，而是把企业工单 Copilot 拆成可运行的产品模块：工单、知识、RAG、fallback、证据和审核。
          </p>
        </header>

        <ol class="module-grid ticket-module-grid">
          <li v-for="module in ticketRagDetail.modules" :key="module.index" class="module-card">
            <span>{{ module.index }}</span>
            <h3>{{ module.title }}</h3>
            <p>{{ module.detail }}</p>
          </li>
        </ol>
      </section>

      <ScreenshotGallery
        :items="ticketRagDetail.screenshots"
        intro="以下均为本地 Enterprise Ticket RAG Copilot 可运行 Showcase 页面的浏览器截图副本，来源于 enterprise-ai-ticket-copilot/docs/images，不是设计参考图或生产环境截图。"
      />
      <EngineeringEvidenceGrid
        :groups="ticketRagDetail.engineeringEvidenceGroups"
        title="Engineering Evidence"
        description="证据来自 Enterprise Ticket RAG Copilot 源项目 README、docs、测试记录和真实浏览器截图；Provider 与 RAG 能力均按作品集工程项目的真实边界表达。"
      />
      <BoundaryPanel :sections="ticketRagDetail.trustPanel" />
      <InterviewNotes :items="ticketRagDetail.interviewQuestions" />

      <SiteFooter />
    </main>
  </div>
</template>
