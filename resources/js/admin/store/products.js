export default {
    namespaced: true,

    state: {
        Products: [],
    },

    mutations: {
        SetProducts(state,data){
            return state.Products=data.products
        }
    },

    actions: {
        async RequestProducts({ commit }, query = "") {
            await axios.get('api/admin/products' + query).then((response) => {
                commit('SetProducts', response.data)
            }).catch((e) => {
                console.log(e);
            })
        },

        async RequestOneProduct({commit},id){
            await axios.get('api/admin/products/'+id).then((response)=>{
              commit('SetProducts',response.data)  
            }).catch((e)=> console.log(e))
        },

        async UpdateProducts({dispatch},products){
            let image=products[1];
            let imageSetting;
            await axios.patch('api/admin/products/'+products[0].id,products[0]).then((file)=>{
                imageSetting=file.data;
             })
             if(imageSetting.name!=null){
                image.append("filename",imageSetting.name);
                image.append("folder",imageSetting.folder);
                await axios.post('api/admin/upload_file',image);
             }
             dispatch('RequestOneProduct',products[0].id);
        },

        async RequestAddProduct({_},dataProductAdd){
            let image=dataProductAdd[1];
            let imageSetting;
             await axios.post('api/admin/products',dataProductAdd[0]).then((file)=>{
                imageSetting=file.data;
             })
             if(imageSetting.name!=null){
               image.append("filename",imageSetting.name);
               image.append("folder",imageSetting.folder);
               await axios.post('api/admin/upload_file',image); 
            }
        },

        async DeleteProduct({dispatch},id){
            await axios.delete('api/admin/products/'+id.id).then(()=>{
                dispatch('RequestProducts',id.query);
            }).catch((e)=>{
                console.log(e);
            })
        }
    },

    getters: {
        getProducts(state) {
            return state.Products;
        }
    }
}