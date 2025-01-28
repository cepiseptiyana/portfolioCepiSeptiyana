<script setup>
let { movingPath } = defineProps(['movingPath'])
console.log(movingPath.myProject)
</script>
<template>
  <div id="menu">
    <a href="#">My Home</a>
    <a :href="movingPath.myProject">My Project</a>
    <a :href="movingPath.mySkill">My Skill</a>
  </div>
</template>
