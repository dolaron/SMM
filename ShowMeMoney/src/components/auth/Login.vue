<template>
    <div>
        <section class="section">
            <div class="login__plane">
                <div class="login__plane__btns">
                    <div class="login__plane__link">
                        <h4 class="login__plane__link__header">Nie masz konta?</h4><span>-></span>
                        <router-link to="/registerUser" class="btn__register" tag="button">Rejestruj</router-link>
                    </div>
                    <div class="login__plane__link">
                        <h4 class="login__plane__link__header">Zarejestrowany?</h4><span>-></span>
                        <router-link to="/confirmUser" class="btn__confirm" tag="button">Confirm User</router-link>
                    </div>
                </div>
                <div class="login__plane__credentials">
                    <div class="cd mrt">
                        <input v-model="login" class="cd__input" autocomplete="new-password" required>
                        <span class="cd__span"/>
                        <label class="cd__label">Login</label>
                    </div>
                    <div class="cd">
                        <input v-model="pass" @keyup.enter="onLogin()" class="cd__input" autocomplete="new-password" type="password" required>
                        <span class="cd__span"/>
                        <label class="cd__label">Pass</label>
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

<style scoped>
    .login__plane {
        display: flex;
        height: 30rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .login__plane__btns {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 35%;
        justify-content: space-around;
        align-items: flex-end;
        width: 30rem;
    }

    .login__plane__link {
        display: flex;
        width: 100%;
        font: 1.4rem 'Permanent Marker';
        justify-content: space-between;
        align-items: center;
    }

    .login__plane__link:hover > * {
        color: green;
        border-color: green;
    }

    .login__plane__link__header {
        margin: 0;
    }

    .login__plane__credentials {
        display: flex;
        flex-direction: column;
        height: 60%;
        justify-content: space-around;
    }

    .btn__register,
    .btn__confirm {
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

    .btn__confirm:hover,
    .btn__register:hover {
        box-shadow: 0 0 25px #808080;
        color: #808080;
        border-color: #808080;
    }

    .mrt {
        margin-top: 2rem;
    }

</style>
