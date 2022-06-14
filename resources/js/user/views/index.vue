<template>
<main>
<div id="banner_content">
  <div id="banner">              
    <div><img src="/img/bannerOleg.jpg" class=" ls-is-cached lazyloaded"></div>
    </div>

    <ul class="advantages">
        <li><img class="lazyloaded" src="img/small-bnr-1.jpg" alt="" height="170" width="270"></li>
        <li><img class="lazyloaded" src="img/small-bnr-2.jpg" alt="" height="170" width="270"></li>
        <li><img class="lazyloaded" src="img/small-bnr-3.jpg" alt="" height="170" width="270"></li>
    </ul>
</div>
<div class="devider"></div>
<section class="goods_set">
<h1>Новинки</h1>
<router-link class="more" to="/catalog/news">Показать все новинки</router-link>
<News :getProductsNew='getNew'></News>
</section>

<section class="goods_set" v-for="(value, name) in getRproducts" :key="value.id">
<h2>{{goods_set_header[name]}}</h2>
<News :getProductsNew='value'></News>
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
      goods_set_header:['Вам могут понравиться','Хиты продаж'],
    }
  },
    name: "Index",
    components:{
        News,Categorylist
    },
    mounted(){
      this.newProducts("?limit=4");
      this.Rproducts(2);
    },
    computed:{
    ...mapGetters({
     getNew: 'product/getProductsbyCategory',
     getRproducts:'product/getRproducts'
    }),
    },
    methods:{
    ...mapActions({
    newProducts:'product/NewProducts',
    Rproducts:'product/OtherProducts'
    }),
  }
}
</script>