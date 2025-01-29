<script setup lang="ts">
import { defineProps } from 'vue'
import { getLineModel, removeDuplicates } from '@/util';
import BaseAccordion from '@/components/BaseAccordion.vue';
const props = defineProps({
  prefecture: String,
});

const targetPrefecture = props.prefecture ? props.prefecture : '';
const lines = getLineModel().filter(t => t.runsThrough(targetPrefecture));
const companies = removeDuplicates(lines.map( t => t.line.companyId));

const models = companies.map((companyName: string) => {
  const ls = lines.filter(t => t.line.companyId === companyName);
  return { companyName, lines: ls};
});

</script>

<template>
  <div>
    <BaseAccordion :title="props.prefecture">
      <div v-for="model in models" :key="model.companyName">
        <h3>{{ model.companyName }}</h3>
        <RouterLink :to="{name: 'line', params: {id: line.id}}" v-for="line in model.lines" :key="line.line.name">{{ line.line.name }}</RouterLink>
      </div>
    </BaseAccordion>
  </div>
</template>
