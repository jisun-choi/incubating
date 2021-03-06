import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import axios from '../components/axios.vue'
import emit from '../components/emit.vue'
import event from '../components/event.vue'
import mixin from '../components/mixin.vue'
import ref from '../components/ref.vue'
import routing from '../components/routing.vue'
import vuex from '../components/vuex.vue'
import watch from '../components/watch.vue'
import computed from '../components/computed.vue'
import nexttick from '../components/nextTick.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/axios',
    name: 'Axios',
    component: axios
  },
  {
    path: '/emit',
    name: 'Emit',
    component: emit
  },
  {
    path: '/event',
    name: 'Event',
    component: event
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: mixin
  },
  {
    path: '/ref',
    name: 'Ref',
    component: ref
  },
  {
    path: '/routing',
    name: 'Routing',
    component: routing
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: vuex
  },
  {
    path: '/watch',
    name: 'Watch',
    component: watch
  },
  {
    path: '/computed',
    name: 'Computed',
    component: computed
  },
  {
    path: '/nexttick',
    name: 'nexttick',
    component: nexttick
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
