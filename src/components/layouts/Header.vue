<script setup lang="ts">
import router from '../../router';
import { logout } from '../../services/AuthService';

    defineProps<{
    title: string
    }>()

    async function handleLogout() {
    try {
        await logout()
        router.push('/login')
    } catch (error) {
        alert('Erro ao sair. Tente novamente.')
    }
    }
</script>

<template>
    <header>
        <section class="container">
            <div>
                <img src="../../assets/images/logo.png" alt="logo Always Fit">
            </div>
            <div>
                <h1>{{title}}</h1>
            </div>
            <div class="logout_btn_area">
                <button class="logout_btn" @click="handleLogout">
                    <img src="../../assets/icons/logout.svg" alt="logout">
                    <p>Sair</p>
                </button>
            </div>
        </section>
    </header>
</template>

<style scoped>
    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 30px 135px;
        background: #F6F6FA;
        box-shadow: 0px 8px 30px -8px rgba(29, 29, 38, 0.2);
        margin-bottom: 40px;

    }
    header h1{
        font-size: 36px;
    }
    .container{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .container div{
        flex: 1;
        text-align: center;
    }
    .logout_btn_area{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .logout_btn{
        border: 0;
        background-color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 16px; 
        cursor: pointer;
    }
</style>