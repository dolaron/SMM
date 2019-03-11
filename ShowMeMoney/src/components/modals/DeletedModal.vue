<template>
    <div>
        <div class="modal__overlay"></div>
        <div class="modal__deleted">
            <header class="modal-header">
                <button @click="close" class="modal-exit">&#215;</button>
                <!-- &#10006; -->
            </header>
            <section class="deleted-section">
                <h2 class="deleted-debtor" id="debtor-name"> {{ deletedDebt.debtor }} </h2> 
                <h4 class="deleted-txta"> must have returned that </h4>
                <h2 class="deleted-value"> {{ deletedDebt.debtValue }} </h2>
                <h2 class="deleted-txtb"> from the </h2>
                <h4 class="deleted-date"> {{ deletedDebt.debtDate }} </h4>
                <h2 class="deleted-txtc"> for </h2>
                <h4 class="deleted-date"> {{ deletedDebt.debtName }} </h4>
            </section>
            <footer class="modal-footer">
                <button @click="getDebtorDebts()" @mouseover="setGoldName( $event )" @mouseout="setGoldName( $event )" class="btn-sdi"> Siedzi cos jeszcze? </button>
            </footer>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'DeletedModal',
    computed: {
        ...mapGetters({
            deletedDebt: 'getLastDeletedDebt'
        })
    },
    methods: {
        close () {
            this.$store.commit('SET_DELETED_MODAL', false)
        },
        setGoldName (e) {
            const el = this.$el.ownerDocument.getElementById('debtor-name')
            if (e.type === "mouseover") {
                el.style.color = "goldenrod"
            } else {
                el.style.color = "#333"
            }
        },
        getDebtorDebts () {
            this.$store.dispatch('getDebtorDebts', this.deletedDebt.debtor)
        }
    }
}
</script>

<style scoped>

</style>
