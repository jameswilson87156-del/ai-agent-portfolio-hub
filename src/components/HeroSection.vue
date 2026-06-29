<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero-copy" id="capabilities">
    <p class="hero-kicker">AI Agent Engineer Portfolio Hub</p>

    <h1 class="hero-title" id="page-title">
      <span class="title-en"><span>AI</span><span>Agent</span></span>
      <span class="title-cn">工程师作品集</span>
    </h1>

    <p class="identity-line">
      <span>王震龙</span>
      <span>软件工程本科</span>
      <span>2027 届</span>
    </p>

    <p class="direction-line">Java Backend / AI Application / AI Agent / Web Full-stack</p>
    <div class="hero-divider" aria-hidden="true" />

    <p class="hero-subtitle">
      用 Prompt 驱动构建，用 Trace 留下证据，用 Human Review 保证边界。
    </p>

    <p class="hero-description">
      把 Tool、Prompt、Resource、Provider、Trace Evidence、Human Review 与 Audit Log
      串成可展示、可解释、可验证的 AI Agent 项目作品集。
    </p>

    <div class="hero-actions" id="resume">
      <RouterLink class="hero-button hero-button--primary" to="/projects">
        查看核心项目
        <span class="button-icon" aria-hidden="true">→</span>
      </RouterLink>
      <a class="hero-button" href="#github">
        查看 GitHub
        <span class="button-icon" aria-hidden="true">↗</span>
      </a>
      <a class="hero-button hero-button--resume" href="#resume">
        <span class="button-icon" aria-hidden="true">↓</span>
        下载简历
      </a>
    </div>
  </section>
</template>
