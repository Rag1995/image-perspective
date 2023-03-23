<script setup lang="ts">
// import IconSearch from '~icons/material-symbols/location-searching-rounded'

import { usePerspectiveStore } from '@/store'
const store = usePerspectiveStore()
const { radius, posX, posY } = toRefs(store)
</script>

<template>
  <!-- <IconSearch /> -->
  <div class="unplugin-icon"></div>
</template>

<style lang="postcss" scoped>
.unplugin-icon {
  position: absolute;
  top: v-bind(posY);
  left: v-bind(posX);
  transform: translateX(-50%) translateY(-50%);

  aspect-ratio: 1/1;
  width: calc(2 * v-bind(radius));

  font-size: calc(2.2 * v-bind(radius));
  line-height: 1;
  color: red;

  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.25));
  border-color: red;
  border-style: solid;
  border-width: .5rem;
  border-radius: 50%;
}

.view[data-bs-theme=dark] {
  .unplugin-icon {
    color: var(--bs-warning);
    border-color: var(--bs-warning);
  }
}
</style>
