<script setup lang="ts">
const contourPaths = [
  'M18 540 C140 476 210 492 310 426 C430 348 516 390 628 282 C720 194 806 234 920 150 C1010 86 1110 106 1190 58',
  'M0 585 C128 512 224 522 318 454 C438 366 528 416 642 306 C726 224 816 268 930 176 C1024 102 1126 126 1200 82',
  'M24 618 C150 552 238 548 348 482 C458 414 536 446 660 340 C748 264 838 292 956 206 C1048 142 1128 154 1200 116',
  'M92 632 C196 574 280 594 384 518 C494 438 584 474 690 378 C780 298 884 316 986 238 C1082 166 1142 184 1200 150',
  'M150 652 C250 598 340 616 430 556 C544 480 620 510 726 414 C812 336 912 356 1012 280 C1100 214 1158 224 1200 190',
  'M236 662 C328 610 406 632 504 574 C600 516 680 536 778 452 C872 372 948 396 1042 326 C1116 270 1168 280 1200 240',
  'M300 678 C392 632 470 646 560 592 C650 540 730 556 826 482 C914 416 982 426 1062 372 C1136 320 1178 332 1200 292',
  'M358 690 C450 654 520 662 612 616 C700 570 780 584 870 520 C950 462 1018 468 1084 424 C1148 382 1182 392 1200 352',
  'M432 700 C520 672 588 674 672 640 C756 606 822 610 906 562 C986 516 1040 520 1098 486 C1154 454 1188 462 1200 428',
]

const particles = Array.from({ length: 110 }, (_, index) => {
  const x = 28 + ((index * 37) % 70)
  const wave = Math.sin(index * 1.7) * 9
  const y = 24 + ((index * 19) % 70) + wave
  const isGreen = index % 7 === 0 || index % 11 === 0
  const size = index % 9 === 0 ? 3.4 : index % 5 === 0 ? 2.4 : 1.35

  return {
    id: index,
    x: `${Math.min(98, Math.max(24, x))}%`,
    y: `${Math.min(94, Math.max(18, y))}%`,
    size: `${size}px`,
    color: isGreen ? 'rgba(89, 228, 122, 0.82)' : 'rgba(255, 121, 0, 0.78)',
    opacity: `${0.22 + ((index * 13) % 50) / 100}`,
    delay: `${-((index * 17) % 90) / 10}s`,
    duration: `${16 + (index % 8) * 2}s`,
  }
})
</script>

<template>
  <div class="cinematic-background" aria-hidden="true">
    <div class="terrain-field">
      <svg class="terrain-lines" viewBox="0 0 1200 720" preserveAspectRatio="none">
        <path v-for="path in contourPaths" :key="path" :d="path" />
      </svg>
    </div>

    <div class="light-river" />

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
