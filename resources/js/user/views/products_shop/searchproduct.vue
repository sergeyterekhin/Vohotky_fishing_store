<template>
<main>
    <h1 v-if="this.$route.params.catalog=='news'">Новинки</h1>
    <div v-else-if="getProductsbyCategory.data">
    <h1>{{getProductsbyCategory.data[0].name_ru}}</h1>
            <div class="sorting">
                Сортировать:
               <Vsort 
               :sortOptions="sortOptions"
               :sortselect="sortType" 
               @sort="sortBy"
               ></Vsort>
                </div>
                </div>
    <section class="goods_set">
<News :getProductsNew='getProductsbyCategory.data' 
></News>
    </section>
            <Vpagination v-if="1!=getProductsbyCategory.last_page" 
            :listpage="getProductsbyCategory.links"
            :page="this.page"
            @changepage="pageBy"/>
</main>
</template>

<script>
import News from '../../components/product_block/News.vue'
import router from '../../router';
import Vsort from '../../components/product_block/sort.vue'
import Vpagination from '../../components/product_block/pagination.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    
}
</script>