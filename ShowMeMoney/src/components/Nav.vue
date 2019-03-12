<template>
    <div>
        <nav class="nav__top">
            <p class="nav__logo" @click="navTo"> show me money ! </p>
            <div class="nav__links">
                <router-link to="/debts" exact class="nav__link">
                    Dłużnicy
                </router-link>
                <router-link to="/login" class="nav__link" link>
                    Zaloguj się
                </router-link>
                <button @click="logout" class="btn__logout"> Wyloguj </button>
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

<style scoped>

.nav__top {
  display: flex;
  flex: 10;
  justify-content: space-between;
  align-items: center;
  height: 9vh;
  min-height:3.5rem;
  box-shadow: 0 0 20px -2px rgb(11, 22, 88);
  margin: 0;
}
  
.nav__logo {
  display: flex;
  font-family: 'Permanent Marker';
  font-size: 1.4rem;
  padding: 0;
  margin: 0;
  padding-left: 2rem;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: color .2s;
}

.nav__logo:hover { color: goldenrod; }
  
.nav__links {
  display: flex;
  justify-content: space-around;
  width: 30%;
  font-family: 'News Cycle';
  cursor: pointer;
  transition: filter 0.5s ease;
  height: 100%;
}
  
.nav__link {
  display:flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  position: relative;
  transition: border .2s, font-size .2s, box-shadow .2s, color .2s;
  border-bottom: 4px solid transparent;
}

.nav__link:hover:not(.router-link-active) {
  box-shadow: 0px 15px 10px -14px #333;
  border-color: rgba(218, 165, 32, 0.301);
  color: rgba(218, 165, 32, 0.301);
}

.btn__logout {
  display: flex;
  align-self: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid #d3d3d3;
  padding: .3rem .50rem;
  font: .8rem 'Permanent Marker';
  color: #d3d3d3;
  background: transparent;
  box-shadow: 0 0 15px #808080;
  cursor: pointer;
  transition: border-color .3s, color .3s, box-shadow .3s;
}
  
.btn__logout:hover {
  border-color: #008000;
  color: rgb(1, 143, 1);
  box-shadow: 0 0 15px #008000;
}

/* ACTIVE ROUTER LINK */
.router-link-active {  
  align-self: stretch;
  border-bottom: 4px solid rgb(240, 182, 37);
  color: goldenrod;
  font-size: 1.2rem;
}

</style>
