import { CONSOLE_RESPONSE_ENABLE } from '@/config'
import axios from '@/services/axios'
import { requestQueue, getRequestParamsKey, requestQueuePush, requestQueueSplice } from './utils'

export function requestStart (requestItem) {
  const { isNotAllowMultipleRequest } = requestItem.options

  if (
    isNotAllowMultipleRequest &&
    requestQueue.find(item => item.url === requestItem.url &&
      JSON.stringify(item[getRequestParamsKey(item)]) === JSON.stringify(requestItem[getRequestParamsKey(requestItem)]))
  ) {
    return false
  }

  requestQueuePush(requestItem)
  return true
}

export async function requestReturn (requestItem) {
  const { isUseStorage } = requestItem.options
  let storageKey = ''

  if (isUseStorage) {
    storageKey = requestItem.url + JSON.stringify(requestItem[getRequestParamsKey(requestItem)])
    const storageData = localStorage.getItem(storageKey)
    if (storageData) {
      const res = JSON.parse(storageData)
      // eslint-disable-next-line
      CONSOLE_RESPONSE_ENABLE && console.info('responseSuccess by storage', '\n', res)
      requestQueueSplice(requestItem)
      return res
    }
  } else {
    let res
    try {
      res = await axios(requestItem)
      if (isUseStorage && storageKey) localStorage.setItem(storageKey, JSON.stringify(res))
      requestQueueSplice(requestItem)
      return res
    } catch (err) {
      requestQueueSplice(requestItem)
      throw err
    }
  }
}
