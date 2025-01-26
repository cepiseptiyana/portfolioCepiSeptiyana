<!-- Molecules  -->

<script setup>
import logoNavbar from '@/components/atoms/navbar/logo/logoNavbar.vue'

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
// ambil length
// looping sebanyak length h4
</script>

<template>
  <div id="logoNavbar" class="container">
    <logoNavbar :mouseOverLogoNav="mouseOverLogoNav" />
  </div>
</template>

<style></style>
