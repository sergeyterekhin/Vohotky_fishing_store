import router from '../router';
export default {
    namespaced: true,
    
    state: {
        token: null,
        user: null,
        role: null,
        changepassword: null,
    },

    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, data) {
            state.user = data;
        },
        setRole(state,data){
            state.role=data;
        },
        setChangePassword(state,data){
          state.changepassword=data;  
        }
    },

    actions: {
    async sendEmailforChangePassword({_},FormEmail){
     await axios.post('/api/auth/sendMessageOnEmail',FormEmail)   
    },

    async changeUserData({dispatch},Form){
        await axios.patch('api/auth/changeUserData',Form)
        return dispatch('attempt')
    },

    changepassword({commit},FormPassword){
    axios.post('/api/auth/changepassword',FormPassword).then((responce) => {
        commit('setChangePassword',responce.data); 
    }).catch(error =>{
        commit('setChangePassword',error.response.data);
    })
    },
     async confirmemail({dispatch, commit, state},VerficatedCode){
       await axios.get('/api/auth/confirmaccount/'+VerficatedCode)
        .then(responce =>{
            if(responce.data.action==1){
                if (state.token!=null){
                    dispatch('signOut');
                }
                commit('setChangePassword',responce.data);
            }
            if(responce.data.action==2){
                commit('setChangePassword',responce.data);
            }
        })
        .catch(error => {
            if (error.response.status === 404) {
            router.replace({ name: 'PageNotFound',params:{pathMatch:['registration',VerficatedCode]}})
            }
          })
        },
        
       async regist({_},FormRegistration){
        let response = await axios.post('/api/auth/registr',FormRegistration)
        },

        async signIn({ dispatch }, FormSign) {
            let responce = await axios.post('/api/auth/signin', FormSign)
            return dispatch('attempt', responce.data.token);
        },

        async attempt({ commit,state }, token) {
            if (token){
                commit('setToken', token);
            }
            if (!state.token){
             return    
            }
            try {
                let responce = await axios.get('/api/auth/me')
                commit('setUser', responce.data.user)
                commit('setRole',responce.data.role)
            } catch (e) {
                commit('setUser', null)
                commit('setRole',null)
                commit('setToken', null);
            }
        },
        signOut({commit}){
            return axios.post('api/auth/signout').then(()=>{
                commit('setUser', null)
                commit('setRole',null)
                commit('setToken', null);  
            })
        }
    },
    getters: {
        authenticated(state) {
            return state.token!=null && state.user!=null
        },
        user(state) {
            return state.user
        },
        status(state){
            return state.changepassword
        },
        role(state){
            return state.role
        }
    }
}