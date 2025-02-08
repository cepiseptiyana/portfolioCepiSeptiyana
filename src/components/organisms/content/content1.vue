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
</script>

<template>
  <div id="content1" class="container-fluid bg-light">
    <div class="container containerColom bg-dark-subtle">
      <div class="elementPp_1 bg-dark">
        <p class="text-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis nostrum
          praesentium fugiat eligendi vero exercitationem, velit, eius sint adipisci, facilis sunt
          nihil veritatis omnis dignissimos! Dolores autem deserunt voluptates?
        </p>
      </div>
      <div class="colom-1 bg-body-secondary">
        <heading />
        <imgCepi :cepiFoto="cepiFoto" />
        <skills :pngSkill="pngSkill" />
      </div>
    </div>
  </div>
</template>
