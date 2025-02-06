<script setup>
let { text } = defineProps(['text'])
</script>
<template>
  <div class="paragraph">
    <p class="text-light">{{ text }}</p>
  </div>
</template>
