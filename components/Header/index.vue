<script setup lang="ts">
import { CornerDownRight } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import type { IMenuItem, IPromo } from "~/interface";
import BurgerIcon from "~/assets/icons/BurgerIcon.vue";
import Promo from './promo.vue';

defineProps<{
  logo: string,
  menuItems: IMenuItem[],
  promo?: IPromo,
}>();
</script>

<template>
  <header class="fixed z-10 w-full">
    <Promo v-if="promo" :text="promo.text" :badge="promo.badge" />

    <div class="mx-[40px] my-[12px] flex justify-between items-center">
      <slot name="logo">
        <img :src="logo" />
      </slot>

      <slot name="menu">
        <div class="flex text-white gap-[20px]">
          <Button
            v-for="(item, idx) of menuItems"
            :idx="`btn${idx}`"
            :variant="item.type"
            :class="item.class"
            class="font-normal p-0 text-[16px] hidden sm:flex"
            @click="item.callback"
          >
            {{ item.name }}
            <div v-if="item.icon" class="bg-[#FDC300] rounded-[4px] p-[3px]">
              <CornerDownRight :size="22" :stroke-width="1.25" class="text-black" />
            </div>
          </Button>

          <button>
            <BurgerIcon class="ml-[12px]" />
          </button>
        </div>
      </slot>
    </div>
  </header>
</template>
