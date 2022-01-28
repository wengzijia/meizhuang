import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import { Toast } from 'vant';

Vue.use(Toast);

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