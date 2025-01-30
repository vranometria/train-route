<script setup lang="ts">
import type { BranchModel } from '@/types/branch-model';
import { defineProps, ref } from 'vue';
import StopStationRow from './StopStationRow.vue';
import { StationIndex } from '@/types/station-index';
const props = defineProps<{
  branch: BranchModel;
  lineId: string;
  startNo: number;
  colspan: number;
}>();
const emit = defineEmits(['branchSelected']);

const branchIndex = ref(0);
const stations = ref(props.branch.stations[branchIndex.value]);

const names = props.branch.stations.map( b => b[branchIndex.value].name )

const branchSelected = (event:Event) => {
  const element = event.target as HTMLElement;
  branchIndex.value = Number(element.getAttribute('index'));
  stations.value = props.branch.stations[branchIndex.value];
  Array.from(document.getElementsByClassName("branch")).forEach( (e:Element) => {
    e.classList.remove("selected");
    e.classList.add("unselected");
  });
  element.classList.remove("unselected");
  element.classList.add("selected");
  emit('branchSelected', stations.value.map((s,i) => {return new StationIndex(s.name, i)}));
}
</script>

<template>
  <tr class="branch-switch">
    <td :colspan="colspan" >
      <div class="wrapper">
        <span v-for="(n, index) in names" :key="n" :onclick="branchSelected" :index="index" class="branch" :class="{'selected': index===0}">{{ n }}方面</span>
      </div>
    </td>
  </tr>
  <template v-for="(staModel, index) in stations" :key="index + startNo">
    <StopStationRow :no="index + startNo" :staModel="staModel" :lineId="lineId" :kinds="staModel.kinds" />
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
