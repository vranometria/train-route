<script setup lang="ts">
import type { StationModel } from '@/types/station-model';
  const props = defineProps<{
    top: StationModel,
    last: StationModel,
  }>();

  const topName = props.top ? props.top.name : "未定義";
  const lastName = props.last ? props.last.name : "未定義";
</script>

<template>
  <div class="direction">
    <div class="top">
      {{ topName }} 方面
    </div>
    <div class="last">
      {{ lastName }} 方面
    </div>
  </div>
</template>

<style scoped>
.top {
  margin-bottom: 200px;
}

.last {
  text-align: bottom;
}
</style>
