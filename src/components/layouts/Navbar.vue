<script setup lang="ts">
import ContactButton from '../ui/ContactButton.vue';

</script>

<template>
    <nav class="navbar">
        <section class="container">
            <div>
                <p>HAVENDO QUALQUER DÚVIDA, ENTRE EM CONTATO COM NOSSO SAC  <strong>(17) 9 9126-6117</strong></p>
            </div>
            <div>
                <ContactButton/>
            </div>
        </section>
    </nav>
</template>

<style scoped>
    .navbar{
        height: 50px;
        background: #282733;
        color: white;
        display: flex;
        justify-content: center;
    }
    .container{
       display: flex;
       justify-content: space-between;
        width: 80%;
        align-items: center;
       
    }
</style>