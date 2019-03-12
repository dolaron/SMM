<template>
    <div>
        <section class="section">
            <div class="plane-login">
                <div class="login-btns">
                    <div class="login-link">
                        <h4 class="ll-header">Nie masz konta?</h4><span>-></span>
                        <router-link to="/registerUser" class="btn-register" tag="button">Rejestruj</router-link>
                    </div>
                    <div class="login-link">
                        <h4 class="ll-header">Zarejestrowany?</h4><span>-></span>
                        <router-link to="/confirmUser" class="btn-confirm" tag="button">Confirm User</router-link>
                    </div>
                </div>
                <div class="login-creds">
                    <!-- <h2 class="cred-header">Login</h2> -->
                    <div class="cd" style="margin-top: 2rem;">
                        <input v-model="login" class="cd-input" autocomplete="new-password" required>
                        <span class="cd__span"/>
                        <label class="cd-label">Login</label>
                    </div>
                    <div class="cd">
                        <input v-model="pass" @keyup.enter="onLogin()" class="cd-input" autocomplete="new-password" type="password" required>
                        <span class="cd__span"/>
                        <label class="cd-label">Pass</label>
                    </div>
                    <button @click="onLogin()" class="btn__submit">Zaloguj</button>
                    <!-- <button @click="checkLogged">Sprawdz zalogowanegp </button> -->
                </div>
             </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Login',
    data () {
        return {
            login: '',
            pass: ''
        }
    },
    computed: {
        ...mapGetters({
            // toast: 'getToastTxt'
        })
    },
    methods: {
        onLogin () {
            const data = { login: this.login,
                            pass: this.pass }
            this.$store.dispatch('login', data)
        },
        checkLogged () {
            this.$store.dispatch('checkAuthUser', this.login)
        }
    }
}
</script>

<style>
    .plane-login {
        display: flex;
        height: 30rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }

    .login-btns {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 35%;
        justify-content: space-around;
        align-items: flex-end;
        width: 30rem;
    }

    .login-link {
        display: flex;
        width: 100%;
        font: 1.4rem 'Permanent Marker';
        justify-content: space-between;
        align-items: center;
    }

    .login-link:hover > * {
        color: green;
        border-color: green;
    }

    .ll-header {
        margin: 0;
    }

    .login-creds {
        display: flex;
        flex-direction: column;
        height: 60%;
        justify-content: space-around;
    }

    .login-creds:hover > h2,
    .login-creds:focus-within > h2  {
        color : green;
    }

    .btn-register,
    .btn-confirm {
        background: transparent;
        border-radius: 10px;
        color: #cccccc;
        border: 2px solid #cccccc;
        font: 1.4rem 'Permanent Marker';
        cursor: pointer;
        box-shadow: 0 0 8px #808080;
        transition: box-shadow .3s, color .3s, border-color .3s;
        padding: .4rem .8rem;
        display: flex;
        flex-grow: 0;
    }

    .btn-confirm:hover,
    .btn-register:hover {
        box-shadow: 0 0 25px #808080;
        color: #808080;
        border-color: #808080;
    }

    .cd-margin {
        margin-bottom: 2rem;
    }

</style>
