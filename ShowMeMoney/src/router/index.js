import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Login from '@/components/auth/Login'
import ConfirmUser from '@/components/auth/ConfirmUser'
import RegisterUser from '@/components/auth/RegisterUser'
import SearchUser from '@/components/SearchUser'
import Debt from '@/components/Debt'
import Debts from '@/components/Debts'
import NewDebt from '@/components/NewDebt'
import Debtor from '@/components/Debtor'
// import store from '../store/store'


Vue.use(Router)

// export default new Router({
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'SearchUser',
      component: SearchUser,      
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: AuthGuard
    }, 
    {
      path: '/confirmUser',
      name: 'ConfirmUser',
      component: ConfirmUser,
      beforeEnter: AuthGuard
    }, 
    {
      path: '/registerUser',
      name: 'RegisterUser',
      component: RegisterUser,
      beforeEnter: AuthGuard
    },
    // {
    //   path: '/debt',
    //   name: 'Debt',
    //   component: Debt,
    //   beforeEnter: AuthGuard
    // },
    {
      path: '/debts',
      name: 'Debts',
      component: Debts,
      beforeEnter: AuthGuard
    }, 
    {
      path: '/newDebt',
      name: 'NewDebt',
      component: NewDebt,
      beforeEnter: AuthGuard
    }, {
      path: '/debtor/:id',
      name: 'Debtor',
      component: Debtor,
      beforeEnter: AuthGuard
    }
  ]
})

export default router