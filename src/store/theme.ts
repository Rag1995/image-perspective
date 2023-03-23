export const useThemeStore = defineStore('theme', () => {
  const isDark = useDark({
    selector: 'html',
    attribute: 'data-bs-theme',
    valueDark: 'dark',
    valueLight: 'light',
  })
  const toggle = useToggle(isDark)
  const disableToggle = ref(false)

  const toggleDark = () => {
    if (disableToggle.value) return
    toggle()
  }

  return { isDark, toggleDark, disableToggle }
})
