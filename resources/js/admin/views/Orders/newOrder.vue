<template>
  <main>
    <Table 
    :Data='GetOrders' 
    :Table_head="this.table_data"
    :nametab='this.nametable'
    :loader="flag"
    
    @changepage="pageBy"
    
    :sort="StatusDrop"
    :selected="query.status"
    @selected="changeStatus"

    @search_data="searchOrder"
    :VarSearch="query.search"

    :buttons="button"
    @lookOption="lookOrder"
     />
  </main>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import router from '../../router';
import Table from '../../components/Table.vue';
export default {
    components:{Table},
    data(){
        return{
            query:{status:"new",page:1,search:""},
            table_data:[
            {head:'Номер заказа',tag:'code'},
            {head:'Дата создания',tag:'created_at',type:'date'},
            {head:'Имя',tag:'user_name'},
            {head:'Телефон',tag:'user_phone'},
            {head:'Статус оплаты',tag:'status_payment'},
            {head:'Статус заказа',tag:'status_order_ru'},
            {head:'Цена', tag:'total_price'},
            ],
            StatusDrop:[
            {id:1,name_en:'new',name_ru:'Необработанные заказы'},
            {id:2,name_en:'ready',name_ru:'Ожидают покупателя'},
            {id:3,name_en:'elder',name_ru:'Завершенные заказы'}
            ],
            flag:false,
            nametable:{span:'Заказы',sort:''},

            button:{search:true,look:true}
        }
    },
    mounted(){
        this.Start();
    },

    methods:{
    ...mapActions({
    RequestOrders: 'order/GetFromOrders',    
    }),

    lookOrder(id){
        router.push({name:'lookOrder',params:{id}});
    },

    searchOrder(search){
    if((search.length>3 || search=="") && search!=this.query.search){
    this.query.search=search;
    this.query.page=1;
    router.push(this.$route.path+this.querybuild);
    }
    },

     changeStatus(status){
        this.query.page=1;
        this.query.search="";
        this.query.status=status;
        router.push(this.$route.path+this.querybuild);
    },
    
    pageBy(page){
        this.query.page=page;
        router.push(this.$route.path+this.querybuild);
    },

    Start(){
        this.flag=false;
        if(Object.keys(this.$route.query).length!=0){
        if("status" in this.$route.query) this.query.status=this.$route.query.status;
        if("page" in this.$route.query) this.query.page=this.$route.query.page;
        if("search" in this.$route.query) this.query.search=this.$route.query.search;
        } else {
         this.query={sort:"all",page:1,search:""};
        }
        switch (this.query.status) {
            case "new": this.nametable.sort="Необработанные заказы"; break;
            case "ready": this.nametable.sort="Ожидают покупателя"; break;
            case "elder": this.nametable.sort="Завершенные заказы"; break;
            default: break;
        }
        this.RequestOrders(this.querybuild).then(() =>this.flag=true);
    }

    },

     computed:{
        ...mapGetters({
        GetOrders: 'order/getOrders',
        }),

        thisquery(){
            return this.$route.query;
        },

        querybuild(){
          let QueryArray=[];
          QueryArray.push('status='+this.query.status);
          if (this.query.page!=1) QueryArray.push('page='+this.query.page);
          if (this.query.search.length!="") QueryArray.push('search='+this.query.search);
          if (QueryArray.length>=1) return '?'+QueryArray.join('&'); else return "";
        },
    },

    watch:{
        thisquery(){
            this.flag=false;
            this.Start();
        }
    }
}
</script>