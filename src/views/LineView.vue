<script setup lang="ts">
import { LineViewModel } from '@/types/line-view-model';
import { watch, ref, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import SimpleSection from '@/components/SimpleSection.vue';
import type { Branch, RoutePart, Section } from '@/types/Section';
import BranchSection from '@/components/BranchSection.vue';
import RightPane from '@/components/RightPane.vue';
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
        element.scrollIntoView({behavior: "smooth", block: "center"});
        element.getElementsByClassName("station-name")[0].classList.add("from");
        from.value = id;
      }
    }
  });

  const branchSelected = (sectionIndex:number, branchIndex: number) => {
    const t = new LineViewModel(lineId.value as string);
    (t.line.sections[sectionIndex] as Branch).selectRoute(branchIndex);
    t.updateProperties();
    model.value = t;
  }

  const isSection = (arg: RoutePart): boolean => {
    return arg.getType() === 'Section';
  }
</script>

<template>
  <div class="container">
    <div class="pane">
      <h1>
        <div class="company">{{model.getCompanyName()}}</div>
        <div class="kanban">
          <div class="line">{{ model.getLineName() }}</div>
        </div>
      </h1>
      <component :is="model.overlay" />
      <table class="line-table">
        <thead>
          <tr>
            <th>駅</th>
            <th></th>
            <th>乗り換え</th>
            <th v-for="kind in model.getServiceTypes()" :key="kind.prop" class="kind" :class="kind.prop">
              <span class="text" :class="kind.extraCharge">{{ kind.name }}</span>
              <p class="fukidashi">特急料が別途必須</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(section, sectionIndex) in model.line.sections" :key="sectionIndex">
            <SimpleSection :section="(section as Section)" :line-id="lineId" :index-by-station-id="model.indexByStationId" :service-types="model.getServiceTypes()" v-if="isSection(section)" />
            <BranchSection :branch="(section as Branch)" :line-id="lineId" :index-by-station-id="model.indexByStationId" :colspan="model.getColspan()" :service-types="model.getServiceTypes()" :section-index="sectionIndex" @branch-selected="branchSelected" v-else/>
          </template>
        </tbody>
      </table>
      <component :is="model.underlay" />
    </div>
    <div class="right-pane">
      <RightPane :model="model" :from="from" :first-station="model.getFirstStationName()" :last-station="model.getLastStationName()"/>
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

.extra3 {
  background-color: #F7C242;
}

.extra4 {
  background-color: #8a650e;
}

.extra5 {
  background-color: #cbe28a;
}

.commuter {
  background-color: rgb(102, 189, 52);
}

.distination {
  color: red;
}

.from {
  color: yellow;
}

.rapid-commuter {
  background-color: red;
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
