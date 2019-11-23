import request from '@/services/request'
import api from '@/services/api'

export default {
  state: {
    common: 1
  },
  getters: {},
  mutations: {
    SET_COMMON: (state, payload) => {
      const { length } = payload
      state.common += length
    }
  },
  actions: {
    UPDATE_COMMON: async ({ commit }, payload) => {
      const { limit } = payload
      const params = { limit }
      try {
        const { data: { data } } = await request(api.topics, params)
        commit('SET_COMMON', { length: data.length })
      } catch (e) {
        console.error('因为 isNotAllowMultipleRequest，并发的多余请求被拦截')
      }
    }
  }
}
