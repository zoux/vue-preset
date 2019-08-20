const load = viewName => () => import(`@/views/${viewName}.vue`)

export default [
  {
    path: '/',
    name: 'a',
    meta: {
      title: 'a'
    },
    component: load('a/index')
  }
]
