import Vue from 'vue';
import App from './App.vue';

import vueResource from 'vue-resource'

Vue.config.productionTip = false;

// 使用vue-resource插件，替代axios
Vue.use(vueResource);

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;  // 安装全局事件总线
  }
}).$mount('#app');
