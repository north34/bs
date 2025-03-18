<script setup>
defineProps({
  color: {
    type: String,
    default: 'white',
  },
});
</script>

<template>
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="16" x2="40" y2="16" :stroke="color"/>
    <line y1="23" x2="40" y2="23" :stroke="color"/>
  </svg>
</template>
