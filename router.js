import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import About from './views/About.vue'
import Zys from './views/Zys.vue'
import Page from './views/Page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/asd',
      name: 'asd',
      component: Zys
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    }
  ]
})
