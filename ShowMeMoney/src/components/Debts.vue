<template>
    <div>
        <section class="section">
            <div class="section__wrap">
                <router-link to="newDebt" class="btn__new" tag="button">+ Nowy</router-link>
                <paginated-list :debts="debts"/>
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

<style scoped>

.section__wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    height: 90%;
    width: 90%;
}

</style>

