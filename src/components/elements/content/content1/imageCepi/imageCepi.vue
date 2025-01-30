<script setup>
let { cardCepis } = defineProps(['cardCepis'])
</script>

<template>
  <div id="cardContent1" class="container">
    <div class="card">
      <img :src="cardCepis.fotoCepi" alt="" />
      <div class="card-body">
        <h6 class="card-title text-center">Cepi Septiyana</h6>
        <p class="card-title text-center">My Contact</p>
        <div>
          <a href="mailto:cepifams3@gmail.com">
            <img :src="cardCepis.icongmail" alt="" />
          </a>
          <a href="https://wa.me/6285859519463">
            <img :src="cardCepis.iconwhatsapp" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
