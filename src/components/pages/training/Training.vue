<script setup lang="ts">
import Header from '../../layouts/Header.vue';
import Navbar from '../../layouts/Navbar.vue';
import CardTraining from '../../ui/Card/CardTraining.vue';

</script>

<template>
    <Navbar/>
    <Header title="Treinos"/>

    <section class="training_area">
        <div class="container">
            <h2>Seus treinos de hoje</h2>

            <main class="training_list">
                <CardTraining/>
                <CardTraining/>
                <CardTraining/>
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
        max-width: 1280px;
        margin: auto;
    }
    .training_list{
        display: flex;
        gap: 20px;
        margin-top: 20px;
    }
    
</style>