<template>
  <main>
    <div v-for="product in getProduct.product" :key="product.id">
      <h1>{{ product.name }}</h1>
      <div id="shop_goods">
        <div class="goods-card">
          <div class="gallery">
            <div class="middle">
              <img :src="product.image_name" />
            </div>
          </div>
          <div class="right">
            <div class="features">
              <h4>Характеристики товара</h4>
              <div class="item" v-html="product.slug"></div>
            </div>
            <div class="price">
              <span>{{ product.price * countproduct }} ₽</span> 
              <span v-if="begincart.find((id) => id.id == product.id)">
                  (В корзине {{begincart.find(item => item.id == product.id).quantity}} шт.)
              </span>
            </div>

            <div class="buttons">
              <div class="qt" v-if="!begincart.find((id) => id.id == product.id)">
                <button
                  :disabled="countproduct == 1"
                  @click.prevent="btnminus"
                  class="decr"
                >
                  –
                </button>
                <p>{{ countproduct }}</p>
                <button
                  :disabled="countproduct == 5"
                  @click.prevent="btnplus"
                  class="incr"
                >
                  +
                </button>
              </div>
              <form @submit.prevent="submit(product)">
                <div class="buy_btn_cont">
                  <input type="submit" :value="
            begincart.find((id) => id.id == product.id)
              ? 'Удалить'
              : 'Купить'
          " />
                </div>
              </form>
            </div>
            <div id="goods_desc">
              <div class="content tab-0 current">
                <p>{{ product.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="goods_set">
      <h4>Похожие товары</h4>
      <News :getProductsNew="getProduct.other" />
    </section>
  </main>
</template>
<script>
import News from "../../components/product_block/News.vue";
import router from "../../router";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "pageproduct",
  components: {
    News,
  },
  data() {
    return {
      countproduct: 1,
    };
  },
  mounted() {
    this.getProducts(this.$route.params);
  },
  computed: {
    ...mapGetters({
      getProduct: "product/getProductforSinglepage",
      authenticated: "auth/authenticated",
      begincart:"cart/getProductinCart"
    }),
    thistimeurl() {
      return this.$route.params.product;
    },
  },
  methods: {
    submit(product){
         if (!this.authenticated) {
        router.replace({ name: "auth" });
      } else {
        this.begincart.find((tovar) => tovar.id == product.id) != undefined
          ? this.DeleteOnCart(product.id)
          : this.AddToCart(product);
      }
    },
    
    AddToCart(product) {
      var modal = $modal({
        title: "Добавлен в корзину",
        content: `<p>Товар <strong>${product.name}</strong> Добавлен</p>`,
      });
      if(this.countproduct<1) this.countproduct=1; else if(this.countproduct>5) this.countproduct=5;
      var dataAdded = {
        id: product.id,
        quantity: this.countproduct,
      };
      this.addToCartuser(dataAdded).then(() => {
          this.countproduct=1;
      modal.showTime();
      })
    },

    DeleteOnCart(product) {
      this.deleteOnCartuser(product).then(() => {
      })
    },
    ...mapActions({
      getProducts: "product/ajaxProductForSinglePage",
      addToCartuser: "cart/addToCarts",
      deleteOnCartuser:"cart/deleteOnCarts",
    }),
    btnplus() {
      if (this.countproduct < 5) this.countproduct = this.countproduct + 1;
    },
    btnminus() {
      if (this.countproduct > 0) this.countproduct = this.countproduct - 1;
    },
  },
  watch: {
    thistimeurl() {
      this.countproduct = 1;
      this.getProducts(this.$route.params);
    },
  },
};
</script>