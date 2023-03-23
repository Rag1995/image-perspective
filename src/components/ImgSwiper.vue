<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperObj } from 'swiper'
import { Navigation, Pagination } from 'swiper'

import { usePerspectiveStore } from '@/store'

const store = usePerspectiveStore()
const { sliderIndex, x, y, radius, posX, posY } = toRefs(store)

const el = ref<HTMLElement>()
const { elementX, elementY, isOutside } = useMouseInElement(el)
watch([elementX, elementY], ([newX, newY]) => {
  if (isOutside.value) return
  x.value = newX
  y.value = newY
})

const onSwiperChange = (swiper: SwiperObj) => {
  sliderIndex.value = swiper.activeIndex
}

const list = ref([
  { innerImg: '/assets/img/Rag_Body.png', outerImg: '/assets/img/Rag_Clothes.png' },
  { innerImg: '/assets/img/Rag_Body.png', outerImg: '/assets/img/Rag_Body.png' },
  { innerImg: '/assets/img/Rag_Clothes.png', outerImg: '/assets/img/Rag_Clothes.png' },
])
</script>

<template>
  <Swiper ref="el" :initial-slide="sliderIndex" :navigation="true" :pagination="true" loop :modules="[Navigation, Pagination]" class="swiper" @slide-change="onSwiperChange">
    <template v-for="({ innerImg, outerImg }, idx) in list" :key="idx">
      <SwiperSlide>
        <div
          class="image image__inner" :style="{
            '--bg-img': `url(${innerImg})`,
          }"
        ></div>
        <div
          class="image image__outer silhouette" :style="{
            '--bg-img': `url(${outerImg})`,
          }"
        ></div>
      </SwiperSlide>
    </template>
    <Perspective class="perspective" />
  </Swiper>
</template>

<style lang="postcss" scoped>
.swiper {
  overflow: hidden;
  width: 100vw;

  &-slide {
    position: relative;
  }

}

.image {
  position: absolute;
  inset: 36px 0;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &__inner {
    background-image: var(--bg-img);
  }

  &__outer {
    background-image: var(--bg-img);
    mask: radial-gradient(circle v-bind(radius) at v-bind(posX) calc(v-bind(posY) - 36px), transparent 0 100%, black 100%);
  }
}

.perspective {
  z-index: 1;
}

.view[data-bs-theme=dark] {
  .swiper {
    --swiper-pagination-color: var(--bs-warning);
    --swiper-navigation-color: var(--bs-warning);
  }

  .silhouette {
    filter: contrast(0) brightness(0);
  }
}
</style>
