<script setup lang="ts">
  import { LINE_IDS } from '@/constants/ids';
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.negishi}}">根岸線直通</RouterLink>
  </div>
</template>

<style scoped>
  div {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }
</style>
