<script setup lang="ts">
import { StationDetail } from '@/models/station-detail-model';
import { useRoute } from 'vue-router';

const route = useRoute();
const stationId = route.params.id as string;
const model = new StationDetail(stationId);
</script>


<template>
  <div>
    <h1>{{ model.name }}</h1>
    <p>{{ model.reading }}</p>
    <p>{{ model.prefecture }}</p>
    <a :href="`https://www.google.com/maps/search/${model.name}駅`" target="_google">Google Map</a>

    <h1>路線</h1>
    <div v-for="line in model.lines" :key="line.id">
      <RouterLink :to="line.url">{{ line.label }}</RouterLink>
    </div>
  </div>
</template>
