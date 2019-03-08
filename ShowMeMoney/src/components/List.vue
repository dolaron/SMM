<template>
    <div class="debt-list-items">
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
        <ul class="list-debtors">
            <transition-group name="list-item" tag="div" mode="out-in" style="display: flex; flex-direction: column; height: 100%;">
                <li v-for="p in paginatedData " @click="getDebtorDebts( p.debtor )" class="dev-item-debt" :key="p.debtId">
                    <h4 class="dev-list-it"> {{ trimId( p.userId )}} </h4>
                    <div class="item-debt">
                        <h4 class="list-it"> {{ p.debtor }} </h4>
                        <h4 class="list-it"> {{ p.debtName }} </h4>
                        <h4 class="list-it"> {{ p.debtValue }} zl</h4>
                        <h4 class="list-it"> {{ p.debtDate }} </h4>
                        <button @click.stop="deleteDebt( p.debtId )" class="btn-delete"> Delete </button>
                    </div>
                </li>
            </transition-group>
        </ul>
        <div class="list-btns">
            <button @click="prevPage" class="list-arrow" :disabled="pageNumber === 0" > &#10094; </button>
            <button v-for="(p, index) in arrPages" @click="toListPage( index )" :class="[ pageNumber === index ? 'list-dot-active' : 'list-dot' ]" :key="index"> &#8226; </button>
            <button @click="nextPage" class="list-arrow" :disabled="pageNumber >= pageCount - 1"> &#10095; </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    data () {
        return {
            pageNumber: 0,
            arrPages: []
        }
    },
    props: {
       debts: {
           type: Array,
           required: true
       },
       size: {
           type: Number,
           required: false,
           default: 4
       }
    },
    computed: {
        pageCount () {
            let l = this.debts.length,
                s = this.size,
                m = Math.ceil(l/s),
                i;
            
            this.arrPages = [] 
            
            for (i = 0; i < m; i++) this.arrPages.push(i)
            
            return m;
        }, 
        paginatedData () {
            const start = this.pageNumber * this.size,
                    end = start + this.size;
            return this.debts.slice(start, end);
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
            return id.substring(0, 6) + dots
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
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-item-enter-active {
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  height: 100%;
}
.list-item-leave-active {
    opacity: 0;
    position: absolute;
}

.list-item-enter, .list-item-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translatex(-200px);
}

</style>