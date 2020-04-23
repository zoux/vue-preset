export default [
  {
    path: '/b',
    name: 'b',
    meta: {
      title: 'b'
    },
    component: () => import(/* webpackChunkName: "b" */ '@/views/b/index.vue'),
    children: [
      {
        path: 'x',
        name: 'b-x',
        meta: {
          title: 'b-x'
        },
        component: () => import(/* webpackChunkName: "bx" */ '@/views/b/x.vue')
      }
    ]
  }
]
