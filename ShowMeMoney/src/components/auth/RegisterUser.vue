<template>
    <div>
        <section class="section">
            <div class="register-creds">
                <h2 class="cred-header">Register</h2>
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

<style>
    .register-creds {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 30rem;
    }
    .register-creds:hover > h2,
    .register-creds:focus-within > h2  {
        color : green;
    }

    .btn-rregister {
        display:flex;
        width: 8rem;
        font: 1.1rem 'Permanent Marker';
        background: transparent;
        border-radius: 6px;
        border: 2px solid green;
        color: green;
        padding:0;
        margin:0;
    }


</style>
