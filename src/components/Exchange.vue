<script setup lang="ts">
import { LINES } from '@/constants/lines';

const props = defineProps<{
  stationId: string,
  sourceLineId: string,
  lineIds: string[],
}>();

const exchangeLines = props.lineIds.filter(n=>n!==props.sourceLineId).map(lineId=>{
  const line = LINES[lineId];
  const lineName = line ? line.name : "未定義の路線-" + lineId;
  return {
    name: lineName,
    id: lineId,
    key: props.stationId + "-" + lineId,
    url: "line/" + lineId + "#" + props.stationId,
  }
});
</script>

<template>
  <div v-for="e in exchangeLines" :key="e.key">
    <RouterLink :to="e.url" >{{ e.name }}</RouterLink>
  </div>
</template>
