<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Header from '../../layouts/Header.vue';
import Navbar from '../../layouts/Navbar.vue';
import CardTraining from '../../ui/Card/CardTraining.vue';
import { getTrainings } from '../../../services/TrainingService';
import type { Training } from '../../../types/Training';

const trainings = ref<Training[]>([])

onMounted(async () => {
  trainings.value = await getTrainings()
  console.log(trainings.value)
})

</script>

<template>
    <Navbar/>
    <Header title="Treinos"/>

    <section class="training_area">
        <div class="container">
            <h2>Seus treinos de hoje</h2>

            <main class="training_list">
                <CardTraining
                v-for="training in trainings"
                :key="training.id"
                :training="training"
                />
            </main>
        </div>
    </section>
</template>

<style scoped>
    .training_area{
        color: #605E70;
        text-align: center;
    }
    .container{
        max-width: 1360px;
        margin: auto;
    }
    .training_list{
        display: flex;
        gap: 20px;
        margin-top: 20px;
        flex-wrap: wrap;
    }
    
</style>