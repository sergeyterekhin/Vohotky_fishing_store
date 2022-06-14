<template>
<div>
        <h1>Категории</h1>
            
            <ul class="dots">
                <li v-for="category in getCategories" :key="category.id"><router-link :to="{ name:'products', params:{ catalog:category.name_en}}">
    <div class="name">{{category.name_ru}}</div>
    <img :src="category.image_name==null ? '/storage/products/none.png' : `/storage/category/${category.image_name}`"  
    width="270" 
    height="240">
    </router-link></li>      
            </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Categorylist",
    computed:{
       ...mapGetters({
            getCategories: 'category/getCategories'
        }),
    },     
}
</script>