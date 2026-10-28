<script setup lang="ts">
import ProjectDetailTemplate from '../components/projects/ProjectDetailTemplate.vue'
import { giteaQualityDetail } from '../data/projectDetails'
</script>

<template>
  <ProjectDetailTemplate
    :detail="giteaQualityDetail"
    page-class="gitea-quality-detail-page"
    kicker="CASE STUDY 01 / OPEN-SOURCE SYSTEM QA"
    dossier-stage="LOCAL GITEA 28.2.0 / API + UI + DATA"
    dossier-description="证据来自固定版本 Gitea 的本地 Docker Compose 运行、JSON/JUnit/HTML 报告、浏览器截图和 GitHub Actions。测试目标是隔离开源实例，不是企业生产服务。"
    background-note="Gitea Quality Lab 用开源协作系统作为黑盒目标，覆盖认证、权限边界、仓库与 Issue 工作流、浏览器行为和重启持久化。"
    architecture-title="System Test Execution Chain"
    architecture-description="同一轮测试从隔离目标启动，经过 HTTP API 与浏览器断言，再验证容器重启后的数据状态，最后校验并上传机器可读报告。"
    :architecture-stages="['ISOLATED TARGET', 'API + BROWSER', 'PERSISTENCE + REPORT']"
    screenshot-intro="此截图来自本地 Gitea 28.2.0 接受运行，由 Playwright 实际完成创建仓库、创建 Issue、评论和关闭步骤；截图中的 qa-ui-9971cee7 仓库名带本次 run ID。"
  />
</template>
