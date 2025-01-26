<script setup>
import menuNav from '@/components/atoms/navbar/menu/menu.vue'
import dropDownNav from '@/components/atoms/navbar/menu/dropDown.vue'

// humburger
function humSlideShow() {
  document.querySelector('#navbar #menuNavbar #dropDown .menuDropMenu').classList.toggle('toggle')
  setTimeout(() => {
    document.querySelector('#navbar #menuNavbar #dropDown .menuDropMenu').classList.toggle('width')
  }, 1000)
}
</script>

<template>
  <div id="menuNavbar" class="container">
    <menuNav />
    <dropDownNav :humSlideShow="humSlideShow" />
  </div>
</template>
