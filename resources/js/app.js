require('./bootstrap');
require('./modal');
window.Vue = require('vue').default;

Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('categorybar-component', require('./components/Categorybar.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

import router from './router';
import store from './store';
require('./store/subscriber')

axios.defaults.baseURL="http://127.0.0.1:8000/";

Vue.config.productionTip=false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
 const app = new Vue({
    el: '#app',
    router,
    store
});   
})


