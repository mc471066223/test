// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '@/assets/public.css'
import '@/assets/flag.css'
import store from '@/vuex/store'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

Vue.use(store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})