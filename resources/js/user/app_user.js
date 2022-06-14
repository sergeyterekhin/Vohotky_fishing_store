require('../bootstrap');
require('../common/store/subscriber')
window.Vue = require('vue').default;

import router_user from './router';
import Notifications from 'vue-notification'
import store_user from './store';

Vue.use(Notifications);
Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('categorybar-component', require('./components/Categorybar.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);


axios.defaults.baseURL=process.env.MIX_APP_URL;

Vue.config.productionTip=false

store_user.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
 const app = new Vue({
    el: '#app',
    router:router_user,
    store:store_user,
});   
})


