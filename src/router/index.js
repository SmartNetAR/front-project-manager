import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'

import store from '../store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/Account'),
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/Teams'),
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login'),
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About')
    }
  ]
})
