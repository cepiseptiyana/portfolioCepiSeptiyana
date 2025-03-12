<script setup>
import instagram from '@/assets/images/socialMedia/instagram.jpeg'
import gmail from '@/assets/images/socialMedia/gmail.jpeg'
import linkein from '@/assets/images/socialMedia/linkein.png'
import wa from '@/assets/images/socialMedia/whatsapp.png'
import { ref } from 'vue'

const isActive = ref(false)
</script>

<template>
  <section :class="{ slide: isActive }">
    <picture :class="{ close: isActive }">
      <a href="https://www.instagram.com/ceps1920/" target="_blank">
        <img :src="instagram" alt="instagramCepi" title="instagramCepi" />
      </a>
      <a href="mailto:cepifams3@gmail.com" target="_blank">
        <img :src="gmail" alt="gmailCepi" title="gmailCepi" />
      </a>
      <a href="https://www.linkedin.com/in/cepi-septiyana-5702b0303/" target="_blank">
        <img :src="linkein" alt="linkeinCepi" title="linkeinCepi" />
      </a>
      <a href="https://wa.me/6285659519463" target="_blank">
        <img :src="wa" alt="whatsappCepi" title="whatsappCepi" />
      </a>
    </picture>

    <div class="btn__close" @click="isActive = !isActive"></div>
  </section>
</template>

<style scoped>
section {
  position: fixed;
  padding: 10px;
  transition: 500ms;
  transform: translateX(-60px);
  background-color: rgb(197, 197, 197);
  top: 20%;
  left: 1%;

  z-index: 9999;

  picture {
    display: block;
    transition: 500ms;
    transform: scale(0);

    a {
      display: block;
      margin-bottom: 10px;

      img {
        width: 65px;
      }
    }
  }

  /* close */
  picture.close {
    transition: 500ms;
    transform: scale(1);
  }

  .btn__close {
    cursor: pointer;
    position: absolute;
    top: 7%;
    left: 100%;
    background-color: rgb(130, 130, 130);
    width: 10px;
    height: 80%;
    transition: 300ms;

    &:hover {
      background-color: rgb(71, 71, 71);
      top: 18%;
      height: 60%;
    }
  }
}

/* section slide */
section.slide {
  transition: 500ms;
  transform: translateX(0);
}

@media only screen and (max-width: 768px) {
  section {
    position: fixed;
    top: 20%;
    left: 1%;
    z-index: 9999;

    picture {
      a {
        display: block;
        margin-bottom: 10px;

        img {
          width: 35px;
        }
      }
    }
  }
}
</style>
