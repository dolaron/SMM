

import axios from 'axios'
import router from '../../router/index'

const state = {
    debts: [],
    debtorDebts: []
}

const getters = {
    getDebts: state => {
        return state.debts
    },
    getDebtorDebts: state => {
        return state.debtorDebts
    }
}

const mutations = {
    SET_DEBTS: (state, data) =>  {
        state.debts = data
    },
    SET_DEBTOR_DEBTS: (state, data) => {
        state.debtorDebts = data
    }
}

const actions = {
    
    loadDebts({commit, getters}) {
        const user = getters.getUserPool.getCurrentUser()
        commit('SET_LOADER', true)
        user.getSession((err, session) => {
            const queryParam = '?accessToken=' + session.getAccessToken().getJwtToken()            
            let urlParam = 'all'
            axios({
                method: 'GET',
                url: 'https://1w0hs5n0xh.execute-api.eu-central-1.amazonaws.com/dev/debts/' + urlParam + queryParam,
                headers: {
                    "Authorization": session.getIdToken().getJwtToken()
                }
            }).then(res => {
                commit('SET_LOADER', false)
                if (res.data) {
                    commit('SET_DEBTS', res.data)
                }
            })
        })
    },

    getDebtorDebts({commit, getters, dispatch}, debtorName) {
        const user = getters.getUserPool.getCurrentUser()
        commit('SET_LOADER', true)
        
        user.getSession((err, session) => {
            if (err) {
                commit('SET_LOADER', false)
                return
            }
            const queryParam = '?debtor=' + debtorName
            axios({
                method: 'GET',
                url: 'https://1w0hs5n0xh.execute-api.eu-central-1.amazonaws.com/dev/debtor' + queryParam,
                headers: {
                    "Authorization": session.getIdToken().getJwtToken()
                }
            }).then(res => {
                commit('SET_LOADER', false)
                if (res.data.errorMessage) {
                    dispatch('displayToast', 'Error: ' + res.data.errorMessage)
                    return
                }
                commit('SET_DEBTOR_DEBTS', res.data)
                commit('SET_DELETED_MODAL', false)
                router.push({name: 'Debtor', params: { id: res.data[0].debtor }})
            })
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}