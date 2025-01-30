<script setup>
let { iconHTML } = defineProps(['iconHTML'])
</script>

<template>
  <div class="container">
    <h6>HTML</h6>
    <img class="html" :src="iconHTML" alt="" />
    <h5>6 Months</h5>
  </div>
</template>
