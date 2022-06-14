export default {
    namespaced: true,
    state: {
        information: "",
    },

    mutations: {
        setInformation(state, data) {
            return state.information = data
        },
    },

    actions: {
       async information_site({ commit }, site) {
            axios.get("/api/pginform/" + site).then(responce => {
                commit('setInformation', responce.data)
            })
                .catch(error => console.log("Ошибка!", error))
        },

        async Update_information({_}, data) {
            await axios.patch("/api/admin/pginform/" + data.site, data).then(()=>{
                M.toast({html: 'Данные успешно изменены!',classes: 'rounded'})
            }).catch(()=>{
                M.toast({html: 'Неизвестная ошибка',classes: 'rounded'})
            })
        },
    },



    getters: {
        getInformation(state) {
            return state.information
        },
    },
}