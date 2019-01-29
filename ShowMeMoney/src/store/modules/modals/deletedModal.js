const state = {
    'showDeletedModal': false
}

const mutations = {
    SET_DELETED_MODAL (state, show) {
        state.showDeletedModal = show
    }
}

const getters = {
    getDeletedModal: state => {
        return state.showDeletedModal
    }
}

const actions = {
    loadDebtsQuery () {
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}