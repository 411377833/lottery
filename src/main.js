// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import App from './App'
import Vant from 'vant';
import router from './router'
import {fetchGet,fetchPost} from './axios'
import 'vant/lib/index.css';
// import '../../static/css/gonggong.css'/* 引入公共样式*/
Vue.config.productionTip = false
Vue.prototype.fetchGet = fetchGet
Vue.prototype.fetchPost = fetchPost
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
