import Vue from 'vue';
import App from './App.vue';

import plugins from '@/plugins';

Vue.config.productionTip = false;

// 安装插件
Vue.use(plugins, 1, 2, 3);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
