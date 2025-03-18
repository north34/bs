<script setup lang="ts">
import { gsap } from 'gsap';

const onLoaded = () => {
  try {
    gsap.to('.animated-image', {
      width: '100%',
      duration: 2,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  } catch {
  }
};

defineProps<{
  mainImage: string,
  titleImage?: string,
  images?: string[],
}>();
</script>

<template>
  <section class="relative w-full h-screen">
    <div class="absolute overflow-hidden w-full h-full">
      <NuxtImg
          :src="mainImage"
          class="object-cover w-screen h-full max-w-none"
          @load="onLoaded"
      />
    </div>

    <template v-if="Array.isArray(images)">
      <div
        v-for="(image, idx) of [ ...images, mainImage ]"
        :key="`image${idx}`"
        class="animated-image absolute overflow-hidden w-0 h-full"
      >
        <NuxtImg
          :src="image"
          class="object-cover w-screen h-full max-w-none"
        />
      </div>
    </template>

    <div v-if="titleImage"
         class="animated-image absolute bottom-20 overflow-hidden w-0 flex justify-center items-center">
      <img
        :src="titleImage"
        class="object-cover w-screen h-full max-w-[1360px] px-[40px]"
      />
    </div>
  </section>
</template>
