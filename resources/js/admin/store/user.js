export default {
    namespaced: true,
    
    state: {
    Users:[],
    },

    mutations: {
        SetUsers(state,data){
            return state.Users=data.users;
        }
    },

    actions: {
        async GetUsers({commit},query=""){
        await axios.get('api/admin/users'+query).then((response)=>{
        commit('SetUsers',response.data)
         }).catch((e)=>{
              console.log(e);
        })   
        },

        async GetOneUser({commit},id){
            await axios.get('api/admin/user/'+id).then((response)=>{
              commit('SetUsers',response.data)  
            }).catch((e)=> console.log(e))
        },

        async UpdateUser({_},user){
            await axios.patch('api/admin/user/'+user.id,user)
        },

        async DeleteUser({dispatch},id){
            await axios.delete('api/admin/users/'+id.id).then(()=>{
                dispatch('GetUsers',id.query);
            }).catch((e)=>{
                console.log(e);
            })
        }
    },

    getters: {
        getUserss(state){
            return state.Users;
        }
    }
}