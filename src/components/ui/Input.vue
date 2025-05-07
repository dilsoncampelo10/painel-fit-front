<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  modelValue: string
  type?: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="input"
    :value="modelValue"
    @input="handleInput"
  />
</template>
<style scoped>
    .input{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 710px;
        height: 50px;
        outline: 0;
        flex: none;
        box-sizing: border-box;
        padding: 12px 20px;
        gap: 10px;
        background: #FFFFFF;
        border: 1px solid #9D9AAD;
        border-radius: 10px;
        flex: none;
        order: 0;
    }
</style>