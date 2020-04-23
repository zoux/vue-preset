export default [
  {
    path: '/',
    name: 'a',
    meta: {
      title: 'a'
    },
    component: () => import(/* webpackChunkName: "a" */ '@/views/a/index.vue')
  }
]
