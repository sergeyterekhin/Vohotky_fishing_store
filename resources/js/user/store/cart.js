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
        },

        async MakeOrder({dispatch},payment){
            let order={type:payment,status:false, data:null, total:null};
            let quan=0;
            let code=null;
            await axios.get('api/carts/user').then((cart)=>{
                order.data=cart.data.products_cart
                order.total=cart.data.totalprice
                quan=cart.data.totalquantity
            });
            if(quan<1 || quan==null || order.total<1 || order.total==null) return {type:400};
            switch (payment) {
                case 'inshop': order.status=true; break;
                case 'online': 
                
                break;
                default: order.status=false; break;
            }
            if (!order.status) return {type:401};
            await axios.post('api/order',order).then((codes)=>{
                code=codes.data
            });
            return {type:200,message:code};
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