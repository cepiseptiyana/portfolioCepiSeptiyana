<script setup>
import headSkill from './headSkill.vue'

import Icons from './Icons.vue'

let { pngSkill } = defineProps(['pngSkill'])
</script>

<template>
  <div id="skillsContent1" class="container">
    <div class="headSkill">
      <headSkill />
    </div>
    <div class="containerElement">
      <Icons :icon="pngSkill.iconHTML" head="HTML" time="6 months"></Icons>
      <Icons :icon="pngSkill.iconCSS" head="CSS" time="6 months"></Icons>
      <Icons :icon="pngSkill.iconJS" head="JAVASCRIPT" time="6 months"></Icons>
      <Icons :icon="pngSkill.iconVue" head="VUE.JS" time="6 months"></Icons>
      <Icons :icon="pngSkill.iconGithub" head="GITHUB" time="6 months"></Icons>
      <Icons :icon="pngSkill.iconPinia" head="PINIA" time="4 months"></Icons>
      <Icons :icon="pngSkill.iconVitest" head="VITEST" time="4 months"></Icons>
    </div>
  </div>
</template>
