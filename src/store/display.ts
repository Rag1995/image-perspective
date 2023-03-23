export const useDisplayStore = defineStore('display', () => {
  const breakpoints = useBreakpoints({
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  })

  return { breakpoints }
})
