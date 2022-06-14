export default {
    namespaced: true,
    
    state: {
    orders:[],
    order:[],
    },

    mutations: {
        SetOrders(state,data){
            return state.orders=data;
        },
        SetOrder(state,data){
            return state.order=data;
        }
    },

    actions: {
        async GetFromOrders({commit},query=""){
        await axios.get('api/admin/orders'+query).then((response)=>{
        commit('SetOrders',response.data)
         }).catch((e)=>{
              console.log(e);
        })   
        },

        async OneOrder({commit},id){
        await axios.get('api/admin/order/'+id).then((response)=>{
               commit('SetOrder',response.data)  
             }).catch((e)=> console.log(e))
        },

        async updateOrder({dispatch},order){
            await axios.patch('api/admin/order/'+order.code,order).then(()=>dispatch('OneOrder',order.code))
        }
        // async UpdateUser({_},user){
        //     await axios.patch('api/admin/user/'+user.id,user)
        // },

        // async DeleteUser({dispatch},id){
        //     await axios.delete('api/admin/users/'+id.id).then(()=>{
        //         dispatch('GetUsers',id.query);
        //     }).catch((e)=>{
        //         console.log(e);
        //     })
        // }
    },

    getters: {
        getOrders(state){
            return state.orders;
        },
        getOrder(state){
            return state.order;
        }
    }
}