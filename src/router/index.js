import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Kind from '@/components/Kind.vue'
import Cart from '@/components/Cart.vue'
import User from '@/components/User.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/kind',
      component: Kind
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/user',
      component: User
    }
  ]
})
