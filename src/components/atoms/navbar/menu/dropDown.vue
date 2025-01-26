<script setup>
import feather from 'feather-icons'
const align_right_icon = feather.icons['align-right'].toSvg()

let humSlideShow = defineModel('humSlideShow')
</script>

<template>
  <div id="dropDown">
    <a href="" @click.stop.prevent="humSlideShow">
      <span v-html="align_right_icon"></span>
    </a>

    <div class="menuDropMenu">
      <a href="">My Home</a>
      <a href="#MyProject">My Project</a>
      <a href="#MySkill">My Skill</a>
    </div>
  </div>
</template>
