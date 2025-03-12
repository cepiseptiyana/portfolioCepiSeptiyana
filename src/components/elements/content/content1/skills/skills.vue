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
      <Icons :icon="pngSkill.iconHTML" head="HTML"></Icons>
      <Icons :icon="pngSkill.iconCSS" head="CSS"></Icons>
      <Icons :icon="pngSkill.iconJS" head="JAVASCRIPT"></Icons>
      <Icons :icon="pngSkill.iconVue" head="VUE.JS"></Icons>
      <Icons :icon="pngSkill.iconGithub" head="GITHUB"></Icons>
      <Icons :icon="pngSkill.iconPinia" head="PINIA"></Icons>
      <Icons :icon="pngSkill.iconVitest" head="VITEST"></Icons>
    </div>
  </div>
</template>
