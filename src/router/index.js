import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('views/Home'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/about',
    name: 'About',
    component: ()=> import('views/About'),
    meta: { title: '关于', keepAlive: false }
  }
]

const router = new VueRouter({
  // mode: 'history', // require service support
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router