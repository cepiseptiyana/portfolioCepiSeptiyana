<script setup>
let { icon } = defineProps({
  icon: String,
  head: String,
})
</script>

<template>
  <div class="wrapper__icon">
    <h6>{{ head }}</h6>
    <img :src="icon" alt="" />
    <h5>6 Months</h5>
  </div>
</template>
