<template>
<main>
<Categorylist :h2text='h2text'></Categorylist>
    <section class="goods_set">
        <h2>Новинки</h2>
        <router-link class="more" to="/catalog/news">Показать все новинки
    </router-link>
<News :getProductsNew='getProductsNew'></News>
    </section>
</main>
</template>

<script>
import News from '../components/product_block/News.vue';
import Categorylist from '../components/product_block/Categorylist.vue';
import { mapActions, mapGetters } from 'vuex'
export default {
     data () {
    return {
      h2text: 'Основные категории'
    }
  },
    name: "Index",
    components:{
        News,Categorylist
    },
    mounted(){
      this.getProduct("?limit=4");
    },
    computed:{
    ...mapGetters({
      getProductsNew: 'product/getNewProducts'
    }),
    },
    methods:{
    ...mapActions({
    getProduct: 'product/ajaxnewProducts'
    }),
  }
}
</script>