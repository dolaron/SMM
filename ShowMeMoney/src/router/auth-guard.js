import store from '../store/store'

export default (to, from, next) => {
    if(to.name === 'Login') {
        next()
    } else {
        if (store.getters.getIsAuthenticated === true) {
            const user = store.getters.getUserPool.getCurrentUser()
            if (user == null) {
                next('login')
            } else {
                user.getSession((err, session) => {
                    if (err) {
                        next('login')
                    } else if (session.isValid()) {
                        next()
                    } else {
                        next('login')
                    }
                })
            }
        } else {
            next('login')
        }
    }
}