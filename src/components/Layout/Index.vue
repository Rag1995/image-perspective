<script setup lang="ts">
</script>

<template>
  <div class="view">
    <AppNavbar class="view__navbar" />
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
}

main {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  align-items: stretch;
  justify-content: flex-start;
}
</style>
