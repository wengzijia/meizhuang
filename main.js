import App from './App'

// #ifndef VUE3

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

import ClUni from "cl-uni";

Vue.use(ClUni, {
	// 进入业务单页时，页面栈只有一个，自定义导航左侧返回按钮跳转的路径
	homePage: "/"
});

// #ifdef H5
// import {Toast} from 'vant'

// Vue.use(Toast)

// #endif

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import Vue from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif