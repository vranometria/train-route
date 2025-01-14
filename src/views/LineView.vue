<script setup lang="ts">
import Exchange from '@/components/Exchange.vue';
import RightPane from '@/components/RightPane.vue';
  import { LineViewModel } from '@/types/line-view-model';
  import { watch, ref, onUpdated } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const lineId = ref(route.params.id as string);
  const model = ref(new LineViewModel(lineId.value as string));
  const from = ref(null as string|null);

  watch( ()=>route.params.id as string, (newId:string) => {
    lineId.value = newId;
    model.value = new LineViewModel(newId);
  });

  onUpdated(() => {
    if(route.hash){
      const id = route.hash.replace("#", "");
      const element = document.querySelector(route.hash) as HTMLElement;
      if(element){
        element.scrollIntoView({behavior: "smooth"});
        element.getElementsByClassName("station-name")[0].classList.add("from");
        from.value = id;
      }
    }
  });
</script>

<template>
  <div class="container">
    <div class="pane">
      <h1>{{model.companyName}}・{{ model.lineName }}</h1>
      <component :is="model.overlay" />
      <table>
        <thead>
          <tr>
            <th>駅</th>
            <th>乗り換え</th>
            <th v-for="kind in model.kinds" :key="kind.prop" class="kind" :class="kind.prop">{{ kind.name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="staModel in model.stations" :key="lineId + staModel.name" :id="staModel.id">
            <td class="station-name">{{ staModel.name }}</td>
            <td>
              <Exchange :source-station-id="staModel.id" :exchange-lines="staModel.getExchangeLines(lineId)" ></Exchange>
            </td>
            <td v-for="kind in model.kinds" :key="kind.prop" :class="staModel.kinds[kind.prop]" class="kind">
            </td>
          </tr>
        </tbody>
      </table>
      <component :is="model.underlay" />
    </div>
    <div class="right-pane">
      <RightPane :model="model" :from="from"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

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

th.kind {
  writing-mode: vertical-rl;
  font-weight: bold;
  color: black;
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

.special-express {
  background-color: pink;
}

th.express {
  color: white;
}

.semi-express {
  background-color: orange;
}

.commuter {
  background-color: yellow;
}

.distination {
  color: red;
}

.from {
  color: yellow;
}

.right-pane {
  margin-left: 1rem;
  padding: 1rem;
}

.f {
  background-color: lightgreen;
}

.tj {
  background-color: lightblue;
}

.tjd {
  background-color: lightcoral;
}
</style>
