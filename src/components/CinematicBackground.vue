<script setup lang="ts">
const contourPaths = [
  'M0 620 C122 548 228 568 338 486 C460 396 560 438 674 312 C762 216 842 252 940 150 C1030 64 1124 86 1200 24',
  'M0 652 C124 582 236 596 358 520 C478 446 574 466 690 356 C786 266 864 296 970 190 C1056 112 1138 128 1200 70',
  'M26 680 C156 610 268 620 388 552 C506 486 604 500 724 404 C816 330 898 346 996 260 C1084 184 1154 196 1200 128',
  'M98 702 C210 640 318 654 430 590 C544 526 638 538 750 452 C850 376 926 394 1022 320 C1108 250 1164 264 1200 206',
  'M182 714 C286 666 384 676 494 620 C594 568 690 570 798 500 C900 432 970 446 1052 392 C1128 342 1174 354 1200 296',
  'M270 722 C370 688 460 690 560 646 C658 602 736 610 836 552 C924 500 994 506 1070 466 C1142 430 1182 440 1200 380',
]

const ridgePaths = [
  'M118 620 C232 548 316 538 418 470 C548 384 610 346 718 238 C808 148 876 118 942 76 C1012 34 1104 20 1200 6',
  'M180 682 C288 620 386 612 502 544 C606 482 688 444 780 360 C866 282 934 238 1030 194 C1096 164 1148 136 1200 108',
  'M40 716 C190 654 302 676 438 612 C554 558 666 520 788 446 C896 380 994 336 1100 300 C1144 284 1178 266 1200 246',
]

const energyPaths = [
  'M0 690 C190 650 284 612 392 548 C540 460 644 450 768 366 C904 274 1022 202 1200 138',
  'M0 720 C216 682 342 642 506 556 C654 478 760 470 908 392 C1018 334 1110 292 1200 260',
  'M140 720 C302 666 478 632 608 548 C742 462 842 426 998 358 C1084 320 1142 292 1200 268',
]

const particles = Array.from({ length: 180 }, (_, index) => {
  const x = 33 + ((index * 37) % 66)
  const wave = Math.sin(index * 1.55) * 12
  const y = 18 + ((index * 19) % 72) + wave
  const isGreen = index % 7 === 0 || index % 11 === 0
  const size = index % 13 === 0 ? 3.8 : index % 5 === 0 ? 2.4 : 1.2

  return {
    id: index,
    x: `${Math.min(99, Math.max(31, x))}%`,
    y: `${Math.min(94, Math.max(15, y))}%`,
    size: `${size}px`,
    color: isGreen ? 'rgba(89, 228, 122, 0.74)' : 'rgba(255, 121, 0, 0.72)',
    opacity: `${0.12 + ((index * 13) % 42) / 100}`,
    delay: `${-((index * 17) % 90) / 10}s`,
    duration: `${28 + (index % 8) * 3}s`,
  }
})
</script>

<template>
  <div class="cinematic-background" aria-hidden="true">
    <div class="terrain-halo" />

    <div class="terrain-field">
      <svg viewBox="0 0 1200 720" preserveAspectRatio="none">
        <defs>
          <linearGradient id="terrainFillWarm" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stop-color="#ff7900" stop-opacity="0" />
            <stop offset="46%" stop-color="#ff7900" stop-opacity="0.16" />
            <stop offset="100%" stop-color="#59e47a" stop-opacity="0.1" />
          </linearGradient>
          <linearGradient id="terrainFillCool" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stop-color="#59e47a" stop-opacity="0" />
            <stop offset="58%" stop-color="#59e47a" stop-opacity="0.11" />
            <stop offset="100%" stop-color="#ffb85b" stop-opacity="0.08" />
          </linearGradient>
        </defs>

        <g class="terrain-fill">
          <path d="M0 720 L0 642 C160 590 266 576 398 498 C548 410 624 346 742 226 C826 138 930 88 1044 54 C1110 34 1162 18 1200 0 L1200 720 Z" />
          <path d="M0 720 L0 700 C180 652 350 646 520 580 C680 516 772 446 912 352 C1034 270 1116 246 1200 210 L1200 720 Z" />
        </g>

        <g class="terrain-ridges">
          <path v-for="path in ridgePaths" :key="path" :d="path" />
        </g>

        <g class="terrain-lines">
          <path v-for="path in contourPaths" :key="path" :d="path" />
        </g>

        <g class="energy-lines">
          <path v-for="path in energyPaths" :key="path" :d="path" />
        </g>
      </svg>
    </div>

    <div class="light-river" />
    <div class="terrain-depth" />

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
