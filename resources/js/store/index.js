import Vue from "vue";
import Vuex from "vuex";

import auth from './auth';
import product from './product';
import category from './category';
import cart from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        auth,
        product,
        category,
        cart,
    }
});