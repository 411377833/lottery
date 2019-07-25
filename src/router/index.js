import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import kaijiang from '@/components/kaijiang'
import HomePage from '@/components/homePage/homePage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/kaijiang',
      name: 'kaijiang',
      component: kaijiang
    },
    // {
    //   path: '/homePage',
    //   name: 'homePage',
    //   component: HomePage
    // }
  ]
})
