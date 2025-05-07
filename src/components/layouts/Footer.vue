<template>
    <footer>
        <section class="container">
            <div>
                <img src="../../assets/icons/logofooter.svg" alt="logo footer">
            </div>
            <div>
                <p class="title"><strong>ALWAYS FIT ®</strong></p>
                <p>Saúde Longevidade e Autoestima</p>

                <p class="title"><strong>Contato:</strong></p> <p>0800 454 5103 1799126-6117 (Whatsapp)</p>

                <p class="title"><strong>Endereço:</strong></p>
                <p>Rodovia Fernão Dias, 937</p>
                <p>Complemento: BW Diase - </p>
                <p>DocaLog G500 Modulo 5</p>
                <p>CEP: 37646-202</p>
                <p>Extrema - MG</p>
                <p>30.417.094/0001.60</p>
            </div>
            <div>
                <p class="title"><strong>POLÍTICA</strong></p>
            <ul class="link_list">
                <li><a href="">Quem Somos</a></li>
                <li><a href="">Política de Segurança</a></li>
                <li><a href="">Política de Privacidade</a></li>
                <li><a href="">Política de Entrega</a></li>
                <li><a href="">Política de Cookies</a></li>
                <li><a href="">Política de Devolução</a></li>
            </ul>
            </div>
        </section>
        <aside>
        <p>© 2025 Always Fit</p>
    </aside>
    </footer>
    
</template>

<style scoped>
    .container{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .title{
        margin-top: 30px;
    }
    .container div{
        flex: 1;
    }
    .link_list{
        list-style: none;
    }
    .link_list li {
        margin-top: 10px;
    }
    .link_list li a{
        color: white;
    }
    footer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        height: 560px;
        margin-top: 150px;
        background: #282733;
        color: white;
    }
</style>