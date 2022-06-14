<template>
<main>
<Edit
:CHeader="this.CHeader"
:error="this.errors"
:otherData="this.form"
:Cdata="this.View_data"
@getfile="imageCategory"
@CSave="CreateCategory"
/>  
</main>
</template>

<script>
import Edit from '../../components/Edit.vue'
import { mapActions } from 'vuex'
export default {
      components: { Edit },

      data(){
        return{
            View_data:[
            {type:'text', name_ru:'Название категории',name_en:'name_ru'},
            {type:'file', name_ru:'Фотография',name_en:'image_name'},
            ],
            photo:new FormData(),
            form:{
              name_ru:"",
              image_name:null,
              },
            CHeader:{name:'Создание категории',desc:"После добавление категории, её можно заполнить товарами"},
            errors:{},
        }
    },

    methods:{
    ...mapActions({
    RequestAdd: 'category/AddCategory',
    }),

    CreateCategory(){
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

    imageCategory(file){
      this.photo.append('file',file);
    }
    },


}
</script>