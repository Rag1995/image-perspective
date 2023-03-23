<script setup lang="ts">

</script>

<template>
  <a class="nav-link fs-5 fs-sm-6">
    <slot name="prefix-icon"></slot>
    <span class="d-none d-sm-block">
      <slot></slot>
    </span>
  </a>
</template>

<style lang="postcss" scoped>
.nav-link {
  user-select: none;

  display: flex;
  flex-flow: row nowrap;
  gap: .25rem;
  align-items: center;
  justify-content: center
}
</style>
