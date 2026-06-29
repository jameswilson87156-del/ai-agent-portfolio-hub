<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  payload: string
}>()

const lines = computed(() => props.payload.split('\n'))
</script>

<template>
  <article class="json-window" aria-label="JSON-RPC tool call 代码窗口">
    <div class="window-bar">
      <span class="window-dot window-dot--red" />
      <span class="window-dot window-dot--yellow" />
      <span class="window-dot window-dot--green" />
      <span class="window-title">tool_call.json</span>
    </div>

    <pre class="code-block"><span
      v-for="(line, index) in lines"
      :key="`${index}-${line}`"
      class="code-line"
    ><span class="line-number">{{ index + 1 }}</span><code class="line-code">{{ line }}</code></span></pre>
  </article>
</template>
