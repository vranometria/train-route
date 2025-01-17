<script setup lang="ts">
import Exchange from '@/components/Exchange.vue';
import RightPane from '@/components/RightPane.vue';
import { useLangStore } from '@/stores/lang';
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
  const pronunce = (yomi: string) => {
    const lang = useLangStore().lang;
    const uttr = new SpeechSynthesisUtterance(yomi);
    uttr.lang = lang;
    window.speechSynthesis.speak(uttr);
  };
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
            <th></th>
            <th>乗り換え</th>
            <th v-for="kind in model.kinds" :key="kind.prop" class="kind" :class="kind.prop">
              <span class="text" :class="kind.extraCharge">{{ kind.name }}</span>
              <p class="fukidashi">特急料が別途必須</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(staModel, index) in model.stations" :key="lineId + staModel.name" :id="staModel.id" :no="index">
            <td class="station-name">{{ staModel.name }}</td>
            <td class="pronunciation">
              <button :onclick="() => {pronunce(staModel.pronunciation);}">
                <img src="@/assets/speaker.png" />
              </button>
            </td>
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

h1, thead {
  position: sticky;
}

h1 {
  top: 0;
  background-color:#181818;
  z-index: 1;
}

thead {
  top: 40px;
  background-color: #181818;
  z-index: 1;
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

th.kind .text {
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

th.express .text {
  color: white;
}

.semi-express {
  background-color: orange;
}

.extra1 {
  background-color: #E95295;
}

.extra2 {
  background-color: #A22041;
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

.pronunciation button {
  background-color: transparent;
  border: none;
}

.pronunciation img {
  width: 8px;
  height: 10px;
}

.on-the-way {
  color: lightblue;
}

.fukidashi {
  display: none;
  width: 200px;
  position: absolute;
  top: -55px;
  padding: 16px;
  border-radius: 5px;
  background: #33cc99;
  color: black;
  font-weight: bold;
}
.fukidashi:after {
  position: absolute;
  width: 0;
  height: 0;
  left: 0;
  bottom: -19px;
  margin-left: 10px;
  border: solid transparent;
  border-color: rgba(51, 204, 153, 0);
  border-top-color: #33cc99;
  border-width: 10px;
  pointer-events: none;
  content: " ";
}
  .extra-charge:hover + .fukidashi {
    display: block;
  }
</style>
