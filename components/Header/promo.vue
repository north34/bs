<script setup lang="ts">
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { X } from 'lucide-vue-next';
import type { IPromo } from "~/interface";

const isOpen = ref(true);

defineProps<IPromo>();
</script>

<template>
  <div v-if="isOpen" class="relative bg-white h-[42px] px-[12px] w-full flex justify-start sm:justify-center items-center">
    <button class="absolute top-[10px] right-[12px] sm:right-[40px]" @click="isOpen = false">
      <X :size="22" :stroke-width="1" class="p-[2px] border border-[#28252566] rounded-[4px]" />
    </button>

    <div class="flex justify-center items-center gap-[10px] sm:gap-[20px]">
      <Badge
          v-if="badge"
          class="bg-[#FDC300] hover:bg-[#FDC300] rounded-[4px] px-[8px] py-[2.5px]
          text-[#282525] font-normal text-[12px] hover:unset"
      >
        {{ badge }}
      </Badge>

      <Button
          variant="link"
          class="underline hover:no-underline font-normal p-0 text-[12px] sm:text-[16px]"
      >
        {{ text }}
      </Button>
    </div>
  </div>
</template>
