<script setup>
let { placeholderInput } = defineProps(['placeholderInput'])
</script>

<template>
  <input type="text" :placeholder="placeholderInput" :id="placeholderInput" autocomplete="off" />
</template>
