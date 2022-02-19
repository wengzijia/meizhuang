import App from './App'

// #ifndef VUE3

import Vue from 'vue'
import store from './store/index'
import uView from '@/uni_modules/uview-ui'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

Vue.use(uView)


const app = new Vue({
	store,
    ...App,
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