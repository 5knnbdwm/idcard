import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    }, {
      path: '/',
      name: 'main',
      component: Main
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
