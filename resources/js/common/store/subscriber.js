import store_user from '../../user/store'
import store_admin from '../../admin/store'

store_user.subscribe((mutation) => {
    switch (mutation.type){
        case 'auth/setToken':
        if (mutation.payload){
            axios.defaults.headers.common['Authorization']= `Bearer ${mutation.payload}`
            localStorage.setItem('token',mutation.payload)
        } else {
            axios.defaults.headers.common['Authorization']= null;
            localStorage.removeItem('token')
        }
        break;
    }
})

store_admin.subscribe((mutation) => {
    switch (mutation.type){
        case 'auth/setToken':
        if (mutation.payload){
            axios.defaults.headers.common['Authorization']= `Bearer ${mutation.payload}`
            localStorage.setItem('token',mutation.payload)
        } else {
            axios.defaults.headers.common['Authorization']= null;
            localStorage.removeItem('token')
        }
        break;
    }
})