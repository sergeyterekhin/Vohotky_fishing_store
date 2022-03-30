export default {
    namespaced: true,
    state: {
    cartUser:[],
    interfaceCart:null
    },

    mutations: {
        SetCartUser(state,data){
            state.cartUser=data.products_cart;
            return state.interfaceCart={'total_price':data.totalprice,'total_quantity':data.totalquantity}
        }
    },

    actions: {
        async addToCarts({ dispatch }, product_added) {
            await axios.post('api/cart', {'cart': product_added })
            return dispatch('CartUsers');
        },

        async deleteOnCarts({dispatch},product_delete){
            await axios.delete('api/cart/'+product_delete)
            return dispatch('CartUsers');
        },

        async updateCartsUser({dispatch},product){
           await axios.patch('api/cart/'+product.id,{'quantity':product.quantity})
           return dispatch('CartUsers'); 
        },

        async CartUsers({commit}){
          await axios.get('api/carts/user').then((response)=>{
          commit('SetCartUser',response.data)
         }).catch((e)=>{
             console.log(e);
         })   
        }
    },

    getters: {
        getHeaderCart(state){
            return state.interfaceCart;
        },
        getProductinCart(state){
            return state.cartUser;
        }
    }
}