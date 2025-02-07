<script setup>
import jumbotron from '@/components/elements/jumbotron/jumbotron.vue'
import imageRounded from '@/assets/images/jumbotron/imageRounded.png'

let text = {
  textChild_1: 'cepi septiyana',
  textChild_2: 'portfolio',
  textChild_3: 'Creative',
  textChild_4: '2025',
  imageRounded,
}
</script>

<template>
  <div class="container-fluid jumbotron bg-dark">
    <div class="container">
      <jumbotron :text="text" />
    </div>
  </div>
</template>
