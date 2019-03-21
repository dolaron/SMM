<template>
    <div class="debts__list">
            <li class="dev__head">
                <h4 class="dev__item__desc"/>
                <div class="item__head">
                    <h4 class="item__head__col"> Kto siedzi? </h4>
                    <h4 class="item__head__col"> Za? </h4>
                    <h4 class="item__head__col"> Ile? </h4>
                    <h4 class="item__head__col"> Pamietamy! </h4>
                    <button class="btn__delete" style="opacity: 0;"> Delete </button>
                </div>
            </li>
        <ul class="list__debtors">
            <transition-group class="list__transition__items" name="list-item" tag="div" mode="out-in">
                <li v-for="p in paginatedData " @click="getDebtorDebts( p.debtor )" class="dev__item__debt" :key="p.debtId">
                    <h4 class="dev__item__desc"> {{ trimId( p.userId )}} </h4>
                    <div class="item__debt">
                        <h4 class="item__debt__value"> {{ p.debtor }} </h4>
                        <h4 class="item__debt__value"> {{ p.debtName }} </h4>
                        <h4 class="item__debt__value"> {{ p.debtValue }} zl</h4>
                        <h4 class="item__debt__value"> {{ p.debtDate }} </h4>
                        <button @click.stop="deleteDebt( p.debtId )" class="btn__delete"> Delete </button>
                    </div>
                </li>
            </transition-group>
        </ul>
        <div class="list__btns">
            <button @click="prevPage" class="list__arrow" :disabled="pageNumber === 0" > &#10094; </button>
            <button v-for="(p, index) in arrPages" @click="toListPage( index )" :class="[ pageNumber === index ? 'list__dot--active' : 'list__dot' ]" :key="index"> &#8226; </button>
            <button @click="nextPage" class="list__arrow" :disabled="pageNumber >= pageCount - 1"> &#10095; </button>
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

<style scoped>

.debts__list {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-around;
}

.list__debtors {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100%;
    list-style: none;
    margin: 0;
    padding:0;
}

.dev__item__debt,
.dev__head {
    flex: 1 1 auto;
    align-items: center;
    color: grey; 
    justify-content: space-between;
}

.dev__item__debt {
    display: flex;
    flex-direction: row;
    margin: .5rem;
}

.dev__head { display: none; }

.dev__item__debt:hover .dev__item__desc { color: goldenrod; }

.item__debt { position: relative; }

.item__debt:before,
.item__debt:after {
    content: ""; height: 2px;
    position: absolute;
    left: 0;
    right: 0;
    -webkit-clip-path: polygon(0% 0%, 5%  100%, 10% 0%, 15%  100%, 20% 0%, 25% 100%, 30% 0%, 35%  100%, 40% 0%, 45%  100%, 50% 0%, 55%  100%, 60% 0%, 65%  100%, 70% 0%, 75%  100%, 80% 0%, 85%  100%, 90% 0%, 95%  100%, 100% 0%);
}

.item__debt:before {
    background-color: #fff;
    top: -1px;
}

.item__debt:after {
    background-color: #fff;
    bottom: -2px;
}

.item__debt,
.item__head {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 7px;
    margin: 0;
    padding: 0;
    min-height: 4rem;
    transition: box-shadow .2s ease-in-out;
    cursor: pointer;
    /*DEV*/
    flex: 1 1 auto;
    /*DEV*/
}

.item__debt {
    box-shadow: 2px 1px 11px grey;
    border: 2px solid rgba(0, 0, 0, 0.3);
    flex-direction: column;
}

.item__debt:hover { box-shadow: 2px 2px 20px green; }

.item__debt__value,
.item__head__col,
.dev__item__desc {
    display: flex;
    margin:0;
    padding:0;
    font: 1.4rem 'Permanent Marker';
    position: relative;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.item__debt__value { margin: 0 .5rem; }

.btn__delete { margin: .7rem 0 1.1rem 0; }

.dev__item__desc { display: none; }

.item__debt__value { font-size: 1.5rem; }

.item__head__col {
    color: rgba(218, 165, 32, 0.349);
    font-size: 1.5rem;
}

.dev__item__desc {
    color: #ccc;
    flex-basis: 7rem;
    transition: color .2s;
    margin-right: .5rem;
}

.item__head__col:after {
    color: #ccc;
    background: linear-gradient(transparent 50%, white 90%);
    position: absolute;
    bottom: 0rem;
    right: 0;
    width: 100%;
    height: 2rem;
    content: '';
}

.dev__item__desc:after {
    content:'';
    width:100%;
    height:100%;    
    position:absolute;
    left:0;
    top:0;
    background:linear-gradient(to right, transparent 50%, white 85%, white 95%, transparent 96%);
}

.item__debt__value,
.item__head__col { flex-basis: 9rem; }

.item__head__col:nth-of-type(1),
.item__debt__value:nth-of-type(1) { justify-content: center; }

.item__head__col:nth-of-type(2),
.item__debt__value:nth-of-type(2) { justify-content: flex-end; }

.item__head__col:nth-of-type(3),
.item__debt__value:nth-of-type(3) { justify-content: flex-start; }

.btn__delete {
    display: flex;
    justify-content: center;
    border-radius: .8rem;
    padding: .3rem .7rem;
    background: transparent;
    border: 0;
    color: #F6C2CB;
    font-family: 'Permanent Marker';
    box-shadow: 0px 1px 6px rgb(243, 167, 178);
    transition: box-shadow .3s, color .3s;
    cursor: pointer;
}

.btn__delete { font-size: 1.4rem; }
  
.btn__delete:hover {
    color: #fd8282;
    box-shadow: 1px 2px 25px rgb(243, 167, 178);
}

.list__btns {
    display: flex;
    align-items:center;
    justify-content: center;
}


.list__dot,
.list__dot--active {
    display: table;
    font-family: 'Arial';
    background: transparent;
    border: 0;
    filter: drop-shadow(0px 0px 20px black);
    transition: color .2s;
    cursor: pointer;
    border-radius: 50%;
    margin: 1rem;
    transition: box-shadow .2s , color .2s, opacity .2s;
    outline: 0;
}

.list__arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    border-radius: 3rem;
    font-size: 1.5rem;
    width: 2.6rem;
    height: 2.6rem;
    color: grey;    
    transition: box-shadow .2s , color .2s, opacity .2s;
    outline: 0;
}

.list__dot {
    color: grey;
    width: 2.2rem;
    height: 2.2rem;
    font-size: 2.1rem;
    outline: 0;
}

.list__dot:focus { outline: 0; }

.list__dot--active {
    font-size: 2.1rem;
    width: 2.2rem;
    height: 2.2rem;
    color: rgb(0, 151, 0);
    position: relative;
    box-shadow: inset 0px 0px 6px #ccc;
}

.list__dot--active:after { position: absolute; }

.list__dot:hover,
.list__arrow:hover:not(:disabled) {
    color: goldenrod;
    border-radius: 50%;
    box-shadow: 0px 1px 10px goldenrod;
}
.list__arrow:not(:disabled) { color: goldenrod; }

.list__arrow:disabled { color: rgb(218, 218, 218); }

.list__transition__items { display: flex; }

@media (min-width: 85rem) {
    .list__transition__items { /* transition-group */
        flex-direction: column;
        flex: 1 1 auto; 
    }

    .dev__head { display: flex; }

    .dev__item__desc { display: flex; }

    .item__debt { flex-direction: row; }

    .list__debtors { flex-direction: column; }
}

/* transition group */
.list-item {
  display: inline-block;
  display: flex;
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

.list-item-enter, .list-item-leave-to {
  opacity: 0;
  transform: translatex(-200px);
}
/* transition group */
</style>