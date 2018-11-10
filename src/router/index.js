import Vue from 'vue'
import Router from 'vue-router'

import BillsMenu from '@/components/bills/BillsMenu'
import StateComponent from '@/components/State'
import StateComponents from '@/components/States'
import ModulesComponents from '@/components/Modules'
import CartComponents from '@/components/Cart'

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      name: 'BillsMenu',
      component: BillsMenu
    },
    {
      path: '/state',
      name: 'StateComponent',
      component: StateComponent
    },
    {
        path: '/states',
        name: 'StateComponents',
        component: StateComponents
    },
    {
        path: '/modules',
        name: 'ModulesComponents',
        component: ModulesComponents
    },
    {
        path: '/cart',
        name: 'CartComponents',
        component: CartComponents
    }
  ]

})
