<script setup>
import logoHalaman from '@/components/molecules/navbar/logoHalaman.vue'
import menuNav from '@/components/molecules/navbar/menu.vue'
import contactNavbar from '@/components/molecules/navbar/contact.vue'

let { movingPath } = defineProps(['movingPath'])
</script>

<template>
  <div id="navbar" class="container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md">
          <logoHalaman />
        </div>
        <div class="col-md">
          <menuNav :movingPath="movingPath" />
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
