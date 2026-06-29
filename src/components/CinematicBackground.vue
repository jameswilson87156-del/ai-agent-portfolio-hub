<script setup lang="ts">
const particles = Array.from({ length: 42 }, (_, index) => {
  const x = 46 + ((index * 29) % 52)
  const wave = Math.sin(index * 1.32) * 9
  const y = 14 + ((index * 17) % 78) + wave
  const isGreen = index % 5 === 0 || index % 11 === 0
  const size = index % 12 === 0 ? 3 : index % 4 === 0 ? 2 : 1.2

  return {
    id: index,
    x: `${Math.min(98, Math.max(42, x))}%`,
    y: `${Math.min(92, Math.max(10, y))}%`,
    size: `${size}px`,
    color: isGreen ? 'rgba(89, 228, 122, 0.64)' : 'rgba(255, 121, 0, 0.62)',
    opacity: `${0.1 + ((index * 11) % 28) / 100}`,
    delay: `${-((index * 13) % 70) / 10}s`,
    duration: `${34 + (index % 7) * 4}s`,
  }
})
</script>

<template>
  <div class="cinematic-background" aria-hidden="true">
    <div class="terrain-artwork" />
    <div class="artwork-dim" />
    <div class="terrain-atmosphere" />

    <span
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="{
        '--px': particle.x,
        '--py': particle.y,
        '--ps': particle.size,
        '--pc': particle.color,
        '--po': particle.opacity,
        '--particle-delay': particle.delay,
        '--particle-duration': particle.duration,
      }"
    />
  </div>
</template>
