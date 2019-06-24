import Vue from 'vue'

import injectComponents from '@/components/inject'
import injectInstanceProperty from '@/config/inject'
import router from '@/router'
import store from '@/store'
import App from '@/App'

Vue.use(injectComponents)
Vue.use(injectInstanceProperty)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
