import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { store } from "./store/index.js";
import { routes } from "./router/index.js";

import TheNavbar from "./components/nav/TheNavbar.vue";

Vue.config.productionTip = false

Vue.component("the-navbar", TheNavbar);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
