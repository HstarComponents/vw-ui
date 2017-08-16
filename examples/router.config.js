import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {
  HomePage,
  ButtonDemoPage
} from './pages';

const routes = [
  { path: '', component: HomePage },
  { path: '/button', component: ButtonDemoPage }
];

export const router = new VueRouter({
  mode: 'hash',
  routes
});
