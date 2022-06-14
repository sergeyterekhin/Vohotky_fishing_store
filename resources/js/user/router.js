import vueRouter from 'vue-router';
import Vue from 'vue';
import store from './store'
Vue.use(vueRouter);

const routes=[
    {
        path:"/",
        name: 'Home',
        component: () => import('./views/index.vue')
    },
    {
        path:"/info/:pginform",
        name: 'Pageinfo',       
        component: () => import('./views/navbar/Pageinfo.vue'),
        meta:{pginform:true}
    },
    {
        path:"/auth",
        name:'auth',
        component: () => import('./views/registrationANDSign/auth.vue'),
        meta:{requiresNoAuth:true}
    },
    {
        path:"/registration",
        name:'registration',
        component: () => import('./views/registrationANDSign/registration.vue'),
        meta:{requiresNoAuth:true}
    },
    {
        path:"/registration/:verf",
        name:'confirmsEmail',
        component: () => import('./views/registrationANDSign/confirmemail.vue'),
        meta:{requiresNoAuth:true}
    },
    {
        path:"/auth/remember",
        name:'remember',
        component: () => import('./views/registrationANDSign/remember.vue'),
        meta:{requiresNoAuth:true}
    },
    {
        path:"/profile",
        name:'profile',
        component: () => import('./views/registrationANDSign/profile.vue'),
        meta:{requiresAuth:true}
    },
    
    {
        path:"/cart",
        name: 'cart',
        component: () => import('./views/CartUser.vue'),
        meta:{requiresAuth:true}
    },
    {
        path:"/history",
        name: 'history',
        component: () => import('./views/History.vue'),
        meta:{requiresAuth:true}
    },
    {
        path:"/history/:code",
        name: 'historyOne',
        component: () => import('./views/HistoryOne.vue'),
        meta:{requiresAuth:true}
    },
    {
        path:"/catalog/",
        name: 'catalog',
        component: () => import('./views/navbar/catalog.vue')
    },
    {
        path:"/catalog/:catalog",
        name: 'products',
        component: () => import('./views/products_shop/products.vue')
    },
    {
        path:"/catalog/:catalog/:product",
        name: 'producthasone',
        component: () => import('./views/products_shop/pageproductid.vue')
    },
    {
        path:"/:pathMatch(.*)*",
        name: 'PageNotFound',
        alias: '*',
        component: () => import('./views/pagenotfound.vue')
    },    
];



const router = new vueRouter({
mode:"history",
routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['auth/authenticated']) {
       next({name:'auth'})
      } 
    } 

    if (to.matched.some(record => record.meta.pginform)) {
        if(to.params.pginform!="about" && to.params.pginform!="deliveryandpay" && to.params.pginform!="contact"){
            next({name:'PageNotFound',params:{pathMatch:['info',to.params.pginform]}})
        }
        } 

    if (to.matched.some(record => record.meta.requiresNoAuth)) {
    if (store.getters['auth/authenticated']) {
       next({name:'Home'})
      } 
    }
    

    next()
    
  })
export default router;