<script setup>
const { textChild } = defineProps(['textChild'])
console.log(textChild)
</script>

<template>
  <h1>{{ textChild }}</h1>
</template>
