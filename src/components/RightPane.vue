<script setup lang="ts">
import type { LineViewModel } from '@/types/line-view-model';
import { ref } from 'vue';

const props = defineProps<{
  model: LineViewModel,
  from: string|null,
}>();

const distination = ref(null as HTMLElement|null);

const top = props.model.stations[0];
const last = props.model.stations[props.model.stations.length-1];
const topName = top ? top.name : "未定義";
const lastName = last ? last.name : "未定義";

const changeDistination = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const distStationId = target.value;
  const elements = Array.from(document.getElementsByClassName("distination"));
  elements.forEach(e => e.classList.remove("distination"));
  const tr = document.querySelector(`#${distStationId}`) as HTMLElement;
  const td = tr.getElementsByClassName("station-name")[0] as HTMLElement;
  td.classList.add("distination");
  distination.value = tr;
};

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

<div class="top">
  {{ topName }} 方面
</div>

<div class="dist">
  <h2>行き先</h2>
  <select v-on:change="changeDistination($event)">
    <option value=""> - </option>
    <option v-for="dist in model.distinationList" :key="dist.id" :value="dist.id">{{ dist.name }}</option>
  </select>
</div>

<label class="up hide" id="up">↑</label>
<label class="down hide" id="down">↓</label>

<div class="last">
  {{ lastName }} 方面
</div>

</template>

<style scoped>
.top {
  position: sticky;
  top: 0px;
}
.dist {
  position: sticky;
  top: 100px;
}

.last {
  position: fixed;
  bottom: 0;
}

</style>
