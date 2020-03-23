import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Countries from '../views/Countries.vue'
import Report from '../views/Reports.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/countries',
    name: 'Countries',
    component: Countries,
    meta: { requiresAuth:true },
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
    meta: { requiresAuth:true },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(!localStorage.getItem('token')){
      next({
        name: 'Login',
      })
    } else{
      next()
    }
  } else{
      next()
  } 
})

export default router
