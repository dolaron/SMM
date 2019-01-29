<template>
    <div class="debt-list-items">
        <ul class="list-debtors">
            <li class="dev-item-head">
                <h4 class="dev-list-it" style="opacity: 0;"> Wykop </h4>
                <div class="item-head">
                    <h4 class="list-ith"> Kto siedzi? </h4>
                    <h4 class="list-ith"> Za? </h4>
                    <h4 class="list-ith"> Ile? </h4>
                    <h4 class="list-ith"> Pamietamy! </h4>
                    <button class="btn-delete" style="opacity: 0;"> Delete </button>
                </div>
            </li>
            <li v-for=" p in paginatedData " @click="getDebtorDebts( p.debtor )" class="dev-item-debt" :key="p.debtId">
                <h4 class="dev-list-it"> {{ trimId( p.userId )}} </h4>
                <div class="item-debt">
                    <h4 class="list-it"> {{ p.debtor }} </h4>
                    <h4 class="list-it"> {{ p.debtName }} </h4>
                    <h4 class="list-it"> {{ p.debtValue }} zl</h4>
                    <h4 class="list-it"> {{ p.debtDate }} </h4>
                    <button @click.stop="deleteDebt( p.debtId )" class="btn-delete"> Delete </button>
                </div>
            </li>
        </ul>
        <div class="list-btns">
            <button @click="prevPage" class="list-arrow" :disabled="pageNumber === 0" > &#10094; </button>
            <button v-for="( page, index ) in pages" @click="toListPage( index )" :class="[ pageNumber === index ? 'list-dot-active' : 'list-dot' ]" :key="index"> &#8226; </button>
            <button @click="nextPage" class="list-arrow" :disabled="pageNumber >= pageCount"> &#10095; </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    data () {
        return {
            pageNumber: 0,
            pages: 1
        }
    },
    props: {
       listData: {
           type: Array,
           required: true
       },
       size: {
           type: Number,
           required: false,
           default: 9

       } 
    },
    computed: {
        pageCount () {
            let l = this.listData.length,
                s = this.size;
            // if (Math.ceil(l/s) < 1) this.pages = 1
            this.pages = Math.ceil(l/s)
            return Math.ceil(l/s);
        },
        paginatedData () {
            const start = this.pageNumber * this.size,
                    end = start + this.size;
            return this.listData.slice(start, end);
        }
    },
    methods: {
        nextPage () {
            this.pageNumber++;
        },
        prevPage () {
            this.pageNumber--;
        },
        toListPage (index) {
            this.pageNumber = index
        },
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
