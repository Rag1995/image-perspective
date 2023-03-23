<script setup lang="ts">
const navbar = ref<HTMLElement>()
const { height } = useElementBounding(navbar)
const marginTop = computed(() => `${height.value}px`)
</script>

<template>
  <div class="view bg-body">
    <AppNavbar ref="navbar" class="view__navbar" />
    <main>
      <RouterView />
    </main>
    <AppFooter class="view__footer" />
  </div>
</template>

<style lang="postcss" scoped>
.view {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;

  min-height: 100vh;

  &__navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }

  &__navbar,
  &__footer {
    z-index: 10;
  }
}

main {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  align-items: stretch;
  justify-content: flex-start;

  margin-top: v-bind(marginTop);
}
</style>
