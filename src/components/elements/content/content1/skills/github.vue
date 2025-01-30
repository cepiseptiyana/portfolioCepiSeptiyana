<script setup>
let { iconGithub } = defineProps(['iconGithub'])
</script>

<template>
  <div class="container">
    <h6>GITHUB</h6>
    <img :src="iconGithub" alt="" />
    <h5>6 Months</h5>
  </div>
</template>
