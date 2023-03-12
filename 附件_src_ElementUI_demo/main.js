import Vue from 'vue';
// 按需引入
/* 相应的样式，已经经过babel.config.js帮你自动处理 */
import {Row, Button, Select, Option, DatePicker} from 'element-ui';
import App from './App.vue';

Vue.config.productionTip = false;

// 注册全局组件
Vue.component(Row.name, Row);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(DatePicker.name, DatePicker);

console.log('@@@', Button)

new Vue({
  render: (h) => h(App),
}).$mount('#app');
