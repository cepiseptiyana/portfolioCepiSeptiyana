<script setup>
let sendValueFormToWa = defineModel('sendValueFormToWa')
</script>

<template>
  <button @click.stop.prevent="sendValueFormToWa" type="submit" class="btn btn-primary">
    sumbit
  </button>
</template>
