<template>
  <main>
    <Table 
    :Data='GetUsers' 
    :Table_head="this.table_data"
    :nametab='this.nametable'
    :buttons="button"
    @changepage="pageBy"
    @deleteOption="deleteUser"
    @editOption="editUser"
     />
  </main>
</template>

<script>
import Table from '../../components/Table.vue'
import router from '../../router';
import { mapActions, mapGetters } from 'vuex'
export default {
    name:"Allusers",
    data(){
        return{
            query:"",

            table_data:[
            {head:'№', tag:'id'},
            {head:'Имя',tag:'name'},
            {head:'Телефон',tag:'phone'},
            {head:'Почта',tag:'email'},
            {head:'Дата регистрации',tag:'created_at'},
            {head:'Верифицирован',tag:'verficated'}],

            nametable:{span:'Пользователи',sort:""},

            button:{delete:true,edit:true}
        }
    },
    components: { Table },
    mounted(){
        this.updatePage();
    },
    computed:{
        ...mapGetters({
        GetUsers: 'user/getUserss'
        }),

        thisquery(){
            return this.$route.query;
        }
    },

    methods:{
    ...mapActions({
    GetUsersAJAX: 'user/GetUsers',
    DeleteUsersAJAX: 'user/DeleteUser'
    }),

    updatePage(){
        this.query="";
        if(this.$route.query.sort){
        this.$route.query.sort=='verificated' ? this.nametable.sort='Верифицированные' : this.nametable.sort='Не верифицированные'
        this.query='?sort='+this.$route.query.sort;
        }else {this.nametable.sort="Все"}
        if (this.$route.query.page) 
        this.query=="" 
        ? this.query='?page='+this.$route.query.page 
        : this.query=this.query+'&page='+this.$route.query.page
        this.GetUsersAJAX(this.query)
    },

    pageBy(page){
        if(this.$route.query.sort)
        this.query='?sort='+this.$route.query.sort;
         this.query=="" 
        ? this.query='?page='+page 
        : this.query=this.query+'&page='+page
        router.push(this.$route.path+this.query);
    },
    deleteUser(id){
       this.DeleteUsersAJAX({id:id,query:this.query}); 
    },
    editUser(id){
        router.replace({name:'editUsers',params:{id}});
    }

    },

    watch:{
        thisquery(){
            this.updatePage();
        }
    }
}
</script>