<script setup>
let { cepiFoto } = defineProps(['cepiFoto'])
</script>
<template>
  <img :src="cepiFoto" alt="" />
</template>
