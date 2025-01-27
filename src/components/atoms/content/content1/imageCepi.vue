<script setup>
import imageCepi from '@/assets/images/content1/cepiFoto.jpg'
import icongmail from '@/assets/images/content1/gmail.png'
import iconwhatsapp from '@/assets/images/content1/whatsapp.png'
</script>

<template>
  <div class="card">
    <img :src="imageCepi" alt="" />
    <div class="card-body">
      <h6 class="card-title text-center">Cepi Septiyana</h6>
      <p class="card-title text-center">My Contact</p>
      <div>
        <a href="">
          <img :src="icongmail" alt="" />
        </a>
        <a href="">
          <img :src="iconwhatsapp" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>
