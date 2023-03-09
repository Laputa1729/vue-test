import Vue from 'vue';
import App from './App.vue';

// import { mixin, mixin2 } from '@/mixin';

Vue.config.productionTip = false;

// 全局混合
// Vue.mixin(mixin);
// Vue.mixin(mixin2);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
