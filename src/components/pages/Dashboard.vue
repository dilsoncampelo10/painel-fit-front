<script setup lang="ts">
import Header from '../layouts/Header.vue';
import Navbar from '../layouts/Navbar.vue';
import { ref, onMounted } from 'vue'
import LinkFit from '../ui/LinkFit.vue';

const userName = ref('')

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  userName.value = user.name || 'Visitante'
})
</script>

<template>
    <Navbar/>
    <Header title="Dashboard"/>
    <section class="dashboard_area">
        <div class="container">
            <p>Olá <strong>{{userName}}</strong> Seja bem-vindo!</p>
        </div>
        <section class="container box_fit">
            <LinkFit image="../../assets/images/training.png" title="Treinos"/>
            <LinkFit image="../../assets/images/diet.png" title="Plano nutricional"/>
            <LinkFit image="../../assets/images/progress.png" title="Progresso"/>
            
        </section>
    </section>
</template>

<style>
    .container{
        max-width: 1280px;
        margin: auto;
    }
    .box_fit{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;
    }
  
</style>