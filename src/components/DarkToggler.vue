<script setup lang="ts">
import RiMoonClearFill from '~icons/ri/moon-clear-fill'
import RiSunFill from '~icons/ri/sun-fill'
import { useThemeStore } from '@/store'

const store = useThemeStore()
const { isDark, disableToggle } = toRefs(store)
const { toggleDark } = store
</script>

<template>
  <BaseNavLink type="button" :class="{ disabled: disableToggle }" @click="toggleDark()">
    <template #prefix-icon>
      <template v-if="isDark">
        <RiMoonClearFill />
      </template>
      <template v-else>
        <RiSunFill />
      </template>
    </template>

    <template v-if="isDark">
      Dark
    </template>
    <template v-else>
      Light
    </template>
  </BaseNavLink>
</template>
