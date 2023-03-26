export const usePerspectiveStore = defineStore('perspective', () => {
  const x = ref(0)
  const y = ref(0)
  const r = ref(35)
  const rMax = ref(150)
  const rMin = ref(25)

  const posX = computed(() => `${x.value}px`)
  const posY = computed(() => `${y.value}px`)
  const radius = computed(() => `${r.value}px`)

  return { x, y, r, rMax, rMin, posX, posY, radius }
})
