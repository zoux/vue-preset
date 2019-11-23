import { API_DEFAULT_CONFIG } from '@/config'
import { getRequestParamsKey } from './utils'

export function getRequestItem (item, params, options) {
  const { method, url } = item
  const margeOptions = {
    ...API_DEFAULT_CONFIG,
    ...options
  }

  const requestItem = {
    headers: {},
    method,
    url: `${margeOptions.prefix}${url}`,
    [getRequestParamsKey(item)]: params,
    options: margeOptions
  }

  return requestItem
}
