import axios from '@/services/axios'
import { API_DEFAULT_CONFIG } from '@/config'
import API_SERVICE from './modules'

const API = {}

const {
  prefix = '',
  errorIntercept = false
} = API_DEFAULT_CONFIG

Object.keys(API_SERVICE).forEach(key => {
  const { method, url, defaultParams = {} } = API_SERVICE[key]
  API[key] = (
    params = {},
    { closeErrorIntercept } = {}
  ) => {
    const axiosConfig = {
      method,
      url: `${prefix}${url}`,
      [method === 'get' ? 'params' : 'data']: { ...defaultParams, ...params },
      option: {
        errorIntercept,
        closeErrorIntercept
      }
    }
    return axios(axiosConfig)
  }
  Object.assign(API[key], API_SERVICE[key])
})

export default API
