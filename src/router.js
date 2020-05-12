import Vue from 'vue'
import Router from 'vue-router'
import PropertyList from './views/PropertyList.vue'
import PropertyDetails from './views/PropertyDetails.vue'
import NProgress from 'nprogress'
import NotFound from './views/NotFound.vue'
import FrontPage from './views/FrontPage.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: FrontPage,
      props: true
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
      props: true
    },
    {
      path: '/list',
      name: 'list',
      component: PropertyList,
      props: true
    },
    {
      path: '/property',
      name: 'property-show',
      component: PropertyDetails,
      props: true
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
