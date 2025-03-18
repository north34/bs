<script setup lang="ts">
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { X } from 'lucide-vue-next';
import type { IPromo } from "~/interface";

const isOpen = ref(true);

defineProps<IPromo>();
</script>

<template>
  <div v-if="isOpen" class="relative bg-white h-[42px] w-full flex justify-center items-center">
    <button class="absolute top-[10px] right-[40px]" @click="isOpen = false">
      <X :size="22" :stroke-width="1" class="p-[2px] border border-[#28252566] rounded-[4px]" />
    </button>

    <div class="flex justify-center items-center gap-[20px]">
      <Badge
          v-if="badge"
          class="bg-[#FDC300] hover:bg-[#FDC300] rounded-[4px] px-[8px] py-[2.5px]
          text-[#282525] font-normal hover:unset"
      >
        {{ badge }}
      </Badge>

      <Button
          variant="link"
          class="underline hover:no-underline font-normal p-0"
      >
        {{ text }}
      </Button>
    </div>
  </div>
</template>
