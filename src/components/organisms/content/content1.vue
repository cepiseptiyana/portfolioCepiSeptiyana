<script setup>
import heading from '@/components/elements/content/content1/heading/heading.vue'
import imgCepi from '@/components/elements/content/content1/cepi/imgCepi.vue'
import skills from '@/components/elements/content/content1/skills/skills.vue'
import aboutMe from '@/components/elements/content/content1/aboutMe.vue'

// png:imgCepi
import cepiFoto from '@/assets/images/content1/cepiFoto.png'
// png:skill
import iconGithub from '@/assets/images/content1/iconGithub.png'
import iconHTML from '@/assets/images/content1/iconHTML.png'
import iconCSS from '@/assets/images/content1/iconCSS.png'
import iconJS from '@/assets/images/content1/iconJS.png'
import iconVue from '@/assets/images/content1/iconVue.png'

let pngSkill = {
  iconGithub,
  iconHTML,
  iconCSS,
  iconJS,
  iconVue,
}

let aboutMeText = {
  head: 'about me',
  paragraph:
    "My name is Cepi Septiyana. People usually call me Cepi. I'm 23 years old and I was born in Tangerang, on 19th September, 2001. I live in Tangerang since I was child and now I study in Universitas Terbuka Semester 7",
}
</script>

<template>
  <div id="content1" class="container-fluid bg-light">
    <div class="container containerColom bg-dark-subtle">
      <div class="elementPp_1 bg-dark">
        <aboutMe :aboutText="aboutMeText" />
      </div>
      <div class="colom-1 bg-dark">
        <heading />
        <imgCepi :cepiFoto="cepiFoto" />
        <skills :pngSkill="pngSkill" />
      </div>
    </div>
  </div>
</template>
