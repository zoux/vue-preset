import axios from '@/services/axios'
import { requestQueuePush, requestQueueSplice, checkAllowMultipleRequest } from './utils'

export function requestStart (requestItem) {
  const { isNotAllowMultipleRequest } = requestItem.options

  if (isNotAllowMultipleRequest && !checkAllowMultipleRequest(requestItem)) {
    return false
  }

  requestQueuePush(requestItem)
  return true
}

export async function requestReturn (requestItem) {
  try {
    const res = await axios(requestItem)
    requestQueueSplice(requestItem)
    return res
  } catch (err) {
    requestQueueSplice(requestItem)
    throw err
  }
}
