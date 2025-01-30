<script setup>
import formContent3 from '@/components/elements/content/content3/form.vue'

let placeholderInput = {
  username: 'username',
  email: 'email',
  text: 'text',
}
</script>

<template>
  <div id="content3" class="container-fluid">
    <div class="container">
      <formContent3 :placeholderInput="placeholderInput" />
    </div>
  </div>
</template>
