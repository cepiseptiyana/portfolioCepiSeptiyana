<script setup>
import heading from '@/components/elements/content/content1/heading/heading.vue'
import imgCepi from '@/components/elements/content/content1/cepi/imgCepi.vue'
import skills from '@/components/elements/content/content1/skills/skills.vue'
import awan from '@/components/elements/content/content1/awan/awan.vue'
import robotGundam from '@/components/elements/content/content1/robot/robot.vue'

// png:imgCepi
import cepiFoto from '@/assets/images/content1/cepiFoto.png'
// png:skill
import iconGithub from '@/assets/images/content1/iconGithub.png'
import iconHTML from '@/assets/images/content1/iconHTML.png'
import iconCSS from '@/assets/images/content1/iconCSS.png'
import iconJS from '@/assets/images/content1/iconJS.png'
import iconVue from '@/assets/images/content1/iconVue.png'
// png:awan
import awan_1 from '@/assets/images/content1/awan_1.png'
import awan_2 from '@/assets/images/content1/awan_2.png'
import awan_3 from '@/assets/images/content1/awan_3.png'
// png:robot
import gundam from '@/assets/images/content1/gundam.png'

let pngSkill = {
  iconGithub,
  iconHTML,
  iconCSS,
  iconJS,
  iconVue,
}
let awanPng = {
  awan_1,
  awan_2,
  awan_3,
}
</script>

<template>
  <div id="content1" class="container-fluid">
    <div class="container containerColom">
      <div class="colom-1">
        <heading />
        <imgCepi :cepiFoto="cepiFoto" />
        <skills :pngSkill="pngSkill" />
      </div>
      <div class="colom-2"></div>
      <div class="colom-3">
        <awan :awanPng="awanPng.awan_1" />
      </div>
      <div class="colom-4">
        <awan :awanPng="awanPng.awan_2" />
      </div>
      <div class="colom-5">
        <awan :awanPng="awanPng.awan_3" />
      </div>
      <div class="colom-6">
        <robotGundam :gundam="gundam" />
      </div>
    </div>
  </div>
</template>
