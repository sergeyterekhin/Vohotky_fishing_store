export default{
    namespaced: true,
    state: {
        categories: [],
    },
    getters: {
        getCategories(state) {
            return state.categories
        },
    },
    actions:{
        ajaxCategoriesFromDB(context){
            axios.get("/api/category").then(responce =>{
                context.commit('setCategories',responce.data.categories)
            })
            .catch(error => console.log("Ошибка!",error))
        },
    },
    mutations:{
        setCategories(state,data){
            return state.categories=data
        },
    },
}