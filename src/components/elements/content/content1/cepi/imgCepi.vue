<script setup>
let { cepiFoto } = defineProps(['cepiFoto'])
</script>
<template>
  <img class="cepiImg rounded-circle" :src="cepiFoto" alt="" />
</template>
