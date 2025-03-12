<script setup>
import instagram from '@/assets/images/socialMedia/instagram.jpeg'
import gmail from '@/assets/images/socialMedia/gmail.jpeg'
import linkein from '@/assets/images/socialMedia/linkein.png'
import wa from '@/assets/images/socialMedia/whatsapp.png'
import { ref } from 'vue'
</script>

<template>
  <section class="socialMedia">
    <picture>
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
  </section>
</template>

<style scoped>
section {
  position: fixed;
  padding: 10px;
  top: 20%;
  left: 1%;
  z-index: 9999;

  picture {
    a {
      display: block;
      margin-bottom: 10px;

      img {
        width: 65px;
      }
    }
  }

  &::after {
    position: absolute;
    cursor: pointer;
    top: 10%;
    left: 100%;
    display: block;
    content: '';
    width: 7px;
    height: 80%;
    background-color: rgb(217, 217, 217);
    transition: 300ms;
  }

  &:hover::after {
    background-color: rgb(76, 76, 76);
    top: 25%;
    width: 15px;
    height: 50%;
  }
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
