<template>
    <div class="display-row">
        <nav class="nav-top">
            <p class="nav-logo" @click="navTo"> show me money ! </p>
            <div class="nav-links">
                <router-link to="/debts" exact class="nav-link">
                    Dłużnicy
                </router-link>
                <router-link to="/login" class="nav-link" link>
                    Zaloguj się
                </router-link>
                <button @click="logout" class="btn-logout"> Wyloguj </button>
            </div>
        </nav>
    </div>
</template>

<script>
import router from 'vue-router'
export default {
    name: 'Nav',
    methods: {
        navTo() {
            this.$router.replace("/")
        },
        logout () {
            this.$store.dispatch('logout')
        },
        checkAuth () {
            this.$store.dispatch('checkAuthUser')
        }
    }
}
</script>

