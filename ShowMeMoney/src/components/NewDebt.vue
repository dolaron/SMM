<template>
    <div class="display-row">
        <section class="section">
            <div class="form-new-debt">
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
                <div class="nd-row">
                    <div class="cds-s">
                        <select class="cd__select">
                            <option> 2018 </option>
                            <option> 2017 </option>
                            <option> 2016 </option>
                            <option> 2015 </option>
                        </select> 
                    </div>
                    <div class="cd-s">
                        <input v-model="date" :class="checkToday ? 'cd__input--disabled' : 'cd__input'" type="date" :disabled="checkToday ? true : false" required>
                        <span class="cd__span"/>
                        <label :class="checkToday ? 'cd__label--disabled' : 'cd__label'"> Kiedy? </label>
                    </div>
                    <label class="checkbox-wrap">
                        <input @change="checkToday = !checkToday" class="checkbox-new" type="checkbox" :checked="checkToday">
	                    <div class="checkbox-in"></div>
                        <p class="checkbox-label"> Teraz ? </p>
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
            date: "2018-12-11",
            checkToday: true
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

<style>
    .nd-row {
        display: flex;
        padding: 0;
        margin:0;
        height:2.5rem;
        justify-content: space-around;
    }

    .form-new-debt {
        height: 25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
</style>
