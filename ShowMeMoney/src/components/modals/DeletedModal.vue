<template>
    <div>
        <div class="modal-overlay"></div>
        <div class="modal-deleted">
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
    data() {
        return {

        }
    },
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

<style>
.btn-sdi {
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    padding: .15rem .6rem;
    background: transparent;
    border:2px solid #333;
    box-shadow: 1px 2px 8px grey;
    border-radius: .7rem;
    font: 1.5rem 'Permanent Marker';
    transition: box-shadow .25s, color .25s, border .25s;
    cursor: pointer;
}

.btn-sdi:hover {
    box-shadow: 0 0 10px goldenrod;
    border:2px solid rgb(206, 159, 41);
    color: goldenrod;

}
.modal-header {
    display:flex;
    justify-content: flex-end;
    width: 100%;
}

.deleted-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
}

.modal-footer {
    display: flex;
    height: 5rem;
}

.modal-exit {
    align-self: flex-start;
    color: grey;
    font: 2.4rem 'Arial';
    font-weight: bold;
    background: transparent;
    cursor:pointer;
    transition: color .2s;
    margin: 0;
    border: 0;
}
.modal-exit:hover{color:#ccc;}

.deleted-debtor,
.deleted-value,
.deleted-date {
    display: flex;
    justify-content: center;
    margin: 0;
    font: 2.2rem 'Permanent Marker';
    flex-wrap: nowrap;
    transition: color .2s;
}

.deleted-debtor {
    flex-basis: 7.5rem;
    /* flex: 8; */
}

.deleted-value {
    display:flex;
    flex-basis: 3rem;
}

.deleted-date {

}

.deleted-txta,
.deleted-txtb,
.deleted-txtc {
    display: flex;
    justify-content: center;
    margin: 0;
    font: 1.5rem 'Helvetica';
}

.deleted-txta {
    flex-basis: 16.8rem;
    /* flex-wrap: nowrap; */
    /* flex: 20; */
}

.deleted-txtb {
    flex-basis: 6rem;
}

.deleted-txtc {
    flex-basis: 3rem;
}

.modal-overlay {
    background: rgba(0.2, 0.2, 0.4, 0.3);
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    flex: 1;
    z-index: 200;
}

.modal-deleted {
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
    animation-name: '';
    }
</style>
