import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dialogue from '../views/User/Dialogue.vue'
import Profile from '../views/User/Profile.vue'
import Calendar from '../views/User/Calendar.vue'
import Bookmarks from '../views/User/Bookmarks.vue'
import Alerts from '../views/User/Alerts.vue'
import Settings from '../views/Settings.vue'
import Login from '../views/Auth/Login.vue'
import Registration from '../views/Auth/Trgistration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dialogue',
    name: 'dialogue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Dialogue// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Calendar// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Bookmarks// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/alerts',
    name: 'alerts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Alerts// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Settings// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Registration// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
