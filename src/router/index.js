import { createRouter, createWebHistory } from 'vue-router';
import CounterView from '../views/CounterView.vue';
import NotFound from '../views/Notfound.vue';
import HomePage from '../views/HomePage.vue';
import RandomView from '../views/RandomView.vue';

const routes = [
  {
    path:'/',
    name:'home',
    component: HomePage,
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterView,
  },
  {
    path:'/random',
    name: 'random',
    component: RandomView,
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
