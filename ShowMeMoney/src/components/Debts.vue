<template>
    <div>
        <section class="section">
            <div class="section-wrap">
                <router-link to="newDebt" class="btn-new" tag="button">+ Nowy</router-link>
                <paginated-list :listData="debts"/>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import List from './List'
export default {
    name: 'Debts',
    components: {
        'paginated-list': List
    },
    computed: {
        ...mapGetters({
            debts: 'getDebts'
        })
    },
    beforeCreate () {
        this.$store.dispatch('loadDebts')
    },
    methods: {
        trimId (id) {
            let dots = ''
            if (id.length > 10) dots = '.. '
            return id.substring(0, 8) + dots
        },
        setDebt (debt) {
            // this.$store.commit('SET_DEBT', debt)
            this.$store.commit('SET_DEBT_ID', debt.debtId)
            this.$store.dispatch('loadDebt')
        },
        deleteDebt (debtId) {
            this.$store.dispatch('deleteDebt', debtId)
        },
        getDebtorDebts (debtor) {
            this.$store.dispatch('getDebtorDebts', debtor)
        }
    }
}
</script>

<style>



</style>
