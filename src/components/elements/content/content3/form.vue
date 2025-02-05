<script setup>
import heading from './heading.vue'
import labelsForm from './label.vue'
import inputForm from './input.vue'
import submitFrom from './submit.vue'

let sendValueFormToWa = defineModel('sendValueFormToWa')
let { text } = defineProps(['text'])
</script>

<template>
  <form action="" class="formContact">
    <div class="headForm">
      <heading :judulText="text.contact" />
    </div>
    <!-- R1 -->
    <div class="input">
      <labelsForm :label="text.placeholderUsername" />
      <inputForm :placeholderInput="text.placeholderUsername" />
    </div>
    <!-- R2 -->
    <div class="input">
      <labelsForm :label="text.placeholderUseremail" />
      <inputForm :placeholderInput="text.placeholderUseremail" />
    </div>
    <!-- R3 -->
    <div class="input">
      <labelsForm :label="text.placeholderUsertext" />
      <inputForm :placeholderInput="text.placeholderUsertext" />
    </div>
    <!-- R4 -->
    <submitFrom :sendValueFormToWa="sendValueFormToWa" />
  </form>
</template>
