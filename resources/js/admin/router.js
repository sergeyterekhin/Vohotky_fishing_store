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


    next()
    
  })

export default router;