<template>
  <main>
      <spin-loading v-if="!loader"></spin-loading>
    <div v-else id="order">
    <h1>Заказ № {{this.$route.params.code}} от {{dateConvert(GetOrder.created_at)}}</h1>
    <div class="devider"></div>
    <table>
      <tbody v-if="GetOrder.user">
        <tr><td><strong>Имя: </strong></td><td> {{GetOrder.user.name}}</td></tr>
        <tr><td><strong>Телефон: </strong></td><td>{{GetOrder.user.phone}}</td></tr>
        <tr><td><strong>E-mail:</strong></td><td>{{GetOrder.user.email}}</td></tr>
        <tr><td><strong>Статус оплаты:</strong></td><td>{{GetOrder.status_payment}}</td></tr>
        <tr><td><strong>Статус Заказа:</strong></td><td>{{GetOrder.status_order_ru}}</td></tr>
      </tbody>
    </table>

    <div class="devider"></div>
    <table class="order-list">
      <tbody>
        <tr>
          <th class="img">№</th>
          <th class="goods-name">Наименование</th>
          <th class="goods-qt">Кол-во</th>
          <th class="goods-price">Цена</th>
          <th class="goods-sum">Сумма</th>
        </tr>

        <tr v-for="product in GetOrder.products" :key="product.id">
            <td>{{product.key}}</td>
          <td class="goods-name left">{{product.name}}</td>
          <td class="goods-qt right">{{product.quantity}}</td>
          <td class="goods-price right">{{product.price}}</td>
          <td class="goods-sum right">{{product.quantity*product.price}}</td>
        </tr>

        <tr class="result">
          <td colspan="4" class="right"><strong>ИТОГО:</strong></td>
          <td class="goods-sum right"><strong>{{GetOrder.total_price}}</strong></td>
        </tr>
      </tbody>
    </table>
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
        GetOrder: 'order/getOrder'
        }),
    },

    methods:{
    ...mapActions({
    RequestOrder: 'order/ajaxOrderOne',
    }),

    dateConvert($date){
        let d = new Date($date);
          return d.toLocaleDateString()
      }
    },

    mounted(){
        this.RequestOrder(this.$route.params.code).then(()=> this.loader=true).catch(()=>router.push('/'));
    },

};
</script>