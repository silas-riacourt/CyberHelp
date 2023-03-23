// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'default',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        // eslint-disable-next-line import/no-unresolved
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        // eslint-disable-next-line import/no-unresolved
        component: () => import(/* webpackChunkName: "home" */ '@/views/About.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        // eslint-disable-next-line import/no-unresolved
        component: () => import(/* webpackChunkName: "home" */ '@/views/Contact.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
