import Vue from 'vue'
import Router from 'vue-router'
import MyBlog from '@/pages/MyBlog'
import Home from '@/pages/Home'
import About from '@/pages/About'
import List from '@/pages/List'
import Skill from '@/pages/Skill'
import Php from '@/pages/Php'
import MySql from '@/pages/MySql'
import Day from '@/pages/Day'

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
      component: List
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/myblog',
      name: 'MyBlog',
      component: MyBlog
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
    }
  ],
 mode:"history"
})
