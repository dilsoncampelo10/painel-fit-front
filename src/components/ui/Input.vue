<script setup lang="ts">
defineProps<{
  type: string
  placeholder: string
}>()
</script>

<template>
    <input :type="type" :placeholder="placeholder" class="input">
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

        align-self: stretch;

        box-sizing: border-box;
    
        padding: 12px 20px;
        gap: 10px;

        background: #FFFFFF;
        border: 1px solid #9D9AAD;
        border-radius: 10px;
        flex: none;
        order: 0;
        flex-grow: 1;
    }
</style>