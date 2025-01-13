<script setup lang="ts">
import { LINES } from '@/constants/lines';
import type { ExchangeLineModel } from '@/types/exchange-line-model';

const props = defineProps<{
  sourceStationId: string,
  exchangeLines: (ExchangeLineModel)[],
}>();

const exchangeLines = props.exchangeLines.map(x=>{
  let lineId = "";
  let stationId = "";
  if(typeof x === "string"){
    lineId = x;
    stationId = props.sourceStationId;
  }
  else {
    lineId = x.id;
    stationId = x.stationId;
  }

  const line = LINES[lineId];
  const lineName = line ? line.name : "未定義の路線-" + lineId;
  return {
    name: lineName,
    id: lineId,
    key: stationId + "-" + lineId,
    url: "/line/" + lineId + "#" + stationId,
  }
});
</script>

<template>
  <div v-for="e in exchangeLines" :key="e.key">
    <RouterLink :to="e.url" >{{ e.name }}</RouterLink>
  </div>
</template>
