<script setup lang="ts">
import Header from '../../layouts/Header.vue';
import Navbar from '../../layouts/Navbar.vue';

</script>

<template>
    <Navbar/>
    <Header title="Treinos"/>

    <section class="training_area">
        <div class="container">
            <h2>Seus treinos de hoje</h2>

            <main class="training_list">
                <div class="training_card">
                    <h3>Supino Reto</h3>
                    <img class="img_card" src="../../../assets/images/trainingMan.png" alt="imagem">
                    <div><label>Realizado? </label> <input type="radio" name="" id=""></div>
                    <div>
                        <p>Meta</p>
                        <div></div>
                        <a href="">Datalhes</a>
                    </div>
                </div>
                <div></div>
                <div></div>
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
    }
    .training_card{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 16px 0px;
        gap: 14px;
        width: 436px;
        height: 591px;
        background: #FFFFFF;
        border: 1px solid #DFE1E7;
        box-shadow: 0px 16px 40px -8px rgba(29, 29, 38, 0.08);
        border-radius: 10px;

    }
    .img_card{
        width: 320px;
    }
</style>