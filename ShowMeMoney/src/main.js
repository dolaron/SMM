// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import store from './store/store'
import App from './App'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Vuex)

require('./assets/styles/main.css')
require('./assets/styles/cd.css')
require('./assets/styles/checkbox.css')
require('./assets/styles/modals.css')

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})


