<template>
  <div>
    <router-link to="/cart">
      <div id="cart">
        <div class="i-cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="cartname">
          Корзина <br />
          <div class="carthar" v-if="getHeaderCategories">
            Сумма: {{ getHeaderCategories.total_price }} ₽
            <br />
            Кол-во: {{ getHeaderCategories.total_quantity }} шт.
          </div>
          <div class="carthar" v-else>
            Корзина
            <br />
            Пуста :(
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Cart",
  created() {
    this.CartUserssend();
  },
  computed: {
    ...mapGetters({
      getHeaderCategories: "cart/getHeaderCart",
      authenticated: "auth/authenticated",
    }),
  },
  methods: {
    ...mapActions({
      CartUserssend: "cart/CartUsers",
    }),
  },
  watch: {
    authenticated() {
      this.CartUserssend();
    },
  },
};
</script>