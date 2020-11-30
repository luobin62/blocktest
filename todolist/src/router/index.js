//配置路由相关信息
import vuerouter from 'vue-router'
import Vue from 'vue'

import comment from '../components/comment'
import home from "../components/home"


//懒加载


//1.通过vue.use(插件)，安装插件

Vue.use(vuerouter)

//创建vuerouter对象
const routes=[
  {
    path:'',
    //redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: home
  },
  {
    path: '/comment',
    meta: {
      title: '留言'
    },
    component: comment
  },


]
const router= new vuerouter({
  //配置路由和组件之间的关系
  routes,
  //将hash模式改成history模式
  mode:'history'
})

//前置守卫
router.beforeEach((to,from,next) => {
  console.log('+++');
  next()
})
//后置钩子
router.afterEach((to,from) => {
  console.log('----');
})
//3.将router对象传到vue实例

export default router
