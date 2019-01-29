<template>
    <div>
        <section class="section">
            <router-link to="/debts" class="btn-back" tag="button"> &#10508; Debts </router-link>
            <div class="debtor-debts">
                <h4 class="debtor-title"> {{ debtorDebts[0].debtor }}'s all debts </h4>
                <div class="debtor-row">
                    <ul class="debtor-list">
                        <li v-for="debt in debtorDebts" class="debt-item" :key="debt.debtId">
                            <h4 class="debt-value"> {{ debt.debtValue }} </h4>
                            <h4 class="debt-name"> {{ debt.debtName }} </h4>
                            <h4 class="debt-date "> {{ debt.debtDate }} </h4>
                        </li>
                    </ul>
                    <img src="../assets/images/iconfinder_woman-runner.png" class="debtor-img">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Debtor',
    computed: {
        ...mapGetters({
            debtorDebts: 'getDebtorDebts'
        })
    }
}
</script>

<style>

.btn-back {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 4rem;
    left: 3rem;
    height: 4rem;
    background: transparent;
    font: 2rem 'Permanent Marker';
    cursor: pointer;
    border:0;
    color: #ccc;
}

.btn-txth {
    margin: 0;
    padding: 0;

}

.debtor-debts {
    display:flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    height: 80rem;
    width: 80%;
}

.debtor-title {
    display: flex;
    font: 3rem 'Permanent Marker';
}

.debtor-row {
    display: flex;
    height: 20rem;
    justify-content: space-around;
}

.debtor-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 30rem;
}

.debt-item {
    display: flex;
    justify-content: space-around;
}

.debt-value,
.debt-name,
.debt-date {
    display: flex;
    font: 1.3rem 'Permanent Marker';
    flex-basis: 8rem;
}

.debtor-img {
    width: auto;
    height: auto;
    max-width: 250px;
    max-height: 250px;
}

</style>
