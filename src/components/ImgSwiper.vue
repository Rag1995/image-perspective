<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperObj } from 'swiper'
import { Navigation, Pagination } from 'swiper'

import { useImgStore } from '@/store'

import { usePerspectiveStore } from '@/store'

const store = usePerspectiveStore()
const { x, y, radius, posX, posY } = toRefs(store)

const el = ref<HTMLElement>()
const { elementX, elementY, isOutside } = useMouseInElement(el)
watch([elementX, elementY], ([newX, newY]) => {
  if (isOutside.value) return
  x.value = newX
  y.value = newY
})

const imgStore = useImgStore()
const { imgIndex, imgList } = toRefs(imgStore)

const onSwiperChange = (swiper: SwiperObj) => {
  imgIndex.value = swiper.activeIndex
}
</script>

<template>
  <Swiper ref="el" :initial-slide="imgIndex" navigation pagination loop :modules="[Navigation, Pagination]" class="swiper" @slide-change="onSwiperChange">
    <SwiperSlide v-for="({ innerImg, outerImg }, idx) in imgList" :key="idx">
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
    <Perspective class="perspective" />
  </Swiper>
</template>

<style lang="postcss" scoped>
.swiper {
  width: 100%;
  min-height: 100%;
  max-height: 100%;
}

.image {
  position: absolute;
  inset: 0;

  background-image: var(--bg-img);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &__inner {
    z-index: 1;
    mask: radial-gradient(circle v-bind(radius) at v-bind(posX) v-bind(posY), black 0 100%, transparent 100%);
  }

  &__outer {
    z-index: 2;
    mask: radial-gradient(circle v-bind(radius) at v-bind(posX) v-bind(posY), transparent 0 100%, black 100%);
  }
}

.perspective {
  z-index: 3;
}

:deep {
  .swiper-slide {
    position: relative;
  }

  .view[data-bs-theme="dark"] {
    .swiper {
      --swiper-pagination-color: var(--bs-warning);
      --swiper-navigation-color: var(--bs-warning);
    }

    .swiper-slide {
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
    }

    .silhouette {
      /* filter: contrast(0) brightness(0); */
    }
  }
}
</style>
