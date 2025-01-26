<script setup>
import headSkill from '@/components/atoms/content/content1/headSkill.vue'
import htmlAtom from '@/components/atoms/content/content1/html.vue'
import skillCssAtom from '@/components/atoms/content/content1/skillCss.vue'
import skillJsAtom from '@/components/atoms/content/content1/skillJs.vue'
import skillVueAtom from '@/components/atoms/content/content1/skillVue.vue'
import github from '@/components/atoms/content/content1/github.vue'
</script>

<template>
  <div id="skillsContent1" class="container">
    <div class="headSkill">
      <headSkill />
    </div>
    <div class="containerElement">
      <htmlAtom />
      <skillCssAtom />
      <skillJsAtom />
      <skillVueAtom />
      <github />
    </div>
  </div>
</template>
