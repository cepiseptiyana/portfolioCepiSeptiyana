<script setup>
import heading from '@/components/atoms/content/content1/heading/heading.vue'
import skills from '@/components/atoms/content/content1/skills/skills.vue'
import imageCepi from '@/components/atoms/content/content1/imageCepi/imageCepi.vue'

// png:heading
import logoWisuda from '@/assets/images/content1/logoWisuda.png'
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
</script>

<template>
  <div id="content1" class="container-fluid">
    <div class="container containerColom">
      <div class="colom-1">
        <heading :logoWisuda="logoWisuda" />
        <skills :pngSkill="pngSkill" />
      </div>
      <div class="colom-2">
        <imageCepi />
      </div>
    </div>
  </div>
</template>
