<script setup lang="ts">
const blocks: Record<string, any> = {
  FirstBlock: defineAsyncComponent(() => import('@/components/Blocks/FirstBlock/index.vue')),
  Filter: defineAsyncComponent(() => import('@/components/Blocks/Filter/index.vue')),
};

const { data } = await useFetch('/api/test');
</script>

<template>
  <main class="page">
    <component
      v-for="(item, idx) of data"
      :is="blocks[item.block]"
      :key="idx"
      v-bind="{ ...item.data }"
    />
  </main>
</template>
