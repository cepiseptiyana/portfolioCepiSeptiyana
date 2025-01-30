<script setup>
let { iconCSS } = defineProps(['iconCSS'])
</script>

<template>
  <div class="container">
    <h6>CSS</h6>
    <img :src="iconCSS" alt="" />
    <h5>6 Months</h5>
  </div>
</template>
