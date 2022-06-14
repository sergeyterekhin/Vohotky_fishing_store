<template>
  <main>
    <spin-loading v-if="!loader"></spin-loading>
    <div v-else id="hist">
    <h1>Мои заказы</h1>
    <div class="devider"></div>
    <div v-if="GetOrders.length<1">
        <p>Вы пока не совершали покупок.</p>
        </div>
        <div v-else>
    <table class="order-list">
      <tbody>
        <tr>
          <th class="number">Номер заказа</th>
          <th class="date">Дата</th>
          <th class="sum">Сумма, руб.</th>
          <th class="goods-info">Статус оплаты</th>
          <th class="status">Статус заказа</th>
        </tr>
        <tr v-for="order in GetOrders" :key="order.code" @click="openOrder(order.code)">
          <td class="number right">{{order.code}}</td>
          <td class="date center">{{dateConvert(order.created_at)}}</td>
          <td class="sum right">{{order.total_price}}</td>
          <td class="goods-info center" :style="order.status_payment=='Не оплачено' ? 'color:red' : 'color:green' ">{{order.status_payment}}</td>
          <td class="status center" :style="order.status_order==3 ? 'color:green' : (order.status_order==2 ? 'color:orange' : 'color:blue') ">{{order.status_order_ru}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SpinLoading from '../components/SpinSite.vue'
import router from '../router';
export default {
    data(){
        return{
            loader:false,
        }
    },

    components:{SpinLoading},

    computed:{
        ...mapGetters({
        GetOrders: 'order/getOrders'
        }),
    },

    methods:{
    ...mapActions({
    RequestOrder: 'order/ajaxOrder',
    }),

    openOrder(code){
    router.push('/history/'+code)
    },

    dateConvert($date){
        let d = new Date($date);
          return d.toLocaleDateString()
      }
    },

    mounted(){
        this.RequestOrder().then(()=> this.loader=true);
    },

};
</script>  