const state = {
    showToast: false,
    toastRunning: false,
    toastText: ''
}

const mutations = {
    SET_TOAST: (state, show) => {
        state.showToast = show
    },
    SET_TOAST_RUNNING: (state, running) => {
        state.toastRunning = running
    },
    SET_TOAST_TXT: (state, txt) => {
        state.toastText = txt
    }
}

const getters = {
    getShowToast: state => {
        return state.showToast
    },
    getToastRunning: state => {
        return state.toastRunning
    },
    getToastTxt: state => {
        return state.toastText
    }
}

const actions = {
    displayToast ({commit, getters, mutations}, txt) {
        commit('SET_TOAST_TXT', txt)
        commit('SET_TOAST', true)
        const time = 4000
        if (!getters.getToastRunning) {
            commit('SET_TOAST_RUNNING', true)
            setTimeout(() => {
                commit('SET_TOAST', false)
                commit('SET_TOAST_RUNNING', false)
            }, time)
        }
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
