export default {
    namespaced: true,
    state: {
        order: [],
        orders:[],
    },

    mutations:{
        setOrder(state,data){
            return state.order=data
        },
        setOrders(state,data){
            return state.orders=data
        },
    },

    actions:{
    async ajaxOrder(context){
        await axios.get("/api/order").then(responce =>{
                context.commit('setOrders',responce.data)
            })
            .catch(error => console.log("Ошибка!",error))
        },

    async ajaxOrderOne(context,code){
           await axios.get("/api/order/"+code).then(responce =>{
                context.commit('setOrder',responce.data)
            })  
        },
    
    },

    getters: {
        getOrder(state) {
            return state.order
        },
        getOrders(state) {
            return state.orders
        },
    },
}