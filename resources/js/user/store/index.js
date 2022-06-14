import Vue from "vue";
import Vuex from "vuex";
import auth from '../../common/store/auth';
import product from './product';
import category from './category';
import cart from './cart';
import order from './order';
import information from '../../common/store/information';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        auth,
        information,
        product,
        category,
        cart,
        order
    }
});