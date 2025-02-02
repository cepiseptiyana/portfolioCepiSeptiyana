<script setup>
import heading from './heading.vue'
import labelsForm from './label.vue'
import inputForm from './input.vue'
import submitFrom from './submit.vue'

let sendValueFormToWa = defineModel('sendValueFormToWa')
let { text } = defineProps(['text'])
</script>

<template>
  <form action="">
    <table>
      <tr>
        <td>
          <heading :judulText="text.judulTable" />
        </td>
      </tr>
      <!-- R1 -->
      <tr>
        <td>
          <labelsForm :label="text.placeholderUsername" />
        </td>
        <td>
          <inputForm :placeholderInput="text.placeholderUsername" />
        </td>
      </tr>

      <!-- R2 -->
      <tr>
        <td>
          <labelsForm :label="text.placeholderUseremail" />
        </td>
        <td>
          <inputForm :placeholderInput="text.placeholderUseremail" />
        </td>
      </tr>

      <!-- R3 -->
      <tr>
        <td>
          <labelsForm :label="text.placeholderUsertext" />
        </td>
        <td>
          <inputForm :placeholderInput="text.placeholderUsertext" />
        </td>
      </tr>

      <!-- R4 -->
      <tr>
        <td></td>
        <td>
          <submitFrom :sendValueFormToWa="sendValueFormToWa" />
        </td>
      </tr>
    </table>
  </form>
</template>
