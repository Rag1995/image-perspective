<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'
import { usePerspectiveStore } from '@/store'
import { useRandom } from '@/utils'

const store = usePerspectiveStore()
const { r, rMax, rMin, x, y } = toRefs(store)

const el = ref<HTMLElement>()
const { height, width } = useElementBounding(el)
const doRandom = () => {
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

  curX.value = useRandom(0, width.value)
  curY.value = useRandom(0, height.value)
}
</script>

<template>
  <ImgSwiper ref="el" class="img-swiper" />

  <div class="bg-dark-subtle py-4">
    <div class="container text-center">
      <div class="d-flex flex-nowrap justify-content-center align-items-center gap-3">
        <button type="button" class="btn btn-warning btn-sm text-nowrap" @click="doRandom()">
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
.img-swiper {
  flex: 1 0 400px;
}

/* stylelint-disable-next-line selector-max-id */
#radius {
  flex: 0 1 400px;
}
</style>
