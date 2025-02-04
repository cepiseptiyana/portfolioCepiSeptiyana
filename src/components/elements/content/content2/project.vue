<script setup>
let { projectCard } = defineProps(['projectCard'])
</script>

<template>
  <div class="container">
    <div class="dataProject" v-for="item in projectCard">
      <div class="textProject">
        <h1>{{ item.judul }}</h1>
        <p>{{ item.desc }}</p>
      </div>

      <div class="imgProject">
        <a href="">
          <img :src="item.image" alt="" title="Go To Web" />
        </a>
      </div>
    </div>
  </div>
</template>

<style></style>
