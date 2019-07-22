import Vue from 'vue'
import Router from 'vue-router'
import CreateDevice from '@/components/CreateDevice'
import ListDevice from '@/components/ListDevice'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/devices/index'
    },{
      path:'/devices/index',
      name:'list-device',
      component:ListDevice
    },
    {
      path:'/devices/create',
      name:'create-device',
      component:CreateDevice
    }
  ]
})
