<template>
        <div class="container">
            <div class="container">
                <router-link to="/"><img class="logo" src="/img/logo.png"></router-link>
                <nav class="main">
                    <ul>
                        <li><router-link to="/">Главная</router-link></li>
                        <li><router-link to="/info/about">О компании</router-link></li>
                        <li><router-link to="/catalog">Каталог</router-link></li>
                        <li><router-link to="/info/deliveryandpay">Оплата и доставка</router-link></li>
                        <li><router-link to="/info/contact">Контакты</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
</template>

<script>
export default {
    name: "Navigation"
}
</script>