<script setup>
import project1 from '@/components/atoms/content/content2/project1.vue'
import imagePangsit from '@/assets/images/content2/imagePangsit.png'
import imageYuns from '@/assets/images/content2/imageYuns.png'

let projectCard = [
  {
    image: imagePangsit,
    judul: 'Lading Page',
    link: 'https://cepiseptiyana.github.io/Pangcuy/',
  },
  {
    image: imageYuns,
    judul: 'Online Shop',
    link: '',
  },
]
</script>

<template>
  <div id="cardContent2" class="container">
    <project1 :projectCard="projectCard" />
  </div>
</template>
