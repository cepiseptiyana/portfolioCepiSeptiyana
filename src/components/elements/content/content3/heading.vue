<script setup>
let { judulText } = defineProps(['judulText'])
</script>

<template>
  <h1 v-html="judulText" class="judulForm"></h1>
</template>
