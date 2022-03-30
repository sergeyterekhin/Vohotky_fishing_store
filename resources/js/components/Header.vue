<template>
<header>
    <div class="pcformat">
        <div class="top">
            <div class="container">
                <div class="container">
                    <p>Магазин для рыбалки и активного отдыха</p>
                    <nav class="user">
                        <ul v-if="!authenticated">
                            <li class="phone"><i class="fa-solid fa-phone"></i><a href="tel:+79137085924">+7 (913) 708-59-24</a></li>
                            <li class="mail"><i class="fa-regular fa-envelope"></i> <a href="mailto:chupakabra228228@gmail.com">chupakabra228228@gmail.com</a></li>
                            <li>
                                <i class="fa-regular fa-user"></i> <router-link class="login" to="/auth">Войдите</router-link> 
                                или
                                <router-link to="/registration">Зарегистрируйтесь</router-link>
                            </li>
                        </ul>
                        <ul v-else>
                            <li><strong>{{user.name}}</strong> <i class="fa-regular fa-user"></i></li>
                            <li><router-link to="/profile">Профиль</router-link> <i class="fa-regular fa-address-card"></i></li>
                            <li><router-link to="/">История</router-link> <i class="fa-solid fa-list-check"></i></li>
                            <li><a href="#" @click.prevent="signOut">Выйти</a> <i class="fa-solid fa-arrow-right-from-bracket"></i></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
 
            <Navigation></Navigation>

<div class="bottom">
    <div class="container">
        <div class="container">
            <div class="catalog_wrapper">
                Основные категории <i class="fa-solid fa-angle-down"></i>
            </div>
            
            <Search></Search>
            <Cart></Cart>

            </div>
            </div>
        </div>
    </div>    
    </header>
</template>

<script>
import Cart from './header_block/Cart.vue';
import Search from './header_block/SearchCatalog.vue';
import Navigation from './header_block/Navigation.vue';
import { mapActions,mapGetters } from 'vuex'

export default {
    name: "Header",
    components:{
        Cart, Search, Navigation
    },
    methods:{
        ...mapActions({
            signOutAction: 'auth/signOut'
        }),
        signOut(){
           this.signOutAction().then(()=> {
              this.$router.replace({ name: 'Home'}) 
           })
        }
    },
    computed:{
        ...mapGetters({
          authenticated: 'auth/authenticated',
          user: 'auth/user',  
        })
    }
}
</script>