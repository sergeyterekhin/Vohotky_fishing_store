<template>
  <main>
    <div class="ShowCart" v-if="getCart.length>0">
      <h1>Корзина товаров</h1>
      <table id="shopping_cart_table">
        <tr>
          <th class="img">Фото</th>
          <th class="">Наименование</th>
          <th class="features">Характеристики</th>
          <th class="">Цена</th>
          <th class="">Количество</th>
          <th class="">Сумма</th>
        </tr>
        <tbody v-for="product_cart in getCart" :key="product_cart.id">
          <tr class="item">
            <td class="img">
                <img :src="product_cart.image_name==null ? '/storage/products/none.png' : `/storage/products/${product_cart.image_name}`" />
            </td>
            <td class="">
              <router-link
          :to="{
            name: 'producthasone',
            params: {
              catalog: product_cart.name_en,
              product: product_cart.name_url,
            },
          }">
                {{ product_cart.name }}
              </router-link>
            </td>
            <td class="features">
              <div class="item" v-html="product_cart.slug"></div>
            </td>
            <td class="digit price" style="text-align: center">
              <span class="strong">{{ product_cart.price }} ₽</span>
            </td>

            <td class="digit qt">
              <div class="buttons">
                <div class="qt">
                  <button class="decr" href="#" :disabled="product_cart.quantity<=1" @click.prevent="minus(product_cart)">–</button>
                  <p>{{ product_cart.quantity }}</p>
                  <button class="incr" href="#" :disabled="product_cart.quantity>=5" @click.prevent="pluse(product_cart)">+</button>
                </div>

                <a class="del" href="" @click.prevent="deleteProductfromCart(product_cart.id)">
                  <nobr>Удалить</nobr>
                </a>
              </div>
            </td>
            <td class="digit sum" style="text-align: center">
              {{ product_cart.price * product_cart.quantity }} ₽
            </td>
          </tr>
        </tbody>
        <tr class="cartSum">
          <td class="img noline"></td>
          <td class="features noline"></td>
          <td class="digit noline" colspan="3"><strong>ИТОГО:</strong></td>
          <td class="digit noline">
            <strong
              ><span id="cart_sum" v-if="totalSum"
                >{{ totalSum.total_price }} ₽</span
              ></strong
            >
          </td>
        </tr>
      </table>
      <div class="devider"></div>
      <div class="contain">
        <div class="form_toggle">
          <div class="form_toggle-item item-1">
            <input id="fid-1" type="radio" name="radio" value="online"  v-model="payment" />
            <label for="fid-1">Онлайн</label>
          </div>
          <div class="form_toggle-item item-2">
            <input id="fid-2" type="radio" name="radio" value="inshop" v-model="payment" />
            <label for="fid-2">В Магазине</label>
          </div>
          <p>Выберите тип оплаты</p>
        </div>

        <form class="forms">
          <button class="item submit" :disabled="bflag" @click.prevent="addToOrder">
            <div v-if="!bflag">Отправить заказ</div>
            <ring-loader v-else :size="'14px'" :color="'white'"></ring-loader>
            </button>
        </form>
      </div>
    </div>
    <div class="ShowCart" v-else-if="code!=null">
        <h1>Заказ успешно оформлен!</h1>
        <p>Спасибо, что совершили у нас покупку!</p><p> Мы свяжемся с вами по указаному при регистрации номеру телефона, когда товар будет готов к выдаче.</p>
        <p>При получении скажите этот код продавцу:</p> <b style="font-size:30px">{{this.code}}</b>
    </div>
    <div class="ShowCart" v-else>
        <h1>Корзина товаров</h1>
        <p>Ваша корзина пуста. Добавьте интересующий Вас товар на сайте в корзину, чтобы увидеть его.</p>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RingLoader from 'vue-spinner/src/ClipLoader.vue';
export default {
  name: "Cart",
  components:{RingLoader},
  data(){
    return{
      bflag:false,
      code:null,
      payment:"inshop"
    }
  },
  computed: {
    ...mapGetters({
      getCart: "cart/getProductinCart",
      totalSum: "cart/getHeaderCart",
      authenticated: "auth/authenticated",
    }),
  },
  methods: {
    ...mapActions({
      CartUserssend: "cart/CartUsers",
      deleteOnCartuser:"cart/deleteOnCarts",
      quan:"cart/updateCartsUser",
      makeOrder:"cart/MakeOrder",
    }),

    addToOrder(){
      this.bflag=true;
      this.makeOrder(this.payment).then((message)=>{
        console.log(message);
        switch (message.type) {
          case 400: 
          this.$notify({title: 'Ошибка', text: `Корзина пуста или сумма отрицательна`, type:"error"})
          break;
          case 401: 
          this.$notify({title: 'Ошибка', text: `проблемы с оформлением заказа!`, type:"error"})
          break;
          case 200: 
          this.code=message.message;
          this.CartUserssend();
          break;
          default: break;} 
        this.bflag=false;})
    },

    deleteProductfromCart(id){
    this.deleteOnCartuser(id)
    },

    minus(product){
        if(product.quantity>1){
        let colvo=product.quantity-1;
        this.quan({'id' :product.id, 'quantity':colvo}).then(()=>{
         product.quantity--;   
        }).catch((error)=> console.log(error));
        }
    },

    pluse(product){
        if(product.quantity<5){
            let colvo=product.quantity+1;
        this.quan({'id' :product.id, 'quantity':colvo}).then(()=>{
         product.quantity++;
        }).catch((error)=> console.log(error));
        }
    }
  },
};
</script>