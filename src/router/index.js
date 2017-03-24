import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Index from '@/pages/index'
import System from '@/pages/system'
import User from '@/pages/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: Login
    },
    {
      path:'/index',component:Index,
      children: [
        {
          path: '/',
          component: System
        },
        {
          path: 'system',
          component: System
        },
        {
          path: 'user',
          component: User
        }
      ]
    }
  ]
})
