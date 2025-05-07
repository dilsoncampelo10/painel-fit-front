<script setup lang="ts">
import { useRouter } from 'vue-router';
import Navbar from '../../layouts/Navbar.vue';
import Input from '../../ui/Input.vue';
import LoginButton from '../../ui/LoginButton.vue';
import { ref } from 'vue';
import AuthService from '../../../services/AuthService';

const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref(false)

const login = async () => {
  try {
    await AuthService.login(email.value, password.value)
    router.push('/') 
  } catch (error) {
    errorMessage.value = true
  }
}

</script>

<template>
    <Navbar/>
    <section class="login_area">
        <div class="container">
            <div class="box container">
                <header>
                    <img src="../../../assets/images/logo.png" alt="logo Always Fit">
                    <h1 class="title">Login</h1>
                </header>
                <aside class="aside_text">
                    <p><strong>Olá!</strong></p>

                    <p>Este é o ambiente seguro de login da Always Fit ® </p>
                </aside>
                <main class="container">
                    <p class="login_description"><strong>Para acessar, informe suas credeciais.</strong></p>
                    <p class="login_description error" v-if="errorMessage">E-mail ou senha incorretos.</p>
                    <Input v-model="email" type="email" placeholder="E-mail"/>
                    <Input v-model="password" type="password" placeholder="Senha"/>
                    <LoginButton @click="login" />
                </main>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .title{
        font-size: 36px;
        text-align: center;
        margin-top: 30px;
        
    }
    .error{
        color: #dc2626;
        font-weight: bold;
    }
    .aside_text{
        width: 100%;
        margin-bottom: -60px;
        padding: 10px 30px;
    }
    .aside_text p{
        margin: 20px 0;
    }
    .login_description{
        width: 100%;
        margin-bottom: -30px;
    }
    .login_area{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;

    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 0;
        gap: 40px;
    }
    .box{
        background-color: #F6F6FA;
        width: 770px;
    
        background: #F6F6FA;
        box-shadow: 0px 8px 30px -8px rgba(29, 29, 38, 0.2);
        border-radius: 4px;

    }
    input{
        margin-bottom: -30px;
    }

</style>