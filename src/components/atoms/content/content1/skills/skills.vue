<script setup>
import headSkill from './headSkill.vue'
import htmlAtom from './html.vue'
import skillCssAtom from './skillCss.vue'
import skillJsAtom from './skillJs.vue'
import skillVueAtom from './skillVue.vue'
import github from './github.vue'

let { pngSkill } = defineProps(['pngSkill'])
</script>

<template>
  <div id="skillsContent1" class="container">
    <div class="headSkill">
      <headSkill />
    </div>
    <div class="containerElement">
      <htmlAtom :iconHTML="pngSkill.iconHTML" />
      <skillCssAtom :iconCSS="pngSkill.iconCSS" />
      <skillJsAtom :iconJS="pngSkill.iconJS" />
      <skillVueAtom :iconVue="pngSkill.iconVue" />
      <github :iconGithub="pngSkill.iconGithub" />
    </div>
  </div>
</template>
