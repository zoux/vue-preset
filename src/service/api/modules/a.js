export default {
  topics: {
    desc: 'cnode 主题列表',
    method: 'get',
    url: '/api/topics',
    // 可以切换 url 来结合 closeErrorIntercept 查看默认错误处理
    // url: '/api/topic',
    defaultParams: {
      page: 1,
      limit: 10
    }
  }
}
