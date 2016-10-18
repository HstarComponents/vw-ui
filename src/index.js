import Button from '../packages/button/index.js';
const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Button.name, Button);
  Vue.use(InfiniteScroll);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '0.0.1',
  Button
};
