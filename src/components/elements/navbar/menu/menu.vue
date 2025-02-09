<script setup>
import feather from 'feather-icons'

// humburger
const align_right_icon = feather.icons['align-right'].toSvg({ color: '#0dcaf0' })
let humSlideShow = defineModel('humSlideShow')
let { movingPath } = defineProps(['movingPath'])
</script>
<template>
  <div id="menuNavbar">
    <div id="menu">
      <a class="btn btn-warning" href="">My Home</a>
      <a class="btn btn-warning" :href="movingPath.myProject">My Project</a>
      <a class="btn btn-warning" :href="movingPath.myContact">My Contact</a>
    </div>

    <div id="dropDown">
      <!-- humburger -->
      <a href="" @click.stop.prevent="humSlideShow">
        <span v-html="align_right_icon"></span>
      </a>

      <!-- menu -->
      <div class="menuDropMenu">
        <a href="">My Home</a>
        <a :href="movingPath.myProject">My Project</a>
        <a :href="movingPath.myContact">My Contact</a>
      </div>
    </div>
  </div>
</template>
