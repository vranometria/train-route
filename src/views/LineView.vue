<script setup lang="ts">
  import { LINES } from '@/constants/lines';
  import type { Line } from '@/types/line';
import { LineViewModel } from '@/types/line-view-model';
  import { watch, ref } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const lineId = ref(route.params.id);
  let model:LineViewModel = new LineViewModel("");

  watch( ()=>route.params.id as string, (newId:string) => {
    lineId.value = newId;
    const line = LINES[newId] as Line;
    model = new LineViewModel(line.name);
  });
</script>

<template>
  <h1>{{ model.lineName }}</h1>
  <RouterLink :to="{name: 'line', params: {id:'yamanote'}}">山の手</RouterLink>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
