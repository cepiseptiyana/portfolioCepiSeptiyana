<script setup>
import heading from '@/components/elements/content/content2/heading.vue'
import project1 from '@/components/elements/content/content2/project1.vue'
let { projectCard } = defineProps(['projectCard'])
</script>

<template>
  <div id="content2" class="container-fluid">
    <div class="container">
      <div class="colom-1">
        <heading />
      </div>
      <div class="colom-2">
        <project1 :projectCard="projectCard" />
      </div>
    </div>
  </div>
</template>
