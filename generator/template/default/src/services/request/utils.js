export const requestQueue = []

export function requestQueuePush (requestItem) {
  requestQueue.push(requestItem)
}

export function requestQueueSplice (requestItem) {
  requestQueue.splice(requestQueue.findIndex(item => item.url === requestItem.url), 1)
}

export function getRequestParamsKey (item) {
  return item.method === 'get' ? 'params' : 'data'
}
