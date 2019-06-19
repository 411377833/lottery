// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import MintUI from 'mint-ui'
import App from './App'
import router from './router'
import {fetchGet} from './axios'
Vue.config.productionTip = false
Vue.prototype.fetchGet = fetchGet
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
