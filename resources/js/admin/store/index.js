import Vue from "vue";
import Vuex from "vuex";
import auth from '../../common/store/auth';
import information from '../../common/store/information';
import user from './user';
import products from './products';
import category from './category';
import order from './order';
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        auth,
        order,
        category,
        information,
        products,
        user
    }
});