<script lang="ts" setup>
import { defineProps } from 'vue';
import { useLangStore } from '@/stores/lang';
import Exchange from './Exchange.vue';

defineProps(['no', 'staModel', "lineId", "kinds"]);

const pronunce = (yomi: string) => {
  const lang = useLangStore().lang;
  const uttr = new SpeechSynthesisUtterance(yomi);
  uttr.lang = lang;
  window.speechSynthesis.speak(uttr);
};

</script>

<template>
  <tr :no="no">
    <td class="station-name" :id="staModel.id">{{ staModel.name }}</td>
    <td class="pronunciation">
      <button :onclick="() => { pronunce(staModel.pronunciation); }">
        <img src="@/assets/speaker.png" />
      </button>
    </td>
    <td>
      <Exchange :source-station-id="staModel.id" :exchange-lines="staModel.getExchangeLines(lineId)"></Exchange>
    </td>
    <td v-for="kind in kinds" :key="kind.prop" :class="staModel.kinds[kind.prop]" class="kind">
    </td>
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
