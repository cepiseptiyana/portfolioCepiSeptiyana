<script setup>
let { projectCard } = defineProps(['projectCard'])
</script>

<template>
  <div v-for="image in projectCard" class="card">
    <img :src="image.image" alt="" />
    <div class="card-body">
      <h6 class="card-title text-center">{{ image.judul }}</h6>
      <a :href="image.link">open Web</a>
    </div>
  </div>
</template>
