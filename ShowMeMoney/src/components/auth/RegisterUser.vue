<template>
    <div>
        <section class="section">
            <div class="register__credentials">
                <h2 class="register__credentials__header">Register</h2>
                <div class="cd">
                    <input v-model="username" class="cd__input" required>
                    <div class="cd__span"/>
                    <label class="cd__label">Username</label>
                </div>
                <div class="cd">
                    <input v-model="email" class="cd__input" required>
                    <div class="cd__span"/>
                    <label class="cd__label">Email</label>
                </div>
                <div class="cd">
                    <input v-model="pass" class="cd__input" type="password" required>
                    <div class="cd__span"/>
                    <label class="cd__label">Password</label>
                </div>
                <button @click="register" class="btn__submit">Rejestruj</button>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'RegisterUser',
    data () {
        return {
            username: "",
            email: "",
            pass: "",
        }
    },
    computed: {
    },
    methods: {
        register () {
            this.$store.dispatch("register", { username: this.username, email: this.email, pass: this.pass })
        }
    }
}
</script>

<style scoped>
    .register__credentials {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 30rem;
    }
    .register__credentials:hover > .register__credentials__header,
    .register__credentials:focus-within > .register__credentials__header  {
        color : green;
    }

    .register__credentials__header {
        display: flex;
        align-self: center;
        font-family: 'Permanent Marker';
        color: #ccc;
        transition: color .3s ease;
        margin: 0;
        padding: 0;
    }

</style>
