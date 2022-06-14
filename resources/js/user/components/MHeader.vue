<template>
<nav id="mobile_nav">
      <div class="mobile_overlay hiden" onclick="HideAll()"></div>
      <ul class="panel dark">
        <li class="menu left"><a onclick="showMobileCatalog()"></a></li>
        <li class="clse left"><a onclick="HideAll()"></a></li>
        <li class="srch left"><a onclick="showSearchProduct()"></a></li>
        <li v-if="isAuth" class="user left"><router-link to="/profile"></router-link></li>
        <li v-else class="auth left"><router-link to="/auth"></router-link></li>
        <li class="cart right"><router-link to="/cart"></router-link></li>
        <li class="addr right"><router-link to="/info/contact/"></router-link></li>
        <li class="call right"><a href="tel:+79137085924"></a></li>
        <li class="lgtp center"><router-link to="/"></router-link></li>
      </ul>

      <div class="mobile_search_wrapper">
        <a class="back" onclick="HideAll()"></a>
        <form>
          <input type="text" placeholder="Введите запрос" autofocus="" onkeyup="" v-model="search"/>
          <button @click.prevent="submit" :disabled="this.search.length<3" ><div class="imgs"></div></button>
        </form>
        <div id="search_hints" style="max-height: 640px"></div>
      </div>

      <div class="mobile_catalog_wrapper hidden empty" style="max-height: 617px">
        <div class="mobile-menu-header">
          <nav class="main">
            <ul></ul>
          </nav>
        </div>
        <div id="shop_cats">
                <ul class="category">
			<li v-for="category in getCategories" :key="category.id" onclick="HideAll()">
                <router-link :to="{ 
                    name:'products', 
                    params:{ catalog:category.name_en}
                    }">{{category.name_ru}}
                    </router-link></li>
        </ul>
                  </div>
        <div class="mobile-menu-bottom">
          <nav class="main">
            <ul></ul>
          </nav>
        </div>
      </div>

    </nav>
</template>

<script>
import router from '../router';
import {mapGetters } from 'vuex'
export default {
 props:['isAuth'],
 computed:{
        ...mapGetters({
            getCategories: 'category/getCategories'
        })
    },
 data(){
    return{
        search:"",
        bflag:false,
        }
    },
    methods: {
        async submit(){
            HideAll()
           await router.push('/catalog/search?search='+this.search)
            this.search="";
        }
    },
}
</script>