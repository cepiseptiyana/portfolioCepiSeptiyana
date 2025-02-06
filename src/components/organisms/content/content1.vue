<script setup>
import heading from '@/components/elements/content/content1/heading/heading.vue'
import imgCepi from '@/components/elements/content/content1/cepi/imgCepi.vue'
import skills from '@/components/elements/content/content1/skills/skills.vue'

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
</script>

<template>
  <div id="content1" class="container-fluid bg-dark">
    <div class="container containerColom bg-secondary">
      <div class="colom-1 bg-dark">
        <heading />
        <imgCepi :cepiFoto="cepiFoto" />
        <skills :pngSkill="pngSkill" />
      </div>
    </div>
  </div>
</template>
