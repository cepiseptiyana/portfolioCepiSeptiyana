<script setup>
import textProject from '@/components/elements/content/content2/text.vue'
import project from '@/components/elements/content/content2/project.vue'

let textProjectValue = {
  judul: 'My project',
  footer: 'Shift + Scroll',
}
let { projectCard } = defineProps(['projectCard'])
</script>

<template>
  <div id="content2" class="bg-dark">
    <textProject :textProjectValue="textProjectValue.judul" />
    <project :projectCard="projectCard" />
    <textProject :textProjectValue="textProjectValue.footer" />
  </div>
</template>
