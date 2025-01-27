<script setup lang="ts">
import { LINE_IDS } from '@/constants/line-ids';
</script>

<template>
  <div>
    <RouterLink :to="{name: 'line', params: {id: LINE_IDS.jr_east.keihin_touhoku}}">京浜東北線直通</RouterLink>
  </div>
</template>

<style scoped>
  div {
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
</style>
