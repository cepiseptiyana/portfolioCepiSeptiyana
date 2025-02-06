<script setup>
let { textProjectValue } = defineProps(['textProjectValue'])
</script>

<template>
  <div class="text">
    <h1 class="text-dark">{{ textProjectValue }}</h1>
  </div>
</template>
