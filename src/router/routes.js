const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/me',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Me.vue') }
    ]
  },
  {
    path: '/john',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/John.vue') }
    ]
  },
  {
    path: '/image',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Image.vue') }
    ]
  },
  {
    path: '/googledoc',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Googledoc.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
