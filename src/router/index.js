import Vue from 'vue'
import Router from 'vue-router'
import manager from '@/components/router.js'
import Login from '@/components/Login'
import Index from '@/components/Index'
import User from '@/components/manager/User.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        ...manager
      ]
    }
  ]
})
