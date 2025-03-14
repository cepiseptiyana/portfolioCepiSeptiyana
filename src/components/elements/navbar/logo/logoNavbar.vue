<!-- Atom -->
<script setup>
// Props
let mouseOverLogoNav = defineModel('mouseOverLogoNav')
</script>

<template>
  <div id="logoNavbar">
    <a class="text-light" href="" @click.stop.prevent="mouseOverLogoNav">cepi septiyana</a>
  </div>
</template>
