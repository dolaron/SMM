<template>
    <div>
        <div class="modal__overlay"></div>
        <div class="modal__deleted">
            <header class="modal__header">
                <button @click="close" class="modal__exit">&#215;</button>
            </header>
            <section class="modal__deleted__section">
                <h2 class="modal__deleted__debtor" id="debtor-name"> {{ deletedDebt.debtor }} </h2> 
                <h4 class="modal__deleted__txta"> must have returned that </h4>
                <h2 class="modal__deleted__value"> {{ deletedDebt.debtValue }} </h2>
                <h2 class="modal__deleted__txtb"> from the </h2>
                <h4 class="modal__deleted__date"> {{ deletedDebt.debtDate }} </h4>
                <h2 class="modal__deleted__txtc"> for </h2>
                <h4 class="modal__deleted__debt"> {{ deletedDebt.debtName }} </h4>
            </section>
            <footer class="modal__footer">
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
.modal__deleted {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 550px;
    height: 350px;
    position: fixed;
    left: 50%;
    top: 50%;
    max-width: 100%;
    max-height: 100%;
    background: white;
    transform: translate(-50%, -50%);
    border: 0;
    border-radius: .45rem;
    box-shadow: 0 0 10px grey;
    margin: auto;
    z-index: 300;
    box-shadow: 10px 8px 100px #333;
}

.modal__deleted__section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
}

.modal__deleted__debtor,
.modal__deleted__value,
.modal__deleted__date,
.modal__deleted__debt {
    display: flex;
    justify-content: center;
    margin: 0;
    font: 2.2rem 'Permanent Marker';
    flex-wrap: nowrap;
    transition: color .2s;
}

.modal__deleted__debtor { flex-basis: 7.5rem; }

.modal__deleted__value {
    display:flex;
    flex-basis: 3rem;
}

.modal__deleted__txta,
.modal__deleted__txtb,
.modal__deleted__txtc {
    display: flex;
    justify-content: center;
    margin: 0;
    font: 1.5rem 'Helvetica';
}

.modal__deleted__txta { flex-basis: 16.8rem; }

.modal__deleted__txtb { flex-basis: 6rem; }

.modal__deleted__txtc { flex-basis: 3rem; }
</style>
