<template>
<main>

<div class="row">
    <div class="col s12">
        <div class="card ">
            <div class="card-content center">
             <span class="card-title">Данные заказа</span>
                <p>Заказ {{this.$route.params.id}}</p>
            </div>
        <div v-if="loader==true || loader==null" id="content_table">
        <div class="card-action">
        <a id="vi1" class="vkladka active" href="" @click.prevent="ChangeTabs(1)">Cодержимое заказа</a>
        <a id="vi2" class="vkladka" href="" @click.prevent="ChangeTabs(2)">Информация по заказу</a>
        <a id="vi3" class="vkladka" href="" @click.prevent="ChangeTabs(3)">Сменить статус заказа</a>
    </div>
   
           <div v-if="TabsFlag==1" id="test4"> 
               <div class="card-action">
                <table class="highlight">
                <thead><tr>
                    <th>№</th>
                    <th>Фотография</th>
                    <th>Название</th>
                    <th>Цена за шт.</th>
                    <th>Колличество</th>
                    <th>Итоговая сумма</th>
                    </tr></thead>
                <tr v-for="dataOrder in GetOrder.products" :key="dataOrder.key">
                    <td>{{dataOrder.key}}</td>
                    <td><img :src="dataOrder.image_name==null ? '/storage/products/none.png' : `/storage/products/${dataOrder.image_name}`" height="100px" width="100px" alt=""></td>
                    <td>{{dataOrder.name}}</td>
                    <td>{{dataOrder.price}} ₽</td>
                    <td>{{dataOrder.quantity}} шт.</td>
                    <td>{{dataOrder.quantity*dataOrder.price}} ₽</td>
                </tr>
                
                </table>
                <p>Итоговая стоимость: <b style="color:green">{{GetOrder.total_price}} ₽ </b></p>
                </div> 
            </div>
            <div v-else-if="TabsFlag==2" id="test5">
                <div class="card-action">
                
                <p><b>Имя пользователя:</b> {{ GetOrder.user.name}}</p>
                <p><b>Почта пользователя:</b> {{ GetOrder.user.email}}</p>
                <p><b>Номер телефона:</b> {{ GetOrder.user.phone}}</p>
                <p><b>Код заказа:</b> {{ GetOrder.code}}</p>
                <p><b>Дата заказа:</b> {{ Date(GetOrder.created_at).toLocaleString()}}</p>
                <p><b>Итоговая стоимость:</b> <b style="color: #9c9e1e">{{ GetOrder.total_price}}  ₽</b></p>
                <p><b>Статус оплаты:</b> <b :style="GetOrder.status_payment=='Не оплачено' ? 'color:red' : 'color:green' ">{{ GetOrder.status_payment}}</b></p>
                <p><b>Статус заказа:</b> <b :style="GetOrder.status_order==3 ? 'color:red' : (GetOrder.status_order==2 ? 'color:orange' : 'color:green') ">{{ GetOrder.status_order_ru}}</b></p>
                </div>   
            </div>

            <div v-else-if="TabsFlag==3" id="test6">
                <div class="card-action">
                    <form action="">
                    <p><label><input @click="changeCategory(1)" name="group1" type="radio" :checked="GetOrder.status_order==1" /><span>Процесс комплектации</span></label></p>
                    <p><label><input @click="changeCategory(2)" name="group1" type="radio"   :checked="GetOrder.status_order==2"/><span>Ожидает выдачи</span></label></p>
                    <p><label><input @click="changeCategory(3)" name="group1" type="radio"   :checked="GetOrder.status_order==3"/><span>Заказ выдан</span></label></p>
                    </form>
                    <a id="change_status_order" :style="GetOrder.status_order==order_status || order_status==null ? 'display:none' : 'display:inline-block'" @click.prevent="SaveChanges" class="light-blue darken-3 btn-large">Сохранить</a>
                </div>   
            </div>
     
        </div> 
     <div v-else>
         <div class="progress">
      <div class="indeterminate"></div>
  </div>
    </div>
    </div>
    </div> 

</div>

</main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
            TabsFlag:1,
            order_status:null,
            loader:false,
        }
    },

    mounted(){
        this.RequestOrder(this.$route.params.id).then(()=>this.loader=true);
    },

    computed:{
        ...mapGetters({
        GetOrder: 'order/getOrder'
        }),
    },

    methods:{
    ...mapActions({
    RequestOrder: 'order/OneOrder',
    SaveCO: 'order/updateOrder'
    }),

    changeCategory(value){
      this.order_status=value;
    },

    SaveChanges(){
        this.loader=false;
        this.TabsFlag=1;
        this.SaveCO({code:this.$route.params.id,status:this.order_status}).then(()=>{
            this.loader=true
             M.toast({html: 'Статус заказа изменён!',classes: 'rounded'})
            });
    },

    ChangeTabs(num){
        this.order_status=null;
        let st=document.querySelector("#vi"+this.TabsFlag);
        st.classList.remove("active");
        st=document.querySelector("#vi"+num);
        st.classList.add("active");
        this.TabsFlag=num;
    }

    }
};
</script>