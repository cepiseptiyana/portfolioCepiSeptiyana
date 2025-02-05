<script setup>
let { label } = defineProps(['label'])
</script>

<template>
  <label :for="label" class="text-secondary">{{ label }}</label>
</template>
