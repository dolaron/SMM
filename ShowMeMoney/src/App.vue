<template>
  <div id="app">
    <Nav></Nav>
    <Loader v-if="showLoader"></Loader>
    <transition name="flow-in" mode="out-in">
      <router-view/>
    </transition>
    <DeletedModal v-if="showDeleted"></DeletedModal>
    <Toast></Toast>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Loader from './components/modals/Loader'
import DeletedModal from './components/modals/DeletedModal'
import Toast from './components/modals/Toast'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  beforeCreate () {
    this.$store.dispatch('checkAuthUser')
  },
  computed: mapGetters({
      showLoader: 'getLoader',
      showDeleted: 'getDeletedModal'
    }),
  components: {
    Nav,
    Loader,
    DeletedModal,
    Toast
  }
}
</script>

<style>

body { margin: 0; }

.display-row {
  min-height: 100%;
  min-width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/** transition **/
.flow-in-enter {
  opacity: 0;
  transform: translateX(-10rem);
}

.flow-in-leave-to {
  opacity: 0;
  transform: translateX(10rem);
}

.flow-in-leave,
.flow-in-enter-to {
  opacity: 1;
  transform: translateX(0rem);
}

.flow-in-enter-active,
.flow-in-leave-active {
  transition: opacity .2s, transform .2s ease-out;
  will-change: transform;
}

</style>
