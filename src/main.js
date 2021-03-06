
import Vue from 'vue'
import App from './App'

// 导入路由配置
import router from './router'

// 导入element-ui
import ElementUI from 'element-ui'
// 导入element-ui的样式文件
import 'element-ui/lib/theme-chalk/index.css'

// 导入自己的样式
import './assets/css/index.css'

// 安装插件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 关联
  router,
  components: { App },
  template: '<App/>'
})

