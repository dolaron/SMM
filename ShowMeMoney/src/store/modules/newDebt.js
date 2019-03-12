import axios from 'axios'

const actions = {
    postNewDebt ({commit, getters, dispatch}, data) {
        data.debtor = data.debtor.toLowerCase()
        const user = getters.getUserPool.getCurrentUser()
        commit('SET_LOADER', true)
        user.getSession((err, session) => {
            if (err) {
                commit('SET_LOADER', false)
                dispatch('displayToast', 'Wystąpił błąd!')
                return
            }
            axios({
                method: 'POST',
                // url: 'https://1w0hs5n0xh.execute-api.eu-central-1.amazonaws.com/dev/users',
                url: 'https://1w0hs5n0xh.execute-api.eu-central-1.amazonaws.com/dev/debts',
                data: data,
                headers: {
                    'Authorization': session.getIdToken().getJwtToken()
                }
            }).then(res => {
                commit('SET_LOADER', false)
                dispatch('displayToast', 'Pomyślnie zapisano dane !')
            })
        })
    }
}

export default {
    actions
}
