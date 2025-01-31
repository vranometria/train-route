<script setup lang="ts">
import { Section } from '@/types/Section';
import { defineProps } from 'vue';
import StopStationRow from './StopStationRow.vue';
import { ServiceType } from '@/types/service-type';
defineProps<{section: Section, lineId: string, serviceTypes: ServiceType[], indexByStationId: Map<string, number> }>();
</script>

<template>
  <StopStationRow v-for="stopStation in section.getStations()" :no="indexByStationId.get(stopStation.stationId)" :stop-station="stopStation" :line-id="lineId" :service-types="serviceTypes" :key="stopStation.stationId"/>
</template>
