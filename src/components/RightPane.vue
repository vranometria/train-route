<script setup lang="ts">
import { useLangStore } from '@/stores/lang';
import type { LineViewModel } from '@/types/line-view-model';
import { onUpdated, ref } from 'vue';

const props = defineProps<{
  model: LineViewModel,
  from: string|null,
}>();

const distination = ref(null as HTMLElement|null);

// 行先選択イベント
// ・行先駅名を赤くする
// ・出発元がある場合は出発元から行先までの駅名を青くする
const changeDistination = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const distStationId = target.value;
  const elements = Array.from(document.getElementsByClassName("distination"));
  elements.forEach(e => e.classList.remove("distination"));
  const tr = document.querySelector(`#${distStationId}`) as HTMLElement;
  const td = tr.getElementsByClassName("station-name")[0] as HTMLElement;
  td.classList.add("distination");
  distination.value = tr;

  if(props.from){ //出発元がある場合
    Array.from(document.getElementsByClassName("on-the-way")).forEach(e => e.classList.remove("on-the-way"));

    const fromStationId = props.from;
    const fromTr = document.getElementById(fromStationId) as HTMLElement;
    const fromNo = fromTr.getAttribute("no");
    const distNo = tr.getAttribute("no");
    if(!fromNo || !distNo){return;}

    let fromIndex = Number(fromNo);
    let distIndex = Number(distNo);

    if(distIndex < fromIndex){ //行き先が出発元より手前の場合はfromとdistを入れ替え
      const tmp = fromIndex;
      fromIndex = distIndex;
      distIndex = tmp;
    }
    console.log([fromIndex, distIndex]);

    const stations = document.getElementsByClassName("station-name");
    for(let i = fromIndex + 1; i < distIndex; i++){
      (stations[i] as HTMLElement).classList.add("on-the-way");
    }
  }
};

const changeLanguage = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const lang = target.value;
  useLangStore().setLang(lang);
};

onUpdated(() => {
  const lang = useLangStore().lang;
  const option = document.querySelectorAll(`.language option[value='${lang}']`)[0] as HTMLOptionElement;
  if(option){ option.selected = true; }
});
</script>

<template>

<div class="top">
  {{ model.getFirstStation().name }} 方面
</div>

<div class="dist">
  <h2>行き先</h2>
  <select v-on:change="changeDistination($event)">
    <option value=""> - </option>
    <option v-for="dist in model.distinationList" :key="dist.id" :value="dist.id">{{ dist.name }}</option>
  </select>

  <h2>音声言語</h2>
  <select v-on:change="changeLanguage($event)" class="language">
    <option value="ja-JP">日本語</option>
    <option value="en-US">English</option>
  </select>
</div>

<div class="last">
  {{ model.getLastStation().name }} 方面
</div>

</template>

<style scoped>
.top {
  position: fixed;
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
h2 {
  margin-top: 30px;
}

</style>
