import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import * as firebase from "firebase/app";
import config from "./config/index";

firebase.initializeApp(config.firebase);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
