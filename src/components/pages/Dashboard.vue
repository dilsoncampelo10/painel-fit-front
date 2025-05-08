<script setup lang="ts">
import Header from '../layouts/Header.vue';
import Navbar from '../layouts/Navbar.vue';
import { ref, onMounted } from 'vue'
import LinkFit from '../ui/LinkFit.vue';
import CardFit from '../ui/CardFit.vue';
import Footer from '../layouts/Footer.vue';

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

        <section class="container box_fit card_area">
            <CardFit title="Treinos concluídos / Semana" :number="3"/>
            <CardFit title="Treinos disponíveis" :number="5"/>
            <CardFit title="Treinos disponíveis" :number="2"/>
            
        </section>
    </section>
    <Footer/>
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
        gap: 30px;
    }
    .card_area{
        margin-top: 130px;
    }
 
  
</style>