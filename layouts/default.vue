<script setup lang="ts">
import HandsetIcon from "~/assets/icons/HandsetIcon.vue";
import { logo, menuItems, promo } from "~/constants/header";
</script>

<template>
  <div class="layout relative">
    <Header :logo :menuItems :promo />

    <slot />

    <button class="fixed bottom-[20px] z-50 right-10 p-[13px] bg-[#FDC300] rounded-full">
      <div class="absolute inset-0 m-auto animate-ping rounded-full bg-[#FDC300] opacity-20" />
      <HandsetIcon />
    </button>
  </div>
</template>
