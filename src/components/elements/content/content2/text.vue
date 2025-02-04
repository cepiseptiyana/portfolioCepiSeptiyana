<script setup>
let { textProjectValue } = defineProps(['textProjectValue'])
</script>

<template>
  <div class="text">
    <h1>{{ textProjectValue }}</h1>
  </div>
</template>
