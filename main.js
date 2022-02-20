import App from './App'

// #ifndef VUE3

import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
import ClUni from "cl-uni";

Vue.use(ClUni, {
	// 进入业务单页时，页面栈只有一个，自定义导航左侧返回按钮跳转的路径
	homePage: "/"
});


const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3


import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif