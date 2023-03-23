<script setup lang="ts">
import { useThemeStore } from '@/store'
import Layout from './components/Layout/Index.vue'
const store = useThemeStore()
const { disableToggle, isDark } = toRefs(store)
</script>

<template>
  <Transition
    mode="in-out"
    @before-enter="disableToggle = true"
    @after-leave="disableToggle = false"
  >
    <Layout v-if="isDark" data-bs-theme="dark" />
    <Layout v-else data-bs-theme="light" />
  </Transition>
</template>

<style lang="postcss" scoped>
.v {
  &-enter-active,
  &-leave-active {
    position: absolute;
  }

  &-enter-active {
    z-index: 10;
    inset: 0;
    animation: slide .35s;
  }

  &-leave-active {
    z-index: -1;
  }
}

@keyframes slide {
  from {
    clip-path: inset(0 0 0 100%)
  }

  to {
    clip-path: inset(0 0 0 0);
  }
}
</style>
