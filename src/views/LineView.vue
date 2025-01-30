<script setup lang="ts">
import BranchRow from '@/components/BranchRow.vue';
import RightPane from '@/components/RightPane.vue';
import StopStationRow from '@/components/StopStationRow.vue';
import type { BranchModel } from '@/types/branch-model';
import { LineViewModel } from '@/types/line-view-model';
import { StationIndex } from '@/types/station-index';
import { StationModel } from '@/types/station-model';
import { watch, ref, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
  const route = useRoute();
  const lineId = ref(route.params.id as string);
  const model = ref(new LineViewModel(lineId.value as string));
  const from = ref(null as string|null);
  const firstStation = ref(model.value.getFirstStation().name);
  const lastStation = ref(model.value.getLastStation().name);
  const colspan = model.value.kinds.length + 3;

  watch( ()=>route.params.id as string, (newId:string) => {
    lineId.value = newId;
    model.value = new LineViewModel(newId);
  });

  onUpdated(() => {
    if(route.hash){
      const id = route.hash.replace("#", "");
      const element = document.querySelector(route.hash) as HTMLElement;
      if(element){
        element.scrollIntoView({behavior: "smooth", block: "center"});
        element.getElementsByClassName("station-name")[0].classList.add("from");
        from.value = id;
      }
    }
  });

  const isTrue = (stamodel: StationModel|BranchModel):boolean => {
    return (stamodel instanceof StationModel);
  }

  const branchSelected = (args:StationIndex[]) => {
    const t = model.value.stations.filter(x => isTrue(x)).map( (x,i) => new StationIndex((x as StationModel).name, i))
    const s =  [...t, ...args].sort( (a, b) => a.index - b.index);
    firstStation.value = s[0].name;
    lastStation.value = s[s.length - 1].name;
  }
</script>

<template>
  <div class="container">
    <div class="pane">
      <h1>
        <div class="company">{{model.companyName}}</div>
        <div class="kanban">
          <div class="line">{{ model.lineName }}</div>
        </div>
      </h1>
      <component :is="model.overlay" />
      <table class="line-table">
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
          <tr ></tr>
          <template v-for="(staModel, index) in model.stations" :key="index">
            <StopStationRow :no="index" :staModel="staModel" :lineId="lineId" :kinds="model.kinds" v-if="isTrue(staModel)"/>
            <BranchRow :branch="(staModel as BranchModel)" :lineId="lineId" :startNo="index" :colspan="colspan" @branch-selected="branchSelected" v-else/>
          </template>
        </tbody>
      </table>
      <component :is="model.underlay" />
    </div>
    <div class="right-pane">
      <RightPane :model="model" :from="from" :first-station="firstStation" :last-station="lastStation"/>
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

  .line {
    text-align: center;
  }

  .company {
    text-align: center;
    font-size: 0.5em;
  }

  .kanban {
    border-top: 3px solid white;
    border-bottom: 3px solid white;
    margin-bottom: 30px;
  }

  .line-table {
    min-width: 300px;
  }
</style>

<style>
.express {
  background-color: red;
}

.section-express {
  background-color: lightcoral;
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


thead {
  top: 96px;
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

.section-semi-express {
  background-color: lightcyan;
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

</style>
