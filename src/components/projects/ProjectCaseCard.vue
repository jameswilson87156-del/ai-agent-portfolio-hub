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

      <div class="case-card__story">
        <div class="case-card__narrative">
          <section class="case-card__block case-card__problem">
            <p class="case-label">PROBLEM / 解决问题</p>
            <p>{{ project.problem }}</p>
          </section>

          <section class="case-card__block case-card__workflow">
            <p class="case-label">AGENT CHAIN / 核心链路</p>
            <ol>
              <li v-for="step in project.workflow" :key="step">
                <span>{{ step }}</span>
              </li>
            </ol>
          </section>

          <div class="case-card__proof-grid">
            <section class="case-card__block">
              <p class="case-label">EVIDENCE / 工程证据</p>
              <ul class="case-inline-list case-inline-list--evidence">
                <li v-for="item in project.evidence" :key="item">{{ item }}</li>
              </ul>
            </section>

            <section class="case-card__block case-card__boundary">
              <p class="case-label">BOUNDARY / 能力边界</p>
              <p>{{ project.boundary }}</p>
            </section>
          </div>

          <section class="case-card__stack" aria-label="技术栈">
            <span v-for="item in project.stack" :key="item">{{ item }}</span>
          </section>
        </div>

        <figure class="case-card__preview">
          <div class="case-card__preview-frame">
            <img
              :src="project.preview.src"
              :alt="project.preview.alt"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption>
            <span>{{ project.preview.caption }}</span>
            <small>{{ project.preview.source }}</small>
          </figcaption>
        </figure>
      </div>

      <footer class="case-card__resume">
        <span>ENGINEERING VALUE / 简历价值</span>
        <p>{{ project.resumeValue }}</p>
      </footer>
    </div>
  </article>
</template>
