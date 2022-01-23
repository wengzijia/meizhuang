import App from './App'

// #ifndef VUE3
import Vue from 'vue'
<<<<<<< HEAD

=======
>>>>>>> detail
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
<<<<<<< HEAD

import { createSSRApp } from 'vue'

=======
import { createSSRApp } from 'vue'
>>>>>>> detail
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif