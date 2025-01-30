<script setup>
import logoHalaman from '@/components/atoms/navbar/logo/logoNavbar.vue'
import menuNav from '@/components/atoms/navbar/menu/menu.vue'
import contactNavbar from '@/components/atoms/navbar/contact/contact.vue'

let movingPath = {
  myProject: '#content2',
  mySkill: '',
}

// humburger
function humSlideShow() {
  document.querySelector('#navbar #menuNavbar #dropDown .menuDropMenu').classList.toggle('toggle')
  setTimeout(() => {
    document.querySelector('#navbar #menuNavbar #dropDown .menuDropMenu').classList.toggle('width')
  }, 1000)
}

function mouseOverLogoNav() {
  // ambil elemen h4
  let cepiText = ''
  const tagA = document.querySelector('#logoNavbar a')
  for (let i = 0; i < tagA.innerHTML.length; i++) {
    cepiText += `<span>${tagA.innerHTML[i]}</span>`
  }
  if (!tagA.innerHTML.includes('span')) {
    tagA.innerHTML = cepiText
  }
}
</script>

<template>
  <div id="navbar" class="container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md">
          <logoHalaman :mouseOverLogoNav="mouseOverLogoNav" />
        </div>
        <div class="col-md">
          <menuNav :movingPath="movingPath" :humSlideShow="humSlideShow" />
        </div>
        <div class="col-md">
          <contactNavbar />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#navbar .row {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
