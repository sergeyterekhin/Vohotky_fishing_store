<template>
<main>
<Edit
:CHeader="this.CHeader"
:Cdata="this.View_data"
:error="this.errors" 
:otherData="GetUser"
:edit="true"
@CSave="UpdateUser"/>
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
            {type:'text', name_ru:'Имя',name_en:'name'},
            {type:'text', name_ru:'Телефон',name_en:'phone'},
            {type:'email', name_ru:'Почта',name_en:'email', disabled:true},
            ],
            CHeader:{name:'Пользователи',desc:"Изменяйте данные в крайнем случае"},
            errors:{},
        }
    },
  
  mounted(){
        this.GetUserAJAX(this.$route.params.id);
    },
  
  computed:{
        ...mapGetters({
        GetUser: 'user/getUserss'
        }),
    },

  methods:{
    ...mapActions({
    GetUserAJAX: 'user/GetOneUser',
    UpdateUserAJAX:'user/UpdateUser'
    }),

    UpdateUser(){
      this.errors={};
      this.UpdateUserAJAX(this.GetUser).then((response)=>{
        M.toast({html: 'Данные успешно изменены!',classes: 'rounded'})
      }).catch((e)=>{
              this.errors=e.response.data;
        }) 
      
    }
    },

}
</script>