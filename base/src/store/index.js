import Vue from 'vue'
import Vuex from 'vuex'

import { VUEX_DEFAULT_CONFIG } from '@/config'
import modules from './modules'

Vue.use(Vuex)

const storeInstance = new Vuex.Store({
  ...VUEX_DEFAULT_CONFIG,
  ...modules
})

export default storeInstance
