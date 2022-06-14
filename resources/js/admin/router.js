import vueRouter from 'vue-router';
import Vue from 'vue';
import store from './store'
Vue.use(vueRouter);

const routes=[
    {
        path:"/adminVohotky",
        meta:{isAdmin:true},
        component: () => import('./views/Main.vue'),
        children:[
            {
                path:"",
                name:'main',
                component: () => import('./views/SelectMenu.vue'),
            },
            {
                path:'user',
                name:'allUsers',
                component: () => import('./views/User/allUsers.vue'),
            },
            {
                path:'user/:id',
                name:'editUsers',
                component: () => import('./views/User/editUsers.vue'),
            },
            {
                path:'info/:page',
                name:'about',
                meta:{pageAlive:true},
                component: () => import('./views/Information_Site/PageInfo.vue'),
            },
            {
                path:'category',
                name:'allCategory',
                component: () => import('./views/Category/allCategory.vue'),
            },
            {
                path:'category/:id',
                name:'editCategory',
                component: () => import('./views/Category/editCategory.vue'),
            },
            {
                path:'add/category',
                name:'newCategory',
                component: () => import('./views/Category/NewCategory.vue'),
            },
            {
                path:'products',
                name:'allProducts',
                component: () => import('./views/Products/allProducts.vue'),
            },
            {
                path:'products/:id',
                name:'editProducts',
                component: () => import('./views/Products/editProducts.vue'),
            },
            {
                path:'add/products',
                name:'newProducts',
                component: () => import('./views/Products/NewProducts.vue'),
            },
            {
                path: 'orders',
                name:'orders',
                component: ()=>import('./views/Orders/newOrder.vue'),
            },
            {
                path: 'order/look/:id',
                name:'lookOrder',
                component: ()=>import('./views/Orders/lookOrder.vue'),
            }
        ]
    },
    {
        path:"/:pathMatch(.*)*",
        name: 'PageNotFound',
        alias: '*',
        component: () => import('../user/views/pagenotfound.vue')
    },
    {
        path:"/:pathMatch(.*)*",
        name: 'Forbiden403',
        alias: '*',
        component: () => import('./views/forbiden403.vue')
    },
    
];



const router = new vueRouter({
mode:"history",
routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.isAdmin)) {
        if (store.getters['auth/role']!="admin") {
            return next({name:'Forbiden403'});
          } 
        }
        if (to.matched.some(record => record.meta.pageAlive)) {
            if(to.params.page!="about" && to.params.page!="deliveryandpay" && to.params.page!="contact"){
                next({name:'main'})
            }
            }


    next()
    
  })

export default router;