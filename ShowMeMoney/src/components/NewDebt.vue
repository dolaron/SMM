<template>
    <div>
        <section class="section">
            <div class="new__debt">
                <div class="cd">
                    <input v-model="debtor" class="cd__input" required>
                    <span class="cd__span"/>
                    <label class="cd__label"> Skurczysyn </label>
                </div>
                <div class="cd">
                    <input v-model="item" class="cd__input" required>
                    <span class="cd__span"/>
                    <label class="cd__label"> Za co? </label>
                </div>
                <div class="cd">
                    <input v-model="val" class="cd__input" required>
                    <span class="cd__span"/>
                    <label class="cd__label"> Ile? </label>
                </div>
                <div class="new__debt__row">
                    <div class="cd--xs">
                        <select class="cd__select">
                            <option v-for="date in dates" :key="date">{{ date }}</option>
                        </select> 
                    </div>
                    <div class="cd--s">
                        <input v-model="date" :class="checkToday ? 'cd__input--disabled' : 'cd__input'" type="date" :disabled="checkToday ? true : false" required>
                        <span class="cd__span"/>
                        <label :class="checkToday ? 'cd__label--disabled' : 'cd__label'"> Kiedy? </label>
                    </div>
                    <label class="checkbox__wrap">
                        <input @change="checkToday = !checkToday" class="checkbox__input" type="checkbox" :checked="checkToday">
	                    <div class="checkbox__in"></div>
                        <p class="checkbox__label"> Teraz ? </p>
                    </label>
                </div>
            </div>
            <button @click="newDebt" class="btn__submit"> Dodaj </button>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'NewDebt',
    data () {
        return {
            debtor: "",
            item: "",
            val: "",
            date: new Date().toISOString().split('T')[0].toString(),
            checkToday: true,
            dates: [ 2018, 2016, 2015, 2014 ]
        }
    },
    computed: {
        ...mapGetters({
            user: 'getUser'
            
        })
    },
    beforeCreate () {
    },
    methods: {
        newDebt () {
            const debt = {userId: this.user,
                          debtor: this.debtor,
                          debtName: this.item,
                          debtValue: this.val,
                          debtDate: this.date  }
            this.$store.dispatch('postNewDebt', debt)
        }
    }
}
</script>

<style scoped>

    .new__debt__row {
        display: flex;
        padding: 0;
        margin: 0;
        height: 2.5rem;
        justify-content: space-around;
    }

    .new__debt {
        height: 25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

</style>
