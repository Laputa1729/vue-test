import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.x = {a: 1, b: 2};  // 可供vm和所有vc访问

new Vue({
  el: '#app',
  render: (h) => h(App),
  // 标准写法：
  beforeCreate() {
    Vue.prototype.$bus = this;  // 安装全局事件总线，$bus就是当前应用的vm
  }
})
