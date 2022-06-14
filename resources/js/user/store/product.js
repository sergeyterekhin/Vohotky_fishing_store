import router from '../router';
export default {
    namespaced: true,

    state:{
        products:[],
        header:"",
        Rproducts:[],
    },

    mutations:{
        setHeader(state,data){
            return state.header=data
        },
        setProducts(state,data){
            return state.products=data
        },
        setNewsProduct(state,data){
            return state.newproducts=data
        },
        setRproduct(state,data){
            return state.Rproducts=data
        }
    },

    actions:{
        
        async OtherProducts({commit},quantity=1){
                await axios.get("/api/products_R?quantity="+quantity).then(responce =>{
                    commit('setRproduct',responce.data)
                }).catch((error) => {
                console.log(error);
                })
        },

        async ajaxProductsbyCategoryFromDB(context,category){
           await axios.get("/api/products/"+category).then(responce =>{
            
                context.commit('setProducts',responce.data.products)
                context.commit('setHeader',responce.data.header);
            })
            .catch((error) => {
                // Проверка на код ошибки
                if (error.response.status === 404) {
                  // Перенаправление на именованный роут
                  router.push({ name: 'PageNotFound',params:{pathMatch:['catalog',category]}})
                }
              })
        },

        async NewProducts(context,query=""){
           await axios.get("/api/products_New"+query).then(responce =>{
                context.commit('setProducts',responce.data.products)
                context.commit('setHeader',responce.data.header);
            })
            .catch(error => console.log("Ошибка!",error))
        },

        async ajaxProductForSinglePage(context,query){
            await axios.get("/api/products/"+query.catalog+"/"+query.product).then(responce =>{
                context.commit('setProducts',responce.data)
            })
            .catch((error) => {
                if (error.response.status === 404) {
                router.replace({ name: 'PageNotFound',params:{pathMatch:['catalog',query.catalog,query.product]}})
                }
              })
        },
        async SearchProduct(context,category){
            await axios.get("/api/products_Find/"+category).then(responce =>{
            
                context.commit('setProducts',responce.data.products);
                context.commit('setHeader',responce.data.header);
            })
            .catch((error) => {
                // Проверка на код ошибки
                if (error.response.status === 404) {
                  // Перенаправление на именованный роут
                  router.push({ name: 'PageNotFound',params:{pathMatch:['catalog',category]}})
                }
                if (error.response.status === 400) {
                    context.commit('setHeader',error.response.data.header);
                    context.commit('setProducts',"400Search");
                  }
              })
        },
    },

    getters:{
        getHeader(state){
            return state.header
        },
        getProductsbyCategory(state) {
            return state.products
        },
        getNewProducts(state){
            return state.newproducts
        },
        getProductforSinglepage(state){
            return state.products
        },
        getRproducts(state){
            return state.Rproducts
        }
    },
}