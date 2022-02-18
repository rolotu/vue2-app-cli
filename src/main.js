import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import 'amfe-flexible'

import './styles/index.less'

import App from './App'
import store from './store'
import router from './router'

import { Toast } from 'vant'
Vue.use(Toast)

import utils from './utils'
Vue.use(utils)

import './permission' // permission control

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
