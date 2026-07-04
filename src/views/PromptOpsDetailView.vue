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
import { promptOpsDetail } from '../data/projectDetails'
</script>

<template>
  <div class="mcp-detail-page promptops-detail-page">
    <div class="detail-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="detail-main">
      <DetailHero
        :title="promptOpsDetail.title"
        :subtitle="promptOpsDetail.subtitle"
        :positioning="promptOpsDetail.positioning"
        :tags="promptOpsDetail.tags"
        :github-url="promptOpsDetail.githubUrl"
        kicker="CASE STUDY 03 / PROMPT EVAL & REGRESSION"
        dossier-stage="LOCAL DEMO / DETERMINISTIC BASELINE"
        dossier-description="以源项目 README、architecture、acceptance checklist 和真实浏览器截图构成证据；当前使用 Mock Output 与 Rule-based Eval，不声明真实模型质量或生产审批能力。"
      />
      <ProjectSummaryRail :items="promptOpsDetail.summary" />

      <section class="detail-section problem-section" aria-labelledby="problem-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">01 / PROBLEM</p>
            <h2 id="problem-title">Why this project exists</h2>
          </div>
          <p>
            PromptOps 关注 AI 应用质量工程：不是展示一次“看起来不错”的输出，而是让版本、样本、规则、失败与复核形成可重复检查的回归链路。
          </p>
        </header>

        <div class="problem-layout">
          <p class="problem-statement">{{ promptOpsDetail.problem }}</p>
          <dl class="problem-signals">
            <div v-for="signal in promptOpsDetail.problemSignals" :key="signal.label">
              <dt>{{ signal.label }}</dt>
              <dd>{{ signal.value }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ArchitectureFlow
        :nodes="promptOpsDetail.architecture"
        kicker="02 / EVAL WORKFLOW"
        title="Prompt Regression Chain"
        description="这条链路与其他案例分工明确：DevFlow 关注 AI Coding，Ticket RAG 关注检索证据，PromptOps 关注 Prompt 评测与回归，MCP 关注 Tool Governance，OfferFlow 关注 Evidence 与 Copy Gate。"
        aria-label="PromptOps Studio Prompt evaluation and regression workflow"
        :stages="['DATASET + VERSION', 'MOCK + RULE EVAL', 'TRACE + REVIEW']"
      />

      <section class="detail-section module-section" aria-labelledby="modules-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">03 / PRODUCT MODULES</p>
            <h2 id="modules-title">Core Product Modules</h2>
          </div>
          <p>
            页面围绕真实评测工作流组织模块：Prompt、Dataset、Batch Eval、Compare、Trace、Failure Case、Review 与 System Boundary。
          </p>
        </header>

        <ol class="module-grid">
          <li v-for="module in promptOpsDetail.modules" :key="module.index" class="module-card">
            <span>{{ module.index }}</span>
            <h3>{{ module.title }}</h3>
            <p>{{ module.detail }}</p>
          </li>
        </ol>
      </section>

      <ScreenshotGallery
        :items="promptOpsDetail.screenshots"
        intro="以下均为 PromptOps Studio 本地运行页面的真实浏览器截图副本，来源于 ai-agent-eval-promptops/docs/images；未使用 docs/design_refs，也不是生产环境截图。"
      />
      <EngineeringEvidenceGrid
        :groups="promptOpsDetail.engineeringEvidenceGroups"
        title="Engineering Evidence"
        description="证据来自 PromptOps 源项目 README、architecture、acceptance checklist 与真实运行截图；Mock Output、规则评分、模拟耗时和非持久化 Review 均保持明确标注。"
      />
      <BoundaryPanel :sections="promptOpsDetail.trustPanel" />
      <InterviewNotes :items="promptOpsDetail.interviewQuestions" />

      <SiteFooter />
    </main>
  </div>
</template>
