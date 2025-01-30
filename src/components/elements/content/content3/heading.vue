<script setup>
let { judulText } = defineProps(['judulText'])
</script>

<template>
  <h1 v-html="judulText"></h1>
</template>
