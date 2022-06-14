<template>
  <main>
    <Table 
    :Data='GetProducts' 
    :Table_head="this.table_data"
    :nametab='this.nametable'
    :loader="flag"
    :image_folder="'products'"
    
    @changepage="pageBy"
    
    :sort="GetCategory"
    :selected="query.categoryselect"
    :has_allDropDown="true"
    @selected="changeCategory"

    @search_data="searchProduct"
    :VarSearch="query.search"

    @deleteOption="deleteProducts"
    @editOption="editProducts"

    :buttons="button"
     />
  </main>
</template>

<script>
import Table from '../../components/Table.vue';
import router from '../../router';
import { mapActions, mapGetters } from 'vuex'
export default {
    name:"Allproducts",
    data(){
        return{
            query:{categoryselect:"all",page:1,search:""},
            table_data:[
            {head:'№', tag:'id'},
            {head:'Фотография', tag:'image_name',type:'img'},
            {head:'Имя',tag:'name'},
            {head:'Характеристики',tag:'slug',type:'vhtml'},
            {head:'Описание',tag:'description',type:'noshow'},
            {head:'Категория', tag:'category_name'},
            {head:'Дата добавления',tag:'created_at',type:'date'},
            {head:'Цена', tag:'price'},],
            flag:false,
            nametable:{span:'Товары'},

            button:{delete:true,edit:true,search:true}
        }
    },
    components: { Table },
    mounted(){
        this.updatePage();
    },
    computed:{
        ...mapGetters({
        GetProducts: 'products/getProducts',
        GetCategory: 'category/getCategory'
        }),

        thisquery(){
            return this.$route.query;
        },

        querybuild(){
          let QueryArray=[];
          if (this.query.categoryselect!="all") QueryArray.push('sort='+this.query.categoryselect);
          if (this.query.page!=1) QueryArray.push('page='+this.query.page);
          if (this.query.search.length!="") QueryArray.push('search='+this.query.search);
          if (QueryArray.length>=1) return '?'+QueryArray.join('&'); else return "";
        }, 
    },

    methods:{
    ...mapActions({
    RequestProducts: 'products/RequestProducts',
    RequestCategory: 'category/RequestAllCategory',
    RequestDelete: 'products/DeleteProduct'
    }),

    searchProduct(search){
    if((search.length>3 || search=="") && search!=this.query.search){
    this.query.search=search;
    this.query.page=1;
    router.push(this.$route.path+this.querybuild);
    }
    },

    deleteProducts(id){
    this.RequestDelete({id:id,query:this.querybuild}); 
    },
    editProducts(id){
        router.push({name:'editProducts',params:{id}});
    },

    changeCategory(category){
        this.query.page=1;
        this.query.search="";
        this.query.categoryselect=category;
        router.push(this.$route.path+this.querybuild);
    },
    
    pageBy(page){
        this.query.page=page;
        router.push(this.$route.path+this.querybuild);
    },

    updatePage(){
        if(Object.keys(this.$route.query).length!=0){
        if("sort" in this.$route.query) this.query.categoryselect=this.$route.query.sort;
        if("page" in this.$route.query) this.query.page=this.$route.query.page;
        if("search" in this.$route.query) this.query.search=this.$route.query.search;
        } else {
         this.query={categoryselect:"all",page:1,search:""};
        }
        this.RequestProducts(this.querybuild).then(() =>this.RequestCategory().then(()=>this.flag=true));
        },
    },

    watch:{
        thisquery(){
            this.flag=false;
            this.updatePage();
        }
    }
}
</script>