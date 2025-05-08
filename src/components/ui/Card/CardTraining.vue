<script setup lang="ts">
import Switch from '../Input/Switch.vue';



</script>

<template>
    <div class="training_card">
        <h3>Supino Reto</h3>
        <img class="img_card" src="../../../assets/images/trainingMan.png" alt="imagem">
        <div class="switch_area"><label>Realizado? </label> 
        <Switch id="s"/>
        
        </div>
        <div>
            <p>Meta</p>
            <div></div>
            <a href="" class="training_details">Datalhes</a>
        </div>
    </div>
</template>

<style scoped>
    .training_card{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px 10px;
        gap: 14px;
        width: 436px;
        height: 591px;
        background: #FFFFFF;
        border: 1px solid #DFE1E7;
        box-shadow: 0px 16px 40px -8px rgba(29, 29, 38, 0.08);
        border-radius: 10px;
    }
    .training_details{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px 40px;
        gap: 10px;
        width: 396px;
        height: 50px;
        text-decoration: none;
        color: #153B4E;
        border: 2px solid #153B4E;
        border-radius: 10px;
        font-weight: bold;
    }
    .training_details:hover{
        background-color: #153B4E;
        color: white;
        transition: .5s;
    }
    .img_card{
        width: 320px;
    }
   .switch_area{
        align-items: center;
        display: flex;
        justify-content: space-around;
        width: 50%;
   }

</style>