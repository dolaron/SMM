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
    }
}
</script>
