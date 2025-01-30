<script setup>
import inputForm from './input.vue'
import labelsForm from './label.vue'
import submitFrom from './submit.vue'
import heading from './heading.vue'

let { placeholderInput } = defineProps(['placeholderInput'])
</script>

<template>
  <heading />
  <form action="">
    <table>
      <!-- R1 -->
      <tr>
        <td>
          <labelsForm :label="placeholderInput.username" />
        </td>
        <td>
          <inputForm :placeholderInput="placeholderInput.username" />
        </td>
      </tr>

      <!-- R2 -->
      <tr>
        <td>
          <labelsForm :label="placeholderInput.email" />
        </td>
        <td>
          <inputForm :placeholderInput="placeholderInput.email" />
        </td>
      </tr>

      <!-- R3 -->
      <tr>
        <td>
          <labelsForm :label="placeholderInput.text" />
        </td>
        <td>
          <inputForm :placeholderInput="placeholderInput.text" />
        </td>
      </tr>

      <!-- R4 -->
      <tr>
        <td>
          <submitFrom />
        </td>
      </tr>
    </table>
  </form>
</template>
