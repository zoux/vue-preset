import Vue from 'vue'

import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import plugins from './plugins'
import CommonComponents from './components'
import { DEBUG_VUE_TIP } from './config'

window.GLOBAL = {}

Vue.use(plugins)
Vue.use(CommonComponents)
Vue.config.productionTip = DEBUG_VUE_TIP

window.GLOBAL.APP = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
