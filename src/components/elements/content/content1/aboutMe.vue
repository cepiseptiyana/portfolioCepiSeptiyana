<script setup>
const { aboutText } = defineProps(['aboutText'])
</script>

<template>
  <h1 class="text-dark">{{ aboutText.head }}</h1>
  <p class="text-light">{{ aboutText.paragraph }}</p>
</template>
