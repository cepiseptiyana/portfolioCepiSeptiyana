<script setup>
import project1 from '@/components/atoms/content/content2/project1.vue'
let { projectCard } = defineProps(['projectCard'])
</script>

<template>
  <div id="cardContent2" class="container">
    <project1 :projectCard="projectCard" />
  </div>
</template>
