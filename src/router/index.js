import Vue from 'vue'
import Router from 'vue-router'
import BillsMenu from '@/components/bills/BillsMenu'
import StateComponent from '@/components/State'
import StateComponents from '@/components/States'

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
    }
  ]

})
