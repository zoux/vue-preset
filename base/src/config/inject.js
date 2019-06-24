import api from '@/services/api'
import axios from '@/services/axios'
import constants from '@/services/constants/config'
import utils from '@/services/utils/config'
import { GLOBAL_API_ENABLE, GLOBAL_AXIOS_ENABLE, GLOBAL_CONSTANTS_ENABLE, GLOBAL_UTILS_ENABLE } from '@/config'

function inject (Vue, name, module) {
  Object.defineProperty(Vue.prototype, name, {
    get () {
      return module
    }
  })
}

export default {
  install (Vue) {
    GLOBAL_API_ENABLE && inject(Vue, '$api', api)
    GLOBAL_AXIOS_ENABLE && inject(Vue, '$axios', axios)
    GLOBAL_CONSTANTS_ENABLE && inject(Vue, '$constants', constants)
    GLOBAL_UTILS_ENABLE && inject(Vue, '$utils', utils)
  }
}
