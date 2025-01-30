<script setup>
let { label } = defineProps(['label'])
console.log(label)
</script>

<template>
  <label v-html="label" :for="label"></label>
</template>
