<script setup>
let { iconVue } = defineProps(['iconVue'])
</script>

<template>
  <div class="container">
    <h6>VUE.JS</h6>
    <img :src="iconVue" alt="" />
    <h5>6 Months</h5>
  </div>
</template>
