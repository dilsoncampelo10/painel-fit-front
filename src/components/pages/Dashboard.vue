<script setup lang="ts">
import Header from '../layouts/Header.vue';
import Navbar from '../layouts/Navbar.vue';
import { ref, onMounted } from 'vue'

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
        <div>
            
        </div>
    </section>
</template>

<style>
    .container{
        max-width: 1280px;
        margin: auto;
    }
</style>