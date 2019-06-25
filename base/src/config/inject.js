import api from '@/services/api'
import axios from '@/services/axios'
import constants from '@/services/constants/config'
import request from '@/services/request'
import utils from '@/services/utils/config'
import { GLOBAL_AXIOS_ENABLE, GLOBAL_REQUEST_ENABLE, GLOBAL_API_ENABLE, GLOBAL_CONSTANTS_ENABLE, GLOBAL_UTILS_ENABLE } from '@/config'

function inject (Vue, name, module) {
  Object.defineProperty(Vue.prototype, name, {
    get () {
      return module
    }
  })
}

export default {
  install (Vue) {
    GLOBAL_AXIOS_ENABLE && inject(Vue, '$axios', axios)
    GLOBAL_REQUEST_ENABLE && inject(Vue, '$request', request)
    GLOBAL_API_ENABLE && inject(Vue, '$api', api)
    GLOBAL_CONSTANTS_ENABLE && inject(Vue, '$constants', constants)
    GLOBAL_UTILS_ENABLE && inject(Vue, '$utils', utils)
  }
}
