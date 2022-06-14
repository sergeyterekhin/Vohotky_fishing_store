<template>
  <main>
       <Table 
    :Data='GetCategory' 
    :Table_head="this.table_data"
    :nametab='this.nametable'
    :loader="flag"
    @changepage="pageBy"
    @editOption="editCategory"
    @deleteOption="deleteCategory"
    :buttons="button"
    :image_folder="'category'"
     />
  </main>
</template>

<script>
import Table from '../../components/Table.vue';
import router from '../../router';
import { mapActions, mapGetters } from 'vuex'
export default {
data(){
        return{
            page:1,
            table_data:[
            {head:'№', tag:'id'},
            {head:'Фотография', tag:'image_name',type:'img'},
            {head:'Название',tag:'name_ru'}],
            flag:false,
            nametable:{span:'Категории',sort:'При удалении категории, следует переназначить товарам новую категорию'},

            button:{delete:true,edit:true,search:false}
        }
    },
    components: { Table },
     methods:{
    ...mapActions({
    RequestCategory: 'category/RequestAllCategory',
    RequestDelete: 'category/DeleteCategory'
    }),
     pageBy(page){ 
         this.page=page; 
        router.push(this.$route.path+'?page='+this.page);
    },

    updatePage(){
        this.flag=false;
        if (this.$route.query.page){
        this.page=this.$route.query.page;    
        }
        this.RequestCategory({paginate:true,page:this.page}).then(()=>this.flag=true);
    },

    editCategory(id){
        router.push({name:'editCategory',params:{id}});
    },

    deleteCategory(id){
    this.RequestDelete({id:id,query:{page:this.page, paginate:true}}); 
    },

    },

    mounted(){
        this.updatePage();
    },

    computed:{
        ...mapGetters({
        GetCategory: 'category/getCategory'
        }),


        thisquery(){
            return this.$route.query;
        }
    },

      watch:{
        thisquery(){
            this.updatePage();
        }
    }
}
</script>