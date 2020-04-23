import createLogger from 'vuex/dist/logger'

// 当前运行环境
export const NODE_ENV = process.env.NODE_ENV || 'production'
export const NODE_ENV_IS_PRODUCTION = NODE_ENV === 'production'

// router 默认配置
export const ROUTER_DEFAULT_CONFIG = {
  mode: 'hash', // 配置路由模式
  base: '/', // 应用的基路径
  linkActiveClass: 'router-link-active', // 链接激活时使用的 class
  linkExactActiveClass: 'router-link-exact-active' // 链接被精确匹配激活时使用的 class
}

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: !NODE_ENV_IS_PRODUCTION, // 在开发环境进入严格模式，mutation 以外修改 state 都会抛出错误
  plugins: !NODE_ENV_IS_PRODUCTION // 在开发环境生成状态快照
    ? [createLogger({})]
    : []
}

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 60000
}

// API 默认配置
export const API_DEFAULT_CONFIG = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  isOpenErrorIntercept: true, // 是否开启 axios 错误拦截
  isNotAllowMultipleRequest: true, // 是否禁止同类型请求并发
  multipleRequestGapTime: 5000 // 禁止同类型请求并发功能启用时，判定为同类型请求的间隔时间
}

// 全局注入设置
export const GLOBAL_AXIOS_ENABLE = true
export const GLOBAL_REQUEST_ENABLE = true
export const GLOBAL_API_ENABLE = true
export const GLOBAL_CONSTANTS_ENABLE = true
export const GLOBAL_UTILS_ENABLE = true

// 请求打印配置
export const CONSOLE_REQUEST_ENABLE = !NODE_ENV_IS_PRODUCTION && false // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = !NODE_ENV_IS_PRODUCTION && true // 开启响应参数打印
