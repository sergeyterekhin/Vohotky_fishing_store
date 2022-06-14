<template>
<main>
<spin-loading v-if="flag"></spin-loading>
<div v-else id="productsShop">
<div v-if="getProductsbyCategory=='400Search'" id="notfound">
<h1 v-if="getHeader">{{getHeader}}</h1>
<p>По данному запросу результатов нет</p>
</div>
<div v-else>
    <h1 v-if="getHeader">{{getHeader}}</h1>
            <div v-if="getHeader!='Новинки'" class="sorting">
                Сортировать:
               <Vsort 
               :sortOptions="this.sortOptions"
               :sortselect="this.query" 
               @sort="sortBy"
               ></Vsort>
                </div>    
    <section class="goods_set">
<News :getProductsNew='getProductsbyCategory' 
></News>
    </section>
            <Vpagination v-if="1!=getProductsbyCategory.last_page && getHeader!='Новинки'" 
            :listpage="getProductsbyCategory.links"
            :page="this.query"
            @changepage="pageBy"/>
</div>
</div>
</main>
</template>

<script>
import News from '../../components/product_block/News.vue'
import SpinLoading from '../../components/SpinSite.vue'
import router from '../../router';
import Vsort from '../../components/product_block/sort.vue'
import Vpagination from '../../components/product_block/pagination.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Products",
    components:{ News,Vsort,Vpagination,SpinLoading},
    data() {
    return {
       query:{sortType: "sort", page: 1, search:""},
       flag:true,
       sortOptions: [
          { id:0, text: 'по умолчанию', value: "sort"},
          { id:1, text: 'по наименованию ▲', value: 'nameup' },
          { id:2, text: 'по наименованию ▼', value: 'namedown' },
          { id:3, text: 'по цене ▲', value: 'priceup' },
          { id:4, text: 'по цене ▼', value: 'pricedown' }
       ]
    }
    },
  mounted() {
        this.Startpage();
    },
    methods:{
    ...mapActions({
    ajaxproduct: 'product/ajaxProductsbyCategoryFromDB',
    searchproductajax: 'product/SearchProduct',
    newProducts:'product/NewProducts',
    }),
        sortBy(){
            this.query.page=1;
            this.flag=true;
            router.push('/catalog/'+this.$route.params.catalog+this.querybuild)
        },

        pageBy(){
            this.flag=true;
            router.push('/catalog/'+this.$route.params.catalog+this.querybuild)
        },

        Startpage(){   
        if(Object.keys(this.$route.query).length!=0){
        if("sort" in this.$route.query) this.query.sortType=this.$route.query.sort;
        if("page" in this.$route.query) this.query.page=this.$route.query.page;
        if("search" in this.$route.query) this.query.search=this.$route.query.search;    
        }
        switch (this.$route.params.catalog) {
            case "search": this.searchproductajax(this.thistimeurl+this.querybuild).then(() =>{this.flag=false;}); break;
            case "news":    this.newProducts().then(() =>{this.flag=false;}); break;
            default: this.ajaxproduct(this.thistimeurl+this.querybuild).then(() =>{this.flag=false;}); break;
        }
        }
    },
    computed:{
        ...mapGetters({
        getProductsbyCategory: 'product/getProductsbyCategory',
        getHeader:'product/getHeader'
        }),
        thistimeurl(){
            return this.$route.params.catalog;
        },
        thisurlquery(){
        return this.$route.query;    
        },
        querybuild(){
          let QueryArray=[];
          if (this.thisurlquery.search) QueryArray.push('search='+this.query.search);
          if (this.query.sortType!="sort") QueryArray.push('sort='+this.query.sortType);
          if (this.query.page!=1) QueryArray.push('page='+this.query.page);
          if (QueryArray.length>=1) return '?'+QueryArray.join('&'); else return "";
        }, 
    },
    watch:{
     thistimeurl(){
         this.query.sortType="sort";
         this.query.page="1";
         this.query.search="";
        },
        thisurlquery(){
            this.Startpage(); 
        },
    }
}
</script>