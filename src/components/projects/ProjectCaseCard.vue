<script setup lang="ts">
import type { CaseStudyProject } from '../../data/projects'

defineProps<{
  project: CaseStudyProject
}>()
</script>

<template>
  <article
    :id="project.slug"
    :class="['case-card', `case-card--${project.tone}`]"
    tabindex="0"
    :aria-labelledby="`${project.slug}-title`"
  >
    <div class="case-card__rail" aria-hidden="true">
      <span>{{ project.index }}</span>
      <span>{{ project.code }}</span>
    </div>

    <div class="case-card__content">
      <header class="case-card__header">
        <div>
          <p class="case-card__eyebrow">CASE STUDY / {{ project.code }}</p>
          <h2 :id="`${project.slug}-title`">{{ project.title }}</h2>
          <p class="case-card__position">{{ project.position }}</p>
        </div>

        <span class="case-card__details" aria-disabled="true">
          P3 · Coming soon
          <span aria-hidden="true">↗</span>
        </span>
      </header>

      <div class="case-card__lead">
        <div class="case-card__problem">
          <p class="case-label">SOLVES</p>
          <p>{{ project.problem }}</p>
        </div>

        <div class="case-card__workflow">
          <p class="case-label">CORE AGENT CHAIN</p>
          <ol>
            <li v-for="step in project.workflow" :key="step">
              <span>{{ step }}</span>
            </li>
          </ol>
        </div>
      </div>

      <div class="case-card__facts">
        <section>
          <p class="case-label">TECH STACK</p>
          <ul class="case-inline-list">
            <li v-for="item in project.stack" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section>
          <p class="case-label">ENGINEERING EVIDENCE</p>
          <ul class="case-inline-list case-inline-list--evidence">
            <li v-for="item in project.evidence" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="case-card__boundary">
          <p class="case-label">BOUNDARY</p>
          <p>{{ project.boundary }}</p>
        </section>
      </div>

      <footer class="case-card__resume">
        <span>WHY IT BELONGS ON THE RESUME</span>
        <p>{{ project.resumeValue }}</p>
      </footer>
    </div>
  </article>
</template>
