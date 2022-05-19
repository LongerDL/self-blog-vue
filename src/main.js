//入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/globle.less";
import router from "@/router/index.js";
import showMessage from "./utils/showMessage";
import store from "./store";
Vue.prototype.$showMessage = showMessage;

//关闭开发环境时的依赖
Vue.config.productionTip = false;
//全局注册指令
import vLoading from './components/directives/loading.js'
Vue.directive('loading',vLoading)

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//测试
import * as blogApi from "./api/blog";
// blogApi.getBlogTypes().then(r =>{
//   console.log("blog分类",r)
// })

// blogApi.getBlogs().then(r =>{
//   console.log("blog",r)
// })

// blogApi.getBlog("111").then((r) => {
//   console.log(r);
// });

// blogApi
//   .postComment({
//     nickname: "昵称",
//     content: "评论内容，纯文本",
//     blogId: "123",
//   })
//   .then((r) => {
//     console.log(r);
//   });

// blogApi.getComments("123123").then((r) => {
//   console.log(r);
// });
