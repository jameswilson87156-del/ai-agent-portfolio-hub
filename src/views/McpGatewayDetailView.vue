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
import { mcpGatewayDetail } from '../data/projectDetails'
</script>

<template>
  <div class="mcp-detail-page">
    <div class="detail-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="detail-main">
      <DetailHero
        :title="mcpGatewayDetail.title"
        :subtitle="mcpGatewayDetail.subtitle"
        :positioning="mcpGatewayDetail.positioning"
        :tags="mcpGatewayDetail.tags"
        :github-url="mcpGatewayDetail.githubUrl"
      />
      <ProjectSummaryRail :items="mcpGatewayDetail.summary" />

      <section class="detail-section problem-section" aria-labelledby="problem-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">01 / PROBLEM</p>
            <h2 id="problem-title">Why this project exists</h2>
          </div>
          <p>不是给 Tool 再包一层 UI，而是把调用前、调用中、调用后的治理责任放进同一条链路。</p>
        </header>

        <div class="problem-layout">
          <p class="problem-statement">{{ mcpGatewayDetail.problem }}</p>
          <dl class="problem-signals">
            <div>
              <dt>BEFORE</dt>
              <dd>工具边界与权限不可见</dd>
            </div>
            <div>
              <dt>DURING</dt>
              <dd>风险判断与审核链路分散</dd>
            </div>
            <div>
              <dt>AFTER</dt>
              <dd>Trace 与 Audit 证据难以复核</dd>
            </div>
          </dl>
        </div>
      </section>

      <ArchitectureFlow :nodes="mcpGatewayDetail.architecture" />

      <section class="detail-section flow-section" aria-labelledby="flow-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">03 / INVOCATION PATH</p>
            <h2 id="flow-title">Core Agent Flow</h2>
          </div>
          <p>Tool Call 先形成可追踪记录；高风险调用必须完成 Human Review，批准后才执行 sandbox Tool。</p>
        </header>

        <ol class="core-flow">
          <li v-for="step in mcpGatewayDetail.flow" :key="step.index">
            <span class="core-flow__index">{{ step.index }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.detail }}</p>
            <span class="core-flow__arrow" aria-hidden="true">→</span>
          </li>
        </ol>
      </section>

      <ScreenshotGallery :items="mcpGatewayDetail.screenshots" />
      <EngineeringEvidenceGrid :groups="mcpGatewayDetail.engineeringEvidenceGroups" />
      <BoundaryPanel :sections="mcpGatewayDetail.trustPanel" />
      <InterviewNotes :items="mcpGatewayDetail.interviewQuestions" />

      <SiteFooter />
    </main>
  </div>
</template>
