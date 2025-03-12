<script setup>
let { cepiFoto } = defineProps(['cepiFoto'])
</script>
<template>
  <img class="cepiImg" :src="cepiFoto" alt="" />
</template>
