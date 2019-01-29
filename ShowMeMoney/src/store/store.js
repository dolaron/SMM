import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import debt from './modules/debt'
import debts from './modules/debts'
import newDebt from './modules/newDebt'
import loader from './modules/modals/loader'
import toast from './modules/modals/toast'
import deletedModal from './modules/modals/deletedModal'

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        auth,
        debt,
        debts,
        newDebt,
        loader,
        toast,
        deletedModal
    }
})
export default store