import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Day from '@/pages/Day'
import DayDetail from '@/pages/DayDetail'
import List from '@/pages/List'
import Skill from '@/pages/Skill'
import Login from '@/pages/Login'
import Edit from '@/pages/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      children: [
        {
          path: ':index',
          component: List
        }
      ]
    },
    {
      path: '/day',
      name: 'Day',
      component: Day,
      // children: [
      //   {
      //     path: ':d_id',
      //     component: Day
      //   }
      // ]
    },
    {
      path: '/day/:d_id',
      name: 'DayDetail',
      component: DayDetail,
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill,
      children: [
        {
          path: ':s_id',
          component: Skill
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ],
 mode:"history"
})
