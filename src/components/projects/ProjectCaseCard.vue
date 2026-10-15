<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { CaseStudyProject } from '../../data/projects'

defineProps<{
  project: CaseStudyProject
}>()
</script>

<template>
  <article
    :id="project.slug"
    :class="['case-card', `case-card--${project.tone}`]"
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

        <div class="case-card__links" aria-label="项目链接">
          <a
            v-if="project.githubUrl"
            class="case-card__details case-card__details--available"
            :href="project.githubUrl"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
          <RouterLink
            v-if="project.detailPath"
            class="case-card__details case-card__details--available"
            :to="project.detailPath"
          >
            Case Study
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </header>

      <div class="case-card__story">
        <div class="case-card__narrative">
          <section class="case-card__block case-card__problem">
            <p class="case-label">PROBLEM / 解决的问题</p>
            <p>{{ project.problem }}</p>
          </section>

          <section class="case-card__block case-card__workflow">
            <p class="case-label">WORKFLOW / 核心链路</p>
            <ol>
              <li v-for="step in project.workflow" :key="step">
                <span>{{ step }}</span>
              </li>
            </ol>
          </section>

          <div class="case-card__proof-grid">
            <section class="case-card__block">
              <p class="case-label">KEY DATA / 关键数据</p>
              <ul class="case-inline-list case-inline-list--evidence">
                <li v-for="item in project.evidence" :key="item">{{ item }}</li>
              </ul>
            </section>

            <section class="case-card__block case-card__boundary">
              <p class="case-label">BOUNDARY / 边界说明</p>
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
        <span>RESUME VALUE / 简历价值</span>
        <p>{{ project.resumeValue }}</p>
      </footer>
    </div>
  </article>
</template>
