import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoUserSession } from 'amazon-cognito-identity-js'
import router from '@/router/index.js'

const state = {
    userPool: new CognitoUserPool({
        UserPoolId : 'eu-central-1_5X02GUGD1',
        ClientId : '7s41gnb1i9rjrhmbct5jev4d9h'
    }),
    user: '',
    isAuthenticated: false,
    authenticating: false
}

const getters = {

    getUserPool: state => {
        return state.userPool
    },
    getUser: state => {
        return state.user
    },
    getIsAuthenticated: state => {
        return state.isAuthenticated
    },
    getIsAuthenticating: state => {
        return state.authenticating
    }
}

const mutations = {

    SET_USER: (state, user) => {
        state.user = user
    },
    SET_IS_AUTHENTICATED: (state, data) => {
        state.isAuthenticated = data
    },
    SET_IS_AUTHENTICATING: (state, data) => {
        state.authenticating = data
    }
}

const actions = {

    register({commit, getters, dispatch}, data) {
        commit('SET_LOADER', true)
        const userPool = getters.getUserPool
        const attrList = []
        const emailAttribute = {
            Name: 'email',
            Value: data.email
        }
        attrList.push(new CognitoUserAttribute(emailAttribute))

        userPool.signUp(data.username, data.pass, attrList, null, (err, result) => {
            if (err) {
                commit('SET_LOADER', false)
                return
            }
            commit('SET_USER', result.user)
            commit('SET_LOADER', false)

        }) 
    },

    confirmUser({commit, getters, dispatch}, data) {
        commit('SET_LOADER', true)
        const userData =  {
            Username: data.username,
            Pool: getters.getUserPool
        }
        const cognitoUser = new CognitoUser(userData)
        cognitoUser.confirmRegistration(data.code, true, (err, result) => {
            if (err) {
                commit('SET_LOADER', false)
                dispatch('displayToast', 'Niestety nie potwierdzono użytkownika !')
                return
            }
            commit('SET_LOADER', false)
            dispatch('displayToast', 'Potwierdzono użytkownika !')
            router.replace('/')
        })
    }, 

    login({commit, getters, dispatch}, data) {
        const user = getters.getUserPool.getCurrentUser()
        if (user) {
            dispatch('displayToast', 'Użytkownik ' + user.username + ' jest zalogowany, wyloguj się najpierw!')
            return
        }
        commit('SET_LOADER', true)
        const authData = {
            Username: data.login,
            Password: data.pass
        }
        const authDetails = new AuthenticationDetails(authData)
        const userData = {
            Username: data.login,
            Pool: getters.getUserPool
        }
        const cognitoUser = new CognitoUser(userData)
        cognitoUser.authenticateUser(authDetails, {
            onSuccess(result) {
                commit('SET_USER', result.accessToken.payload.username)
                commit('SET_IS_AUTHENTICATED', true)
                commit('SET_LOADER', false)
                dispatch('displayToast', 'Pomyślnie zalogowano !')
                localStorage.setItem('authorized', true)
            },
            onFailure(err) {
                commit('SET_LOADER', false)
                dispatch('displayToast', 'Błędne dane użytkownika')
                localStorage.setItem('authorized', false)
            }
        })
    },

    checkAuthUser({commit, getters}) {
        return new Promise((resolve, reject) => {    
            const user = getters.getUserPool.getCurrentUser()
            commit('SET_IS_AUTHENTICATING', true)
            if (user == null) {
                commit('SET_IS_AUTHENTICATING', false)
                commit('SET_IS_AUTHENTICATED', false)
                resolve(false)
            } else {
                user.getSession((err, session) => {
                    if (err) {
                        commit('SET_IS_AUTHENTICATING', false)
                        commit('SET_IS_AUTHENTICATED', false)
                        // resolve('Session error')
                        resolve(false)
                    }
                    commit('SET_IS_AUTHENTICATING', false)
                    commit('SET_IS_AUTHENTICATED', true)
                    commit('SET_USER', user)
                    // resolve(null, session)
                    resolve(true)
                });
            }
        })
    },

    logout({commit, getters, dispatch}) {
        const user = getters.getUserPool.getCurrentUser();
        router.replace('/login')
        if (user) {
            user.signOut()
            localStorage.setItem('authorized', false)
            commit('SET_IS_AUTHENTICATED', false)
            commit('SET_USER', '')
            dispatch('displayToast', 'Wylogowano!')
            return
        }
        dispatch('displayToast', 'Użytkownik już jest wylogowany')
        // router.replace('/login')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}