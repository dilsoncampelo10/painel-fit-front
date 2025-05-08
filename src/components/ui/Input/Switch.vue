<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  id: string
}>()

const checked = ref(false)
</script>

<template>
  <input
    type="checkbox"
    :id="'switch_'+id"
    class="input_switch"
    v-model="checked"
  />
  <label :for="'switch_'+id" class="switch" :class="{ active: checked }">
    <span class="slider" :class="{ active: checked }"></span>
  </label>
</template>

<style scoped>
.input_switch {
  display: none;
}

.switch {
  position: relative;
  background-color: #777;
  width: 48px;
  height: 24px;
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  padding: 5px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.slider {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  width: 18px;
  height: 17px;
  transition: all 0.5s ease-in-out;
}

.switch.active {
  background-color: #10b981;
}

.slider.active {
  transform: translateX(20px);
}
</style>
