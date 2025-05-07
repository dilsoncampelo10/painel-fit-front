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
        <section class="container box_fit">
            <a href="" class="link_fit">
                <div class="box_fit_links">
                    <img class="box_img" src="../../assets/images/training.png" alt="treinando">
                    <h2 class="fit_title">Treinos</h2>
                </div>
            </a>
            <div class="box_fit_links">
            </div>
            <div class="box_fit_links">
            </div>
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
    }
    .box_fit_links{


box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 12px 40px;
gap: 10px;

width: 371px;
height: 281px;

/* primary/153B4E */
background: #153B4E;
border: 1px solid #000000;
border-radius: 10px;

/* Inside auto layout */
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