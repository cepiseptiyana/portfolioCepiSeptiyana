<script setup>
import textJumbotron from './text.vue'

const { text } = defineProps(['text'])
console.log(text.textChild_1)
</script>

<template>
  <div class="container bg-warning">
    <div>
      <textJumbotron :textChild="text.textChild_1" />
    </div>
    <div>
      <textJumbotron :textChild="text.textChild_2" />
    </div>
    <div>
      <textJumbotron :textChild="text.textChild_3" />
    </div>
    <div>
      <textJumbotron :textChild="text.textChild_4" />
    </div>
    <div>
      <img :src="text.imageRounded" alt="" />
    </div>
  </div>
</template>
