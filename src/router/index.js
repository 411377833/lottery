import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import kaijiang from '@/components/kaijiang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/kaijiang',
      name: 'kaijiang',
      component: kaijiang
    },
  ]
})
