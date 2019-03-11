<template>
    <div>
        <section class="section">
            <div class="conf-creds">
                <h2 class="cred-header">Potwierdz</h2>
                <div class="cd">
                    <input v-model="username" class="cd-input" required>
                    <div class="cd-span"/>
                    <label class="cd-label">Username</label>
                </div>
                <div class="cd">
                    <input v-model="confirmationCode" class="cd-input" type="password" required>
                    <div class="cd-span" />
                    <label class="cd-label">Code</label>
                </div>
                <button @click="confirmUser" class="btn-submit">Potwierdz uzytkownika</button>
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
    components: {

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
.conf-creds {
    display: flex;
    flex-direction: column;
    height: 25rem;
    justify-content: space-around;
}

.conf-creds:hover > h2,
.conf-creds:focus-within > h2 {
    color: green;
}

</style>
