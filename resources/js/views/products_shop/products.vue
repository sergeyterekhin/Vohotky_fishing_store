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
    name: "Products",
    components:{ News,Vsort,Vpagination},
    data() {
    return {
       sortType: "sort",
       page: 1,
       queryparams: "",
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
        this.actionproduct();
    },
    methods:{
    ...mapActions({
    ajaxproduct: 'product/ajaxProductsbyCategoryFromDB'
    }),
        sortBy(sort){
            this.page=1;
            this.sortType=sort;
            this.queryparams='?sort='+this.sortType;
        },
        pageBy(page){
            this.page=page;
            if(this.sortType=='sort')
            this.queryparams='?page='+this.page;
            else
            this.queryparams='?sort='+this.sortType+'&page='+this.page;
        },
        actionproduct(){
        var catalog= this.$route.params.catalog;    
       //Если на страницу зашли с квери параметрами
       if(Object.keys(this.$route.query).length!=0){
        catalog=catalog+"?";
        if("sort" in this.$route.query) {
            this.sortType=this.$route.query.sort;
            catalog=catalog+"sort="+this.sortType+"&";
        }
        if("page" in this.$route.query) {
            this.page=this.$route.query.page;
            catalog=catalog+"page="+this.$route.query.page;
            }
        }
        //=======================================
    this.ajaxproduct(catalog);
        }
    },
    computed:{
        ...mapGetters({
        getProductsbyCategory: 'product/getProductsbyCategory'
        }),
        thistimeurl(){
            return this.$route.params.catalog;
        },
        thisurlquery(){
        return this.$route.query;    
        }   
    },
    watch:{
     thistimeurl(){
         this.sortType="sort";
         this.page="1";
         this.queryparams="";
          this.actionproduct();
        },
        thisurlquery(news){
            if(!Object.keys(news).length==0){
            this.actionproduct();
            }
        },
        queryparams(news){
            if(news!="")
            router.push('/catalog/'+this.$route.params.catalog+this.queryparams);
        }
    }
}
</script>