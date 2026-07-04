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
import { offerFlowDetail } from '../data/projectDetails'
</script>

<template>
  <div class="mcp-detail-page offerflow-detail-page">
    <div class="detail-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="detail-main">
      <DetailHero
        :title="offerFlowDetail.title"
        :subtitle="offerFlowDetail.subtitle"
        :positioning="offerFlowDetail.positioning"
        :tags="offerFlowDetail.tags"
        kicker="CASE STUDY 05 / EVIDENCE-FIRST JOB WORKFLOW"
        dossier-stage="P5C / PORTFOLIO-READY LOCAL RELEASE"
        dossier-description="以 OfferFlow 源项目 README、release notes、CI、126 项后端测试、Playwright 截图和真实运行截图构成证据；不包装成生产级招聘系统。"
      />
      <ProjectSummaryRail :items="offerFlowDetail.summary" />

      <section class="detail-section problem-section" aria-labelledby="problem-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">01 / PROBLEM</p>
            <h2 id="problem-title">Why this project exists</h2>
          </div>
          <p>
            OfferFlow 关注 evidence-first AI workflow：AI 输出不能直接使用，必须被证据、契约、风险和人工复核约束。
          </p>
        </header>

        <div class="problem-layout">
          <p class="problem-statement">{{ offerFlowDetail.problem }}</p>
          <dl class="problem-signals">
            <div v-for="signal in offerFlowDetail.problemSignals" :key="signal.label">
              <dt>{{ signal.label }}</dt>
              <dd>{{ signal.value }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ArchitectureFlow
        :nodes="offerFlowDetail.architecture"
        kicker="02 / CORE WORKFLOW"
        title="Evidence-first AI Workflow"
        description="这条链路把 JD、简历证据、Provider 输出和复制权限放进同一个可审计流程；它不是招聘平台自动化，也不是生产级 Provider 接入声明。"
        aria-label="OfferFlow Copilot evidence-first AI workflow"
        :stages="['INTAKE + EVIDENCE', 'CONTRACT + RISK', 'REVIEW + COPY']"
      />

      <section class="detail-section module-section" aria-labelledby="modules-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">03 / PRODUCT MODULES</p>
            <h2 id="modules-title">Core Product Modules</h2>
          </div>
          <p>
            页面把求职 AI workflow 拆成可验证模块：JD、Evidence、Report、Provider Trace、Review、Copy Gate 和 CI。
          </p>
        </header>

        <ol class="module-grid">
          <li v-for="module in offerFlowDetail.modules" :key="module.index" class="module-card">
            <span>{{ module.index }}</span>
            <h3>{{ module.title }}</h3>
            <p>{{ module.detail }}</p>
          </li>
        </ol>
      </section>

      <ScreenshotGallery
        :items="offerFlowDetail.screenshots"
        intro="以下均为 OfferFlow Copilot 本地运行页面的浏览器截图副本，来源于 offerflow-copilot/docs/images；docs/design/references 仅是 AI-generated design references，不作为运行截图证据。"
      />
      <EngineeringEvidenceGrid
        :groups="offerFlowDetail.engineeringEvidenceGroups"
        title="Engineering Evidence"
        description="证据来自 OfferFlow 源项目 README、release notes、screenshot manifest、GitHub Actions CI、测试记录和真实运行截图。"
      />
      <BoundaryPanel :sections="offerFlowDetail.trustPanel" />
      <InterviewNotes :items="offerFlowDetail.interviewQuestions" />

      <SiteFooter />
    </main>
  </div>
</template>
