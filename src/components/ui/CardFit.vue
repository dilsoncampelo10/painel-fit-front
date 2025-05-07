<script setup lang="ts">
    defineProps<{
        title: string,
        number: number
    }>()

</script>

<template>
    <div class="card">
       {{title}}
        <div class="number">
            {{number}}
        </div>
    </div>
</template>

<style scoped>
   .card{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 62px;
    gap: 10px;
    width: 371.33px;
    height: 142px;
    background: #FFFFFF;
    border: 1px solid #DFE1E7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    flex: none;
    order: 0;
    flex-grow: 1;
    }
    .number{
    width: 22px;
    height: 26px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 26px;
    color: #153B4E;
    flex: none;
    order: 1;
    flex-grow: 0;

    }

</style>