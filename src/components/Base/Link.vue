<script setup lang="ts">
import { useThemeStore } from '@/store'
const store = useThemeStore()
const { isDark } = toRefs(store)
</script>

<template>
  <a :class="isDark ? 'link-warning' : 'link-primary'">
    <slot></slot>
  </a>
</template>
