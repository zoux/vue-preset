const load = viewName => () => import(`@/views/${viewName}.vue`)

export default [
  {
    path: '/b',
    name: 'b',
    meta: {
      title: 'b'
    },
    component: load('b/index'),
    children: [
      {
        path: 'x',
        name: 'b-x',
        meta: {
          title: 'b-x'
        },
        component: load('b/x')
      }
    ]
  }
]
