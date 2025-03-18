<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { CornerDownRight, ChevronDown } from "lucide-vue-next";
import { type IFilterItem, EFilterType } from "~/interface/IFilterItem";

defineProps<{
  items: IFilterItem[],
}>();
</script>

<template>
  <section class="relative mx-auto bottom-[40px] max-w-[1210px] w-full px-10">
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 relative shadow w-full">
      <template v-for="item of items">
        <div
            v-if="item.type === EFilterType.Select"
            class="bg-white px-[32px] py-[12px] border-r border-[#28252529]"
        >
          <div class="text-sm text-gray-500" v-text="item.value" />
          <div class="select flex justify-between items-center">
            <div class="text-[24px] text-[#282525]" v-text="item.placeholder" />
            <ChevronDown :size="22" :stroke-width="1" class="p-[2px] border border-[#28252566] rounded-[4px]" />
          </div>
        </div>

        <div
            v-if="item.type === EFilterType.Button"
            class="bg-[#282525] px-[42px] py-[22px] flex justify-center items-center"
        >
          <Button variant="link" class="text-white text-[24px] font-normal">
            {{ item.value }}
            <div class="bg-[#FDC300] rounded-[4px] p-[3px] w-full h-full">
              <CornerDownRight :size="22" :stroke-width="1.25" class="text-black" />
            </div>
          </Button>
        </div>
      </template>
    </div>
  </section>
</template>
