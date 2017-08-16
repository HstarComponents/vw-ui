import Vue from 'vue';
import { router } from './router.config';
import App from './App.vue';

import VwUI from '../src';
Vue.use(VwUI);

import 'lodash';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
