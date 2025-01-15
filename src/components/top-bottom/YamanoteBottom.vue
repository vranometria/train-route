<template>
  <button :onclick="onclick">品川へ</button>
</template>

<script setup lang="ts">
import { scrollTo } from '@/util';

const onclick = () => {
  scrollTo('shinagawa');
};
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
  color: hsla(160, 100%, 37%, 1);
  text-align: center;
  cursor: pointer;
  width: 100%;

  margin: 30px 0 30px 0;
}
</style>
