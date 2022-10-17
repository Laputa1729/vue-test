// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false;

// Vue.prototype.x = { a: 1, b: 2 };  // 示例：所有this都能访问到

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    // 标准写法：
    beforeCreate() {
        Vue.prototype.$bus = this;  // 安装全局事件总线，$bus就是当前应用的vm
    }
});
