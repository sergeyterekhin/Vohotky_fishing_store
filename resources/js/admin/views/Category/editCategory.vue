<template>
<main>
<Edit
:CHeader="this.CHeader"
:Cdata="this.View_data"
:error="this.errors" 
:otherData="GetCategory"
:edit="true"
:image_folder="'category'"
@CSave="UpdateCategory"
@getfile="imageCategory"
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
            {type:'text', name_ru:'Название',name_en:'name_ru'},
            {type:'file', name_ru:'Фотография',name_en:'image_name'},
            ],
            photo:new FormData(),
            CHeader:{name:'Редактирование категории',desc:"Вы можете изменить определенные данные категории"},
            errors:{},
        }
    },
  
  mounted(){
        this.RequestCategory(this.$route.params.id);
    },
  
  computed:{
        ...mapGetters({
        GetCategory: 'category/getCategory'
        }),
    },

  methods:{
    ...mapActions({
    RequestCategory: 'category/RequestOneCategory',
    UpdateCategoryAJAX:'category/UpdateCategory'
    }),

    UpdateCategory(){
      this.UpdateCategoryAJAX([this.GetCategory,this.photo]).then(()=>{
           this.photo=new FormData();
           this.errors={};
           document.querySelector("#oldimage").style.display='block';
        M.toast({html: 'Данные успешно изменены!',classes: 'rounded'})
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