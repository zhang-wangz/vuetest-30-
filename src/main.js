import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

Vue.use(VueResource); //官方的插件使用方法
Vue.use(VueRouter);

Vue.config.productionTip = false
//  创建组件
import Home from './components/Home.vue';
import Header from './components/Header';

//配置路由
const routes = [
  { path: '/home', component: Home },
  { path: '/Header', component: Header },
  {path: '*', component: Home } //如果没有设置路由的话，就默认跳转home
]



//实例化route
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
