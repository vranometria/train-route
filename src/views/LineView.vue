<script setup lang="ts">
import { LineViewModel } from '@/types/line-view-model';
  import { watch, ref } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const lineId = ref(route.params.id);
  let model:LineViewModel = new LineViewModel(lineId.value as string);

  watch( ()=>route.params.id as string, (newId:string) => {
    model = new LineViewModel(newId);
  });
</script>

<template>
  <h1>{{ model.lineName }}</h1>

  <table>
    <thead>
      <tr>
        <th>駅</th>
        <th>乗り換え</th>
        <th v-for="kind in model.kinds" :key="kind.prop">{{ kind.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="sta in model.stations" :key="sta.name" :id="sta.id">
        <td>{{ sta.name }}</td>
        <td>
          <RouterLink v-for="e in sta.lines" :to="{name: 'line', params: {id: e.id}}" :key="e.id" class="exchange-line">{{ e.name }}</RouterLink>
        </td>
        <td v-for="kind in model.kinds" :key="kind.prop" :class="sta.kinds[kind.prop]">
        </td>
      </tr>
    </tbody>
  </table>

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

.exchange-line {
  display: block;
}

.rapid {
  background-color: aquamarine;
}
</style>
