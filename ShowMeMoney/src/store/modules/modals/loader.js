const state = {
    showLoader: false
}

const mutations = {
    SET_LOADER (state, show) {
        state.showLoader = show
    }
}

const getters = {
    getLoader (state) {
        return state.showLoader
    }
}

export default {
    state,
    mutations,
    getters
}
