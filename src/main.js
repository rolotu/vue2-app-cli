import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import './styles/index.less'

import App from './App'
import store from './store'
import router from './router'

import utils from './utils'
Vue.use(utils)

import './permission' // permission control

Vue.config.productionTip = false

function initRem() {
  let calc = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
  window.document.documentElement.style.fontSize = `${100 * calc}px`
}

window.addEventListener('resize', initRem)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
