export default {
    namespaced: true,

    state: {
        category: [],
    },

    mutations: {
        SetCategory(state,data){
            return state.category=data
        }
    },

    actions: {
        async RequestAllCategory({ commit },data={paginate:false,page:false}) {
            let request='api/admin/category';
            if (data.paginate) {
                request=request+'?paginate=true';
                if (data.page) request=request+'&page='+data.page;
            }
            await axios.get(request).then((response) => {
                commit('SetCategory', response.data.categories)
            }).catch((e) => {
                console.log(e);
            })
        },
        async RequestOneCategory({commit},id){
            await axios.get('api/admin/category/'+id).then((response)=>{
                commit('SetCategory',response.data)  
              }).catch((e)=> console.log(e))
        },

        async UpdateCategory({dispatch},category){
            let image=category[1];
            let imageSetting;
            await axios.patch('api/admin/category/'+category[0].id,category[0]).then((file)=>{
                imageSetting=file.data;
             })
             if(imageSetting.name!=null){
                image.append("filename",imageSetting.name);
                image.append("folder",imageSetting.folder);
                await axios.post('api/admin/upload_file',image);
             }
             dispatch('RequestOneCategory',category[0].id);
        },

        async AddCategory({_},dataProductAdd){
            let image=dataProductAdd[1];
            let imageSetting;
             await axios.post('api/admin/category',dataProductAdd[0]).then((file)=>{
                imageSetting=file.data;
             })
             if(imageSetting.name!=null){
               image.append("filename",imageSetting.name);
               image.append("folder",imageSetting.folder);
               await axios.post('api/admin/upload_file',image); 
            }
        },

        async DeleteCategory({dispatch},id){
            await axios.delete('api/admin/category/'+id.id).then(()=>{
                dispatch('RequestAllCategory',id.query);
            }).catch((e)=>{
                console.log(e);
            })
        }
    },

    getters: {
        getCategory(state) {
            return state.category;
        }
    }
}