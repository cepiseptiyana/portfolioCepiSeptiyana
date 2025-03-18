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
import iconPinia from '@/assets/images/content1/piniaLogo.jpeg'
import iconVitest from '@/assets/images/content1/vitestLogo.png'
import bootstrapLogo from '@/assets/images/content1/bootstrapLogo.png'

let pngSkill = {
  iconGithub,
  iconHTML,
  iconCSS,
  iconJS,
  iconVue,
  iconPinia,
  iconVitest,
  bootstrapLogo,
}

let aboutMeText = {
  head: 'about me',
  paragraph:
    "My name is Cepi Septiyana. People usually call me Cepi. I'm 23 years old and I was born in Tangerang, on 19th September, 2001. I live in Tangerang since I was child and now I study in Universitas Terbuka Semester 7, I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section,I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.",
}
</script>

<template>
  <div id="content1" class="container-fluid bg-light">
    <div class="container containerColom">
      <div class="row bg-dark">
        <div class="col-md">
          <div class="elementPp_1">
            <aboutMe :aboutText="aboutMeText" />
          </div>
        </div>
      </div>
      <div class="row bg-dark-subtle">
        <div class="col-md">
          <heading />
          <imgCepi :cepiFoto="cepiFoto" />
          <skills :pngSkill="pngSkill" />
        </div>
      </div>
    </div>
  </div>
</template>
