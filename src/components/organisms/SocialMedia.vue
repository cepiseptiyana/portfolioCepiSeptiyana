<script setup>
// Icons
import instagram from '@/assets/images/socialMedia/instagram.jpeg'
import gmail from '@/assets/images/socialMedia/gmail.jpeg'
// import linkein from '@/assets/images/socialMedia/linkein.png'
import wa from '@/assets/images/socialMedia/whatsapp.png'
import iconGithub from '@/assets/images/socialMedia/iconGithub.png'

import { ref } from 'vue'

const isActive = ref(false)
</script>

<template>
  <section :class="{ slide: isActive }">
    <picture :class="{ close: isActive }">
      <a href="mailto:cepifams3@gmail.com" target="_blank">
        <img :src="gmail" alt="gmailCepi" title="gmailCepi" />
      </a>
      <a href="https://github.com/cepiseptiyana" target="_blank">
        <img :src="iconGithub" alt="linkeinCepi" title="githubCepi" />
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
  transform: translateX(0);
  background-color: rgb(197, 197, 197);
  top: 50%;
  transform: translateY(-50%);

  z-index: 9999;

  picture {
    display: block;
    transition: 500ms;
    transform: scale(1);

    a {
      cursor: url('@/assets/images/cursorLink.png'), auto;
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
    transform: scale(0);
  }

  .btn__close {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    background-color: rgb(130, 130, 130);
    width: 10px;
    height: 80%;
    transition: 300ms;

    &:hover {
      background-color: rgb(71, 71, 71);
      height: 60%;
    }
  }
}

/* section slide */
section.slide {
  top: 50%;
  transition: 500ms;
  transform: translateY(-50%) translateX(-60px);
}

@media only screen and (max-width: 768px) {
  section {
    left: 10px;
    picture {
      a {
        display: block;
        margin-bottom: 10px;

        img {
          width: 35px;
        }
      }
    }

    /* Btn__close */
    .btn__close {
      cursor: pointer;
      width: 15px;
      height: 80%;
      transition: 300ms;
    }
  }

  /* section slide */
  section.slide {
    top: 50%;
    transition: 500ms;
    transform: translateY(-50%) translateX(-60px);
  }
}
</style>
