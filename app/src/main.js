// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
<<<<<<< HEAD
import "./reset.css";
import "./rem.js";
import "../static/css/iconfont/iconfont.css";
=======
import "./reset.css"
import "./rem.js"
import "../static/css/iconfont/iconfont.css"
// Vue.prototype.observer  = center;

>>>>>>> shangshang
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
