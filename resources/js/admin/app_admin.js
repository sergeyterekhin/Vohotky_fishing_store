require('../bootstrap');
require('../common/store/subscriber')
window.Vue = require('vue').default;

import router_admin from './router';
import store_admin from './store';

axios.defaults.baseURL="http://127.0.0.1:8001/";

Vue.config.productionTip=false
store_admin.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
   const app = new Vue({
   el: '#app2',
   router:router_admin,
   store:store_admin,
   });   
 })