import { getRequestItem } from './getRequestItem'
import { requestStart, requestReturn } from './lifeCycle'

export default async function request (item, params, options) {
  const requestItem = getRequestItem(item, params, options)

  if (!await requestStart(requestItem)) {
    // eslint-disable-next-line
    return Promise.reject('abort by start')
  }

  // eslint-disable-next-line
  return await requestReturn(requestItem)
}
