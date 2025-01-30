<script setup>
let { label } = defineProps(['label'])
</script>

<template>
  <label v-html="label" :for="label"></label>
</template>
