import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Countries from '../views/Countries.vue'
import Provinces from '../views/Provinces.vue'
import Patient from '../views/Patient.vue'
import Kasus from '../views/Kasus.vue'
import Hotline from '../views/Hotline.vue'
import CountriesDetail from '../views/CountriesDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/countries',
    name: 'Countries',
    component: Countries,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/countries/indonesia/kasus',
    name: 'Kasus',
    component: Kasus,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/hotline',
    name: 'Hotline',
    component: Hotline,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/countries/:country',
    name: 'CountriesDetail',
    component: CountriesDetail,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/provinces',
    name: 'Provinces',
    component: Provinces,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/provinces/jawabarat/kasus',
    name: 'Patient',
    component: Patient,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/about',
    name: 'About',
    meta: { transitionName: 'slide' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
