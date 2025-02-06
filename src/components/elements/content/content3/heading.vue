<script setup>
let { judulText } = defineProps(['judulText'])
</script>

<template>
  <h1 v-html="judulText" class="judulForm text-dark"></h1>
</template>
