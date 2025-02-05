<script setup>
let { text } = defineProps(['text'])
</script>
<template>
  <div class="paragraph">
    <p>{{ text }}</p>
  </div>
</template>
