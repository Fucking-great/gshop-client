/*
* 路由器对象模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home/Home";
//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //配置路由
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: () => import(/*webpackChunkName:"Order"*/'../views/Order/Order'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: () => import(/*webpackChunkName:"Profile"*/'../views/Profile/Profile'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: () => import(/*webpackChunkName:"Search"*/'../views/Search/Search'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: () => import(/*webpackChunkName:"Login"*/'../views/Login/Login')
    }
  ]
})
