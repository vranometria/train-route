<script setup lang="ts">
  import Exchange from '@/components/Exchange.vue';
  import { LineViewModel } from '@/types/line-view-model';
  import { watch, ref, onUpdated } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const lineId = ref(route.params.id as string);
  const model = ref(new LineViewModel(lineId.value as string));
  const distination = ref(null as HTMLElement|null);
  const from = ref(null as HTMLElement|null);

  watch( ()=>route.params.id as string, (newId:string) => {
    lineId.value = newId;
    model.value = new LineViewModel(newId);
  });

  onUpdated(() => {
    if(route.hash){
      const element = document.querySelector(route.hash) as HTMLElement;
      if(element){
        element.scrollIntoView({behavior: "smooth"});
        element.getElementsByClassName("station-name")[0].classList.add("from");
        from.value = element;
      }
    }
  });

  const changeDistination = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const distStationId = target.value;
    const elements = Array.from(document.getElementsByClassName("distination"));
    elements.forEach(e => e.classList.remove("distination"));
    const tr = document.querySelector(`#${distStationId}`) as HTMLElement;
    const td = tr.getElementsByClassName("station-name")[0] as HTMLElement;
    td.classList.add("distination");
    distination.value = tr;
  }


  //スクロールイベント
  window.addEventListener('scroll', () => {
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    if(!distination.value){return;}

    const dist = distination.value;
    if(dist.getBoundingClientRect().top < 0){
      up?.classList.remove("hide");
      down?.classList.add("hide");
    }
    // distinationが画面の下にある場合は.downから.hideを削除
    else if(dist.getBoundingClientRect().bottom > window.innerHeight){
      up?.classList.add("hide");
      down?.classList.remove("hide");
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
          <tr v-for="sta in model.stations" :key="lineId + sta.name" :id="sta.id">
            <td class="station-name">{{ sta.name }}</td>
            <td>
              <Exchange :station-id="sta.id" :exchange-line-ids="sta.getExchangeLineIds(lineId)" ></Exchange>
            </td>
            <td v-for="kind in model.kinds" :key="kind.prop" :class="sta.kinds[kind.prop]" class="kind">
            </td>
          </tr>
        </tbody>
      </table>
      <component :is="model.underlay" />
    </div>
    <div class="right-pane">
      <h2>行き先</h2>
      <select v-on:change="changeDistination($event)">
        <option value=""> - </option>
        <option v-for="dist in model.distinationList" :key="dist.id" :value="dist.id">{{ dist.name }}</option>
      </select>
      <label class="up hide" id="up">↑</label>
      <label class="down hide" id="down">↓</label>
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

.hide {
  display: none;
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
  position: sticky;
  top: 0;
  margin-left: 1rem;
  padding: 1rem;
}
</style>
