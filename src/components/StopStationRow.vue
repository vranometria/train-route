<script lang="ts" setup>
import { defineProps } from 'vue';
import { useLangStore } from '@/stores/lang';
import Exchange from './Exchange.vue';
import { StationModel } from '@/types/station-model';

const prop = defineProps(['no', 'stopStation', "lineId", 'serviceTypes']);

const stationId = prop.stopStation.stationId;
const model = new StationModel(prop.stopStation);

const pronunce = (yomi: string) => {
  const lang = useLangStore().lang;
  const uttr = new SpeechSynthesisUtterance(yomi);
  uttr.lang = lang;
  window.speechSynthesis.speak(uttr);
};

</script>

<template>
  <tr :no="no" :id="stationId" :key="no">
    <td class="station-name">{{ model.name }}</td>
    <td class="pronunciation">
      <button :onclick="() => { pronunce(model.pronunciation); }">
        <img src="@/assets/speaker.png" />
      </button>
    </td>
    <td>
      <Exchange :source-station-id="stationId" :exchange-lines="model.getExchangeLines(lineId)"></Exchange>
    </td>
    <td v-for="t in serviceTypes" :key="t.prop" :class="model.serviceTypes[t.prop]" class="kind"></td>
  </tr>
</template>

<style scoped>
.pronunciation img {
  width: 8px;
  height: 10px;
}

.pronunciation button {
  background-color: transparent;
  border: none;
}
</style>
