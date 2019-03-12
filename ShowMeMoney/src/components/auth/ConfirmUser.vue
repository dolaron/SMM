<template>
    <div>
        <section class="section">
            <div class="confirm__credentials">
                <h2 class="confirm__credentials__header">Potwierdz</h2>
                <div class="cd">
                    <input v-model="username" class="cd__input" required>
                    <div class="cd__span"/>
                    <label class="cd__label">Username</label>
                </div>
                <div class="cd">
                    <input v-model="confirmationCode" class="cd__input" type="password" required>
                    <div class="cd__span" />
                    <label class="cd__label">Code</label>
                </div>
                <button @click="confirmUser" class="btn__submit">Potwierdz uzytkownika</button>
            </div>
        </section>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ConfirmUser',
    data () {
        return {
            username: "",
            confirmationCode: "",
            confirmedMess: "Potwierdzono twoje konto"
        } 
    },
    computed: {
        ...mapGetters({
            showToast: 'getShowToast'
        })
    },
    methods: {
        confirmUser () {
            const confData = {
                username : this.username,
                code : this.confirmationCode
            } 
            this.$store.dispatch('confirmUser', confData)
        }
    }
}
</script>

<style>

.confirm__credentials {
    display: flex;
    flex-direction: column;
    height: 25rem;
    justify-content: space-around;
}

.condirm__credentials:hover > .confirm__credentials__header,
.condirm__credentials:focus-within > .confirm__credentials__header {
    color: green;
}

</style>
