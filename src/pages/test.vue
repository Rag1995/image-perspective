<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

import { useImgStore } from '@/store'

const store = useImgStore()
const { imgList } = store
</script>

<template>
  <Swiper ref="el" navigation pagination loop :modules="[Navigation, Pagination]" class="swiper">
    <template v-for="({ innerImg, outerImg }, idx) in imgList" :key="idx">
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
  </Swiper>
</template>

<style lang="postcss" scoped>
.swiper {
  width: 100%;
  height: 400px;

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

      /* mask: radial-gradient(circle v-bind(radius) at v-bind(posX) calc(v-bind(posY) - 36px), transparent 0 100%, black 100%); */
    }
  }
}
</style>
