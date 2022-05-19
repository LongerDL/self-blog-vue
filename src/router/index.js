import VueRouter from 'vue-router'
import routes from './routes'
import Vue from 'vue'

Vue.use(VueRouter)
const router = new VueRouter({
  //配置路由
  routes,
  //三种路由模式:hash,history,abstract
  mode:"history"
})

export default router