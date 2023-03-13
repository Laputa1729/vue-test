import Vue from 'vue';
import App from './App.vue';
import store from './store';
/*
* import语句执行优先级最高
* 故，Vue.use(Vuex)放到'./store'中
* */

Vue.config.productionTip = false;

const vm = new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

