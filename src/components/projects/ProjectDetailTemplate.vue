<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ArchitectureFlow from './ArchitectureFlow.vue'
import BoundaryPanel from './BoundaryPanel.vue'
import DetailHero from './DetailHero.vue'
import EngineeringEvidenceGrid from './EngineeringEvidenceGrid.vue'
import InterviewNotes from './InterviewNotes.vue'
import ProjectSummaryRail from './ProjectSummaryRail.vue'
import ScreenshotGallery from './ScreenshotGallery.vue'
import SiteFooter from '../SiteFooter.vue'
import TopNav from '../TopNav.vue'
import { navItems } from '../../data/portfolio'
import type {
  ArchitectureNode,
  CoreModuleItem,
  EngineeringEvidenceGroup,
  InterviewQA,
  ProjectSummaryItem,
  ScreenshotEvidence,
  TrustPanelSection,
} from '../../data/projectDetails'

type ProblemSignal = {
  label: string
  value: string
}

type ProjectDetail = {
  title: string
  subtitle: string
  positioning: string
  tags: string[]
  githubUrl?: string
  summary: ProjectSummaryItem[]
  problem: string
  problemSignals?: ProblemSignal[]
  architecture: ArchitectureNode[]
  modules?: CoreModuleItem[]
  screenshots: ScreenshotEvidence[]
  engineeringEvidenceGroups: EngineeringEvidenceGroup[]
  trustPanel: TrustPanelSection[]
  interviewQuestions: InterviewQA[]
}

const props = withDefaults(defineProps<{
  detail: ProjectDetail
  pageClass: string
  kicker: string
  dossierStage: string
  dossierDescription: string
  backgroundNote: string
  architectureTitle: string
  architectureDescription: string
  architectureStages?: string[]
  screenshotIntro: string
}>(), {
  architectureStages: () => ['ENTRY', 'WORKFLOW', 'EVIDENCE'],
})

const problemSignals = computed(() =>
  props.detail.problemSignals?.length
    ? props.detail.problemSignals
    : [
        {
          label: 'WORKFLOW',
          value: props.detail.problem,
        },
        {
          label: 'BOUNDARY',
          value: '该项目以作品集工程证据为主，能力边界在详情页和源项目 README 中明确说明。',
        },
      ],
)

const modules = computed(() =>
  props.detail.modules?.length
    ? props.detail.modules
    : props.detail.architecture.map((node) => ({
        index: node.index,
        title: node.title,
        detail: node.detail,
      })),
)
</script>

<template>
  <div :class="['mcp-detail-page', pageClass]">
    <div class="detail-backdrop" aria-hidden="true" />
    <TopNav :items="navItems" />

    <main class="detail-main">
      <DetailHero
        :title="detail.title"
        :subtitle="detail.subtitle"
        :positioning="detail.positioning"
        :tags="detail.tags"
        :github-url="detail.githubUrl"
        :kicker="kicker"
        :dossier-stage="dossierStage"
        :dossier-description="dossierDescription"
      />

      <section class="detail-section background-section" aria-labelledby="background-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">01 / PROJECT BACKGROUND</p>
            <h2 id="background-title">项目背景</h2>
          </div>
          <p>{{ backgroundNote }}</p>
        </header>

        <div class="background-layout">
          <p class="problem-statement">{{ detail.positioning }}</p>
          <ProjectSummaryRail :items="detail.summary" />
        </div>
      </section>

      <section class="detail-section problem-section" aria-labelledby="problem-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">02 / PROBLEM</p>
            <h2 id="problem-title">解决什么问题</h2>
          </div>
          <p>
            这一部分对应项目的真实工程切入点：输入从哪里来、AI 链路如何被约束、输出如何被追踪和复核。
          </p>
        </header>

        <div class="problem-layout">
          <p class="problem-statement">{{ detail.problem }}</p>
          <dl class="problem-signals">
            <div v-for="signal in problemSignals" :key="signal.label">
              <dt>{{ signal.label }}</dt>
              <dd>{{ signal.value }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ArchitectureFlow
        :nodes="detail.architecture"
        kicker="03 / TECHNICAL SOLUTION"
        :title="architectureTitle"
        :description="architectureDescription"
        :aria-label="`${detail.title} technical workflow`"
        :stages="architectureStages"
      />

      <section class="detail-section module-section" aria-labelledby="modules-title">
        <header class="detail-section-heading">
          <div>
            <p class="detail-kicker">04 / CORE MODULES</p>
            <h2 id="modules-title">核心页面与模块</h2>
          </div>
          <p>
            模块不是普通 CRUD 列表，而是围绕 AI 应用开发中的 Prompt、RAG、Trace、Eval、Tool、Review 或 Copy Gate 组织。
          </p>
        </header>

        <ol class="module-grid">
          <li v-for="module in modules" :key="module.index" class="module-card">
            <span>{{ module.index }}</span>
            <h3>{{ module.title }}</h3>
            <p>{{ module.detail }}</p>
          </li>
        </ol>
      </section>

      <ScreenshotGallery :items="detail.screenshots" :intro="screenshotIntro" />

      <EngineeringEvidenceGrid
        :groups="detail.engineeringEvidenceGroups"
        kicker="06 / DIFFICULTIES & IMPLEMENTATION"
        title="技术难点与我的实现"
        description="这里集中说明我实际做了哪些前后端实现、测试、Trace / Review / Eval / Permission 边界，以及哪些能力只作为本地 demo 或下一阶段规划。"
      />

      <BoundaryPanel :sections="detail.trustPanel" />
      <InterviewNotes :items="detail.interviewQuestions" />

      <section class="detail-section detail-next-actions" aria-labelledby="next-actions-title">
        <div>
          <p class="detail-kicker">CASE STUDY / ACTIONS</p>
          <h2 id="next-actions-title">继续查看</h2>
        </div>
        <nav aria-label="详情页操作">
          <a v-if="detail.githubUrl" :href="detail.githubUrl" target="_blank" rel="noreferrer">
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
          <RouterLink to="/projects">
            返回项目列表
            <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink to="/">
            返回首页
            <span aria-hidden="true">→</span>
          </RouterLink>
        </nav>
      </section>

      <SiteFooter />
    </main>
  </div>
</template>
