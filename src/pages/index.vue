<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'
import { usePerspectiveStore, useThemeStore } from '@/store'
import { getRandom } from '@/utils'

const store = usePerspectiveStore()
const { r, rMax, rMin, x, y } = toRefs(store)

const themeStore = useThemeStore()
const { isDark } = toRefs(themeStore)

const el = ref<HTMLElement>()
const { height, width } = useElementBounding(el)
const moveRandom = () => {
  const curX = ref(x.value)
  const curY = ref(y.value)

  const transX = useTransition(curX, {
    duration: 750,
    transition: TransitionPresets.easeInOutCubic,
  })
  const transY = useTransition(curY, {
    duration: 750,
    transition: TransitionPresets.easeInOutCubic,
  })

  watch(transX, (newVal) => {
    x.value = newVal
  })
  watch(transY, (newVal) => {
    y.value = newVal
  })

  curX.value = getRandom(0, width.value)
  curY.value = getRandom(0, height.value)
}
</script>

<template>
  <div ref="el" class="swiper-container">
    <ImgSwiper />
  </div>

  <div class="py-4">
    <div class="container text-center">
      <div class="d-flex flex-nowrap justify-content-center align-items-center gap-3">
        <button type="button" class="btn btn-sm text-nowrap" :class="isDark ? 'btn-warning' : 'btn-primary'" @click="moveRandom()">
          隨機位置
        </button>
        <label for="radius" class="text-nowrap text-body">透鏡大小</label>
        <input
          id="radius"
          v-model="r"
          type="range"
          :min="rMin"
          :max="rMax"
          :step="1"
          class="form-range"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.swiper-container {
  display: flex;
  flex: 1 0 400px;
  flex-flow: row nowrap;
  align-items: stretch;
}
</style>
