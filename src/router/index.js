import Vue from 'vue'
import Router from 'vue-router'
import home_shop from '@/views/home/home_shop/home_shop'
import home_new_year from '@/views/home/home_new_year/home_new_year'
import home_general from '@/views/home/home_general/home_general'
import home from '@/views/home/home'
import my from '@/views/my/my'
import shop from '@/views/shop/shop'
import productDetail from '@/views/productDetail/productDetail'

Vue.use(Router)

export default new Router({
  // mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      // 首页主题，用路由嵌套展现
      children: [
        {
          path: '',
          redirect:'home_shop',
        },
        {
          path: 'home_general',
          name: 'home_general',
          component: home_general
        },
        {
          path: 'home_new_year',
          name: 'home_new_year',
          component: home_new_year
        },
        {
          path: 'home_shop',
          name: 'home_shop',
          component: home_shop
        },
      ],
    },
    
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
  ]
})
