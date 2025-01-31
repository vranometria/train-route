<script setup lang="ts">
import type { Branch } from '@/types/Section';
import { defineProps, ref } from 'vue';
import StopStationRow from './StopStationRow.vue';
import type { ServiceType } from '@/types/service-type';
import { STATIONS } from '@/constants/stations';

const props = defineProps<{
  branch: Branch;
  lineId: string;
  indexByStationId: Map<string, number>;
  colspan: number;
  serviceTypes: ServiceType[];
  sectionIndex: number;
}>();
const emit = defineEmits(['branchSelected']);

const branchIndex = ref(0);
const routeTops = props.branch.routes.map( x => STATIONS[x[0].stationId] );
const stopStations = ref(props.branch.routes[branchIndex.value]);

const branchSelected = (event:Event) => {
  const element = event.target as HTMLElement;
  branchIndex.value = Number(element.getAttribute('index'));
  stopStations.value = props.branch.routes[branchIndex.value];
  Array.from(document.getElementsByClassName("branch")).forEach( (e:Element) => {
    e.classList.remove("selected");
    e.classList.add("unselected");
  });
  element.classList.remove("unselected");
  element.classList.add("selected");
  emit('branchSelected',props.sectionIndex, branchIndex.value);
}
</script>

<template>
  <tr class="branch-switch">
    <td :colspan="colspan" >
      <div class="wrapper">
        <span v-for="(r, index) in routeTops" :key="index" :onclick="branchSelected" :index="index" class="branch" :class="{'selected': index===0}">{{ r.name }}方面</span>
      </div>
    </td>
  </tr>
  <template v-for="station in stopStations" :key="station.stationId">
    <StopStationRow :no="indexByStationId.get(station.stationId)" :stop-station="station" :line-id="lineId" :service-types="serviceTypes" />
  </template>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.branch {
  flex: 1;
  cursor: pointer;
}

.branch-switch {
  text-align: center;
}

.selected {
  color: black;
  background-color: white;
  transition: background-color 0.5s, color 0.5s;
}

.unselected {
  color: hsla(160, 100%, 37%, 1);
}
</style>
