<script setup lang="ts">
import { computed } from 'vue';

    const props = defineProps<{
        image: string,
        title: string
    }>()

    const resolvedImage = computed(() => {
        return new URL(props.image, import.meta.url).href
        })
</script>

<template>
    <a href="" class="link_fit">
        <div class="box_fit_links">
            <img class="box_img" :src="resolvedImage" alt="treinando">
            <h2 class="fit_title">{{ title }}</h2>
        </div>
    </a>
</template>

<style scoped>
  .box_fit_links{
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 40px;
    gap: 10px;

    width: 371px;
    height: 281px;

    background: #153B4E;
    border: 1px solid #000000;
    border-radius: 10px;

    flex: none;
    order: 0;
    flex-grow: 0;

    }
    .box_img{
        width: 100%;
    }
    .fit_title{
        color: white;
      
    }
    .link_fit{
        text-decoration: none;
        font-size: 16px;
    }
</style>