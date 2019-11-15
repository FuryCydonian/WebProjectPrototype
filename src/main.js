import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: () => {
    fb.initializeApp({
      apiKey: "AIzaSyBANqkI6e0mwprbOG3031bzbk_BrMMBZQU",
      authDomain: "showgeek-bc0a1.firebaseapp.com",
      databaseURL: "https://showgeek-bc0a1.firebaseio.com",
      projectId: "showgeek-bc0a1",
      storageBucket: "showgeek-bc0a1.appspot.com",
      messagingSenderId: "464641109965",
      appId: "1:464641109965:web:092d8f5ad8e97a513c9e84",
      measurementId: "G-ZD42GZYH5D"
    })
  }
}).$mount('#app')
