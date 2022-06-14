<template>
<main>
<Edit
:CHeader="this.CHeader"
:Cdata="this.View_data"
:error="this.errors" 
:otherData="GetProduct"
:droplist="GetCategory"
:edit="true"
@CSave="UpdateProduct"
:image_folder="'products'"
@getfile="imageProduct"
/>
</main>
</template>

<script>
import Edit from '../../components/Edit.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
   components: { Edit },
  
  data(){
        return{
            View_data:[
            {type:'text', name_ru:'Название товара',name_en:'name'},
            {type:'textarea', name_ru:'Характеристики товара',name_en:'slug'},
            {type:'textarea', name_ru:'Описание товара',name_en:'description'},
            {type:'file', name_ru:'Фотография',name_en:'image_name'},
            {type:'drop',name_ru:'Категория',name_en:'category_id'},
            {type:'number', name_ru:'Цена',name_en:'price'},
            ],
            photo:new FormData(),
            CHeader:{name:'Редактирование товара',desc:"Вы можете изменить определенные данные товара"},
            errors:{},
        }
    },
  
  mounted(){
        this.GetProductAJAX(this.$route.params.id);
        this.RequestCategory();
    },
  
  computed:{
        ...mapGetters({
        GetProduct: 'products/getProducts',
        GetCategory: 'category/getCategory'
        }),
    },

  methods:{
    ...mapActions({
    GetProductAJAX: 'products/RequestOneProduct',
     RequestCategory: 'category/RequestAllCategory',
    UpdateProductAJAX:'products/UpdateProducts'
    }),

    UpdateProduct(){
      this.UpdateProductAJAX([this.GetProduct,this.photo]).then(()=>{
           this.photo=new FormData();
           this.errors={};
           document.querySelector("#oldimage").style.display='block';
        M.toast({html: 'Данные успешно изменены!',classes: 'rounded'})
      }).catch((e)=>{
              this.errors=e.response.data;
        }) 
      
    },

    imageProduct(file){
      this.photo.append('file',file);
    }
    },

}
</script>