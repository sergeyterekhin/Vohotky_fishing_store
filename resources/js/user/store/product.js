import router from '../router';
export default{
    namespaced: true,

    state:{
        products:[],
        newproducts:[],
    },
    mutations:{
        setProducts(state,data){
            return state.products=data
        },
        setNewsProduct(state,data){
            return state.newproducts=data
        },
    },
    actions:{
        ajaxnewProducts(context,query){
            axios.get("/api/products"+query).then(responce =>{
                context.commit('setNewsProduct',responce.data.products)
            })
            .catch(error => console.log("Ошибка!",error))
        },

        ajaxProductForSinglePage(context,query){
            axios.get("/api/products/"+query.catalog+"/"+query.product).then(responce =>{
                context.commit('setProducts',responce.data)
            })
            .catch((error) => {
                if (error.response.status === 404) {
                router.replace({ name: 'PageNotFound',params:{pathMatch:['catalog',query.catalog,query.product]}})
                }
              })
        },

        ajaxProductsbyCategoryFromDB(context,category){
            axios.get("/api/products/"+category).then(responce =>{
            
                context.commit('setProducts',responce.data.products)
            })
            .catch((error) => {
                // Проверка на код ошибки
                if (error.response.status === 404) {
                  // Перенаправление на именованный роут
                  router.push({ name: 'PageNotFound',params:{pathMatch:['catalog',category]}})
                }
              })
        },
    },
    getters:{
        getProductsbyCategory(state) {
            return state.products
        },
        getNewProducts(state){
            return state.newproducts
        },
        getProductforSinglepage(state){
            return state.products
        },
    }
}