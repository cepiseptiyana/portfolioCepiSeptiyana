<script setup>
let { gundam } = defineProps(['gundam'])
console.log(gundam)
</script>

<template>
  <img :src="gundam" alt="" />
</template>
