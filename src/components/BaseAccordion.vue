<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  title: String,
})

//現在の状態を表す(true-?開いている, false-?閉じている)
const isOepn = ref(false)
const changeState = () => {
  isOepn.value = !isOepn.value
};
</script>

<template>
  <div>
    <label :onclick="changeState">
      {{ isOepn ? '-' : '+' }} {{ title }}
    </label>
    <div v-if="isOepn">
      <slot></slot>
    </div>
  </div>
</template>
