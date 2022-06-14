<template>
  <div class="products_buy">
    <div
      class="goods_wrapper"
      v-for="productdata in getProductsNew.data"
      :key="productdata.id"
    >
      <div class="goods">
        <router-link
          :to="{
            name: 'producthasone',
            params: {
              catalog: productdata.name_en,
              product: productdata.name_url,
            },
          }"
        >
          <img :src="productdata.image_name==null ? '/storage/products/none.png' : `/storage/products/${productdata.image_name}`" width="180" height="180" />
          <span class="name">{{ productdata.name }}</span>
        </router-link>
        <div class="price">
          {{ productdata.price }}
          <span class="rouble">₽</span>
        </div>
        <form>
        <a
          @click.prevent="submit(productdata)"
          :id="
            begincart.find((id) => id.id == productdata.id)
              ? 'selected'
              : 'noselected'
          "
          href="#"
          class="buy"
        >
          <i
            :class="
              begincart.find((id) => id.id == productdata.id)
                ? [`fa-solid`, 'fa-check']
                : [`fa-solid`, `fa-basket-shopping`]
            "
          ></i>
        </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "../../router";
export default {
  name: "News",
  props: ["getProductsNew"],
  data() {
    return {
      cart:[],
    };
  },
  methods: {
    ...mapActions({
      addToCartuser: "cart/addToCarts",
      deleteOnCartuser:"cart/deleteOnCarts",
    }),

    submit(product) {
      if (!this.authenticated) {
        router.replace({ name: "auth" });
      } else {
        this.begincart.find((tovar) => tovar.id == product.id) != undefined
          ? this.DeleteOnCart(product.id)
          : this.AddToCart(product);
      }
    },

    AddToCart(product) {
      var dataAdded = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        total: product.price,
      };

      this.addToCartuser(dataAdded).then(() => {
     // this.cart.push(dataAdded);
       this.$notify({title: 'Товар добавлен!', text: `<b>${product.name}</b> добавлен в вашу корзину!`,type:'success'})

      }).catch((e)=>{
      console.log(e);
      })
    },

    DeleteOnCart(product) {
      this.deleteOnCartuser(product).then(() => {
    //  this.cart = this.cart.filter((producted) => producted.id != product.id);
      }).catch((e)=>{
      
      })
    },
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      begincart:"cart/getProductinCart"
    }),
  },
  watch: {
    
  },
};
</script>