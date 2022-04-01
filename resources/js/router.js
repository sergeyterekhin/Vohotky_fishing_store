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
        path:"/about",
        name: 'About',
        component: () => import('./views/navbar/about.vue')
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
        path:"/deliveryandpay",
        name: 'delivery',
        component: () => import('./views/navbar/deliverypay.vue')
    },
    {
        path:"/cart",
        name: 'cart',
        component: () => import('./views/CartUser.vue'),
        meta:{requiresAuth:true}
    },
    {
        path:"/contact",
        name: 'contact',
        component: () => import('./views/navbar/contact.vue'),
//  Добавить потом на корзину       
        // beforeEnter: (to, from, next) => {
        //  if(!store.getters['auth/authenticated']) {
        //      return next({name:'auth'})
        //  }
        //    next();
        // }
//  Добавить потом на корзину
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
        path:"/admin",
        name: 'Admin',
        meta:{isAdmin:true},
        component: () => import('./views/admin/Main.vue'),
        children:[
            {
                path:'user',
                name:'allUsers',
                component: () => import('./views/admin/User/allUsers.vue'),
            },
            
        ]
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

    if (to.matched.some(record => record.meta.requiresNoAuth)) {
    if (store.getters['auth/authenticated']) {
       next({name:'Home'})
      } 
    }

    if (to.matched.some(record => record.meta.isAdmin)) {
        if (store.getters['auth/role']!="admin") {
            return redirect({name:'Home'});
          } 
        }


    next()
    
  })

export default router;