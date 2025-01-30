<script setup>
import contact from '../contact/contact.vue'

import feather from 'feather-icons'
// humburger
const align_right_icon = feather.icons['align-right'].toSvg()
let humSlideShow = defineModel('humSlideShow')
let { movingPath } = defineProps(['movingPath'])
</script>
<template>
  <div id="menuNavbar">
    <div id="menu">
      <a href="">My Home</a>
      <a :href="movingPath.myProject">My Project</a>
      <a :href="movingPath.mySkill">My Skill</a>
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
        <a :href="movingPath.mySkill">My Skill</a>
        <contact />
      </div>
    </div>
  </div>
</template>
