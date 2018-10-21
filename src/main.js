import Vue from 'vue'

import { DEBUG_VUE_TIP } from './config'
import CommonComponents from './components'
import plugins from './plugins'
import router from './plugins/router'
import store from './plugins/store'
import App from './App.vue'

(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    // iOS设备，分辨率超过6的按照6来
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      if (clientWidth >= 375) {
        clientWidth = 375
      }
    } else {
      if (clientWidth >= 750) {
        clientWidth = 750
      }
    }
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

Vue.config.productionTip = DEBUG_VUE_TIP

Vue.use(CommonComponents)
Vue.use(plugins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
