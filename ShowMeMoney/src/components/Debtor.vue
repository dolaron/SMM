<template>
    <div>
        <section class="section">
            <router-link to="/debts" class="btn__back" tag="button"> &#10508; Debts </router-link>
            <div class="debtor__debts">
                <h4 class="debtor__debts__title"> {{ debtorDebts[0].debtor }}'s all debts </h4>
                <div class="debtor__debts__row">
                    <ul class="debtor__debts__list">
                        <li v-for="debt in debtorDebts" class="debtor__debts__item" :key="debt.debtId">
                            <h4 class="debtor__debts__item__value"> {{ debt.debtValue }} </h4>
                            <h4 class="debtor__debts__item__name"> {{ debt.debtName }} </h4>
                            <h4 class="debtor__debts__item__date"> {{ debt.debtDate }} </h4>
                        </li>
                    </ul>
                    <img src="../assets/images/iconfinder_woman-runner.png" class="debtor__debts__img">
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

<style scoped>

.btn__back {
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
    border: 0;
    color: #ccc;
}

.debtor__debts {
    display:flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    height: 80rem;
    width: 80%;
}

.debtor__debts__title {
    display: flex;
    font: 3rem 'Permanent Marker';
}

.debtor__debts__row {
    display: flex;
    height: 20rem;
    justify-content: space-around;
}

.debtor__debts__list {
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 30rem;
}

.debtor__debts__item {
    display: flex;
    justify-content: space-around;
}

.debtor__debts__item__value,
.debtor__debts__item__name,
.debtor__debts__item__date {
    display: flex;
    font: 1.3rem 'Permanent Marker';
    flex-basis: 8rem;
}

.debtor__debts__img {
    width: auto;
    height: auto;
    max-width: 250px;
    max-height: 250px;
}

</style>
