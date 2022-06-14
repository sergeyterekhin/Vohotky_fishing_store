<template>
<main>
<Edit
:CHeader="this.CHeader"
:error="this.errors"
:otherData="this.form"
:droplist="GetCategory"
:Cdata="this.View_data"
@getfile="imageProduct"
:image_folder="'products'"
@CSave="CreateProducts"
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
            form:{
              name:"",
              slug:"",
              description:"",
              image_name:null,
              category_id:null,
              price:"",
              },
            CHeader:{name:'Добавление Товара',desc:"Если категория отсутствует, её следует добавить во вкладке «Категории»"},
            errors:{},
        }
    },

    methods:{
    ...mapActions({
    RequestCategory: 'category/RequestAllCategory',
    RequestAdd: 'products/RequestAddProduct',
    }),

    CreateProducts(){
      this.RequestAdd([this.form,this.photo]).then(()=>{
      this.form={name:"",slug:"",description:"",image_name:null,category_id:null,price:""}
      this.photo=new FormData();
      this.errors={};
      document.querySelector("#image_name").value = "";
      M.toast({html: 'Данные успешно добавлены!',classes: 'rounded'})
      }).catch((e)=>{
              this.errors=e.response.data;
        }) 
    },

    imageProduct(file){
      this.photo.append('file',file);
    }
    },

    computed:{
        ...mapGetters({
        GetCategory: 'category/getCategory'
        }),

        getPrice(){
          return this.form.price;
        },
    },

    mounted(){
      this.RequestCategory();  
    },

    watch:{
        getPrice(){
          if (this.getPrice<0) this.form.price=this.form.price*-1
        }
    }


}
</script>