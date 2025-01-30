<script setup>
import navbar from '@/components/organisms/navbar/navbar.vue'
import content1 from '@/components/organisms/content/content1.vue'
import content2 from '@/components/organisms/content/content2.vue'

// script navbar
// script content2

import { projectCard } from '@/services/content2Service/index'
</script>

<template>
  <!-- navbar -->
  <navbar />
  <!-- content 1 -->
  <content1 />
  <!-- content 2 -->
  <content2 :projectCard="projectCard" />
  <!-- footer -->
</template>
