<script setup lang="ts">
import Exchange from '@/components/Exchange.vue';
import { LineViewModel } from '@/types/line-view-model';
  import { watch, ref } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const lineId = ref(route.params.id as string);
  const model = ref(new LineViewModel(lineId.value as string));

  watch( ()=>route.params.id as string, (newId:string) => {
    lineId.value = newId;
    model.value = new LineViewModel(newId);
  });
</script>

<template>
  <div>
    <h1>{{model.companyName}}・{{ model.lineName }}</h1>

    <table>
      <thead>
        <tr>
          <th>駅</th>
          <th>乗り換え</th>
          <th v-for="kind in model.kinds" :key="kind.prop" class="kind" :class="kind.prop">{{ kind.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sta in model.stations" :key="lineId + sta.name" :id="sta.id">
          <td>{{ sta.name }}</td>
          <td>
            <Exchange :station-id="sta.id" :exchange-line-ids="sta.getExchangeLineIds(lineId)" ></Exchange>
          </td>
          <td v-for="kind in model.kinds" :key="kind.prop" :class="sta.kinds[kind.prop]" class="kind">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

td, th {
  border-bottom: 1px solid white;
  padding-top: 15px;
}

.kind{
  border: none;
}

.exchange-line {
  display: block;
}

.rapid, .acty {
  background-color: aquamarine;
}

.express {
  background-color: red;
}

.commuter {
  background-color: yellow;
}

th.kind {
  writing-mode: vertical-rl;
  font-weight: bold;
  color: black;
}
</style>
