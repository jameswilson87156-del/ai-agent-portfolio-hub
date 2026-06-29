import { onMounted, onUnmounted, type Ref } from 'vue'

type PointerState = {
  x: number
  y: number
  targetX: number
  targetY: number
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)')

export function useParallax(target: Ref<HTMLElement | null>) {
  const state: PointerState = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  }

  let mediaQuery: MediaQueryList | undefined
  let frame = 0
  let listening = false

  const setVars = (x: number, y: number) => {
    const element = target.value
    if (!element) {
      return
    }

    element.style.setProperty('--parallax-x', x.toFixed(4))
    element.style.setProperty('--parallax-y', y.toFixed(4))
  }

  const tick = () => {
    state.x += (state.targetX - state.x) * 0.09
    state.y += (state.targetY - state.y) * 0.09
    setVars(state.x, state.y)

    if (
      Math.abs(state.targetX - state.x) > 0.002 ||
      Math.abs(state.targetY - state.y) > 0.002
    ) {
      frame = window.requestAnimationFrame(tick)
      return
    }

    frame = 0
  }

  const requestTick = () => {
    if (frame === 0) {
      frame = window.requestAnimationFrame(tick)
    }
  }

  const handlePointerMove = (event: PointerEvent) => {
    const width = Math.max(window.innerWidth, 1)
    const height = Math.max(window.innerHeight, 1)

    state.targetX = (event.clientX / width - 0.5) * 2
    state.targetY = (event.clientY / height - 0.5) * 2
    requestTick()
  }

  const reset = () => {
    state.targetX = 0
    state.targetY = 0
    requestTick()
  }

  const startListening = () => {
    if (listening || mediaQuery?.matches) {
      reset()
      return
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', reset)
    listening = true
  }

  const stopListening = () => {
    if (!listening) {
      return
    }

    window.removeEventListener('pointermove', handlePointerMove)
    window.removeEventListener('pointerleave', reset)
    listening = false
  }

  const handleMotionPreference = () => {
    if (mediaQuery?.matches) {
      stopListening()
      state.x = 0
      state.y = 0
      state.targetX = 0
      state.targetY = 0
      setVars(0, 0)

      if (frame) {
        window.cancelAnimationFrame(frame)
        frame = 0
      }
      return
    }

    startListening()
  }

  onMounted(() => {
    mediaQuery = prefersReducedMotion()
    setVars(0, 0)
    handleMotionPreference()
    mediaQuery.addEventListener('change', handleMotionPreference)
  })

  onUnmounted(() => {
    stopListening()
    mediaQuery?.removeEventListener('change', handleMotionPreference)

    if (frame) {
      window.cancelAnimationFrame(frame)
    }
  })
}
