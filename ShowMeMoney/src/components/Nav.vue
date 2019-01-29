<template>
    <div class="display-row">
        <nav class="nav-top">
            <router-link to="/" class="nav-logo" exact> show me money ! </router-link>
            <div class="nav-links">
                <router-link to="/debts" class="nav-link">
                    <p> Dłużnicy </p>
                </router-link>
                <router-link to="/login" class="nav-link" link>
                    <p> Zaloguj się </p>
                </router-link>
                <button @click="logout" class="btn-logout"> Wyloguj </button>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Nav',
    computed: {
        ...mapGetters({
            userPool: 'getUserPool'
        })
    },
    methods: {
        logout () {
            this.$store.dispatch('logout')
        },
        checkAuth () {
            this.$store.dispatch('checkAuthUser')
        }
    }
}
</script>

<style>

</style>
