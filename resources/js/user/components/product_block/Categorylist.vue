<template>
<div>
        <h1>{{h2text}}</h1>
            
            <ul class="dots">
                <li v-for="category in getCategories" :key="category.id"><router-link :to="{ name:'products', params:{ catalog:category.name_en}}">
    <div class="name">{{category.name_ru}}</div>
    <img src="/img/photonotfound.png"  
    width="270" 
    height="240">
    </router-link></li>      
            </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    
    props: ['h2text'],
    name: "Categorylist",
    computed:{
       ...mapGetters({
            getCategories: 'category/getCategories'
        }),
    },     
}
</script>