<script setup>
import jumbotron from '@/components/organisms/jumbtoron/jumbotron.vue'
import navbar from '@/components/organisms/navbar/navbar.vue'
import content1 from '@/components/organisms/content/content1.vue'
import content2 from '@/components/organisms/content/content2.vue'
import content3 from '@/components/organisms/content/content3.vue'
import SocialMedia from '../organisms/SocialMedia.vue'

// script navbar
// script content2

import { projectCard } from '@/services/content2Service/index'
</script>

<template>
  <!-- navbar -->
  <navbar />

  <!-- social media -->
  <SocialMedia />

  <!-- jumbotron -->
  <jumbotron />
  <!-- content 1 -->
  <content1 />
  <!-- content 2 -->
  <content2 :projectCard="projectCard" />
  <!-- content 3 -->
  <content3 />
  <!-- footer -->
</template>
