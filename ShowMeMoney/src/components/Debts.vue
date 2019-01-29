<template>
    <div>
        <section class="section">
            <div class="section-wrap">
                <router-link to="newDebt" class="btn-new" tag="button">+ Nowy</router-link>
                <!-- <div v-if="debts.length === 0" class="list-loader" key="1"></div> -->
                <!-- <ul v-else class="list-debtors" key="2">
                    <li v-for="debt in debts" @click="getDebtorDebts( debt.debtor )" class="dev-item-debt" :key="debt.debtId">
                        <h4 class="dev-list-it">{{ trimId( debt.userId ) }}</h4>
                        <div class="item-debt">
                            <h4 class="list-it"> {{ debt.debtor }} </h4>
                            <h4 class="list-it"> {{ debt.debtName }} </h4>
                            <h4 class="list-it"> {{ debt.debtValue }} </h4>
                            <h4 class="list-it"> {{ debt.debtDate }} </h4>
                            <button @click.stop="deleteDebt( debt.debtId )" class="btn-clear"> Usuń </button>
                        </div>
                    </li>
                </ul> -->
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
