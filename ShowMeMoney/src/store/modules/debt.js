import axios from 'axios'

const state = {
    debt: {},
    debtId: '',
    lastDeletedDebt: ''
}

const getters = {
    getDebt: state => {
        return state.debt
    },
    getDebtId: state => {
        return state.debtId
    },
    getLastDeletedDebt: state => {
        return state.lastDeletedDebt
    }
}

const mutations = {
    SET_DEBT (state, debt) {
        state.debt = debt
    },
    SET_DEBT_ID (state, debtId) {
        state.debtId = debtId
    },
    SET_DELETED_DEBT (state, deletedDebt) {
        state.lastDeletedDebt = deletedDebt
    }
}

const actions = {
    loadDebt ({commit, getters}) {
        const debtId = getters.getDebtId,
                user = getters.getUserPool.getCurrentUser()
        user.getSession((err, session) => {
            const urlParam = 'single',
                queryParam = '?accessToken=' + session.getAccessToken().getJwtToken()
                queryParam2 = '&debtId=' + debtId
            axios({
                method: 'GET',
                url: 'https://1w0hs5n0xh.execute-api.eu-central-1.amazonaws.com/dev/debts/' + urlParam + queryParam + queryParam2,
                headers: {
                    'Authorization': session.getIdToken().getJwtToken()
                }
            }).then(res => {
                if (res.data) {
                    commit('SET_DEBT', res.data)
                }
            })
        })
    },
    saveLastDeletedDebt ({commit}, debt) {
        commit('SET_DELETED_DEBT', debt)
        commit('SET_DELETED_MODAL', true)
        // dispatch('displayDeletedModal')
    },
    deleteDebt ({commit, getters, dispatch}, debtId) {
        const user = getters.getUserPool.getCurrentUser()
        commit('SET_LOADER', true)
        user.getSession((err, session) => {
            if (err) {
                commit('SET_LOADER', false)
                dispatch('displayToast', 'Nie ma sesji!')
                return
            }
            axios({
                method: 'DELETE',
                url: 'https://1w0hs5n0xh.execute-api.eu-central-1.amazonaws.com/dev/debt/' + debtId,
                headers: {
                    'Authorization': session.getIdToken().getJwtToken()
                }
            }).then(res => {
                commit('SET_LOADER', false)
                if (res.data.errorMessage) {
                    dispatch('displayToast', 'Error: ' + res.data.errorMessage)
                    return
                }
                dispatch('loadDebts')
                dispatch('displayToast', 'Pomyślnie usunięto wpis!')
                dispatch('saveLastDeletedDebt', res.data) // TO DO
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
