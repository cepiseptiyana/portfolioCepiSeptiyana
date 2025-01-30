<script setup>
let { logoWisuda } = defineProps(['logoWisuda'])
</script>

<template>
  <div id="headingContent1" class="container">
    <div class="container" style="display: flex">
      <img :src="logoWisuda" alt="" />
      <h1>cepi septiyana</h1>
    </div>
    <p>I'M web developer</p>
  </div>
</template>
