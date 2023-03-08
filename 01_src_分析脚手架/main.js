import Vue from 'vue';  // 默认：运行时版本 vue.runtime.esm.js —— 去除了[模板解析器]，省得生产包还残留模板编译器
// import Vue from 'vue/dist/vue';  // 完整版 vue.js

import App from './App.vue';

Vue.config.productionTip = false;
/*
  关于不同版本的Vue：

    1.vue.js与vue.runtime.xxx.js的区别：
        (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
        (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有[模板解析器]。
            *也就是说，入口文件（main.js）创建vm不能写template

    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
      render函数接收到的createElement函数去指定具体内容。
*/

new Vue({
  render: (h) => h(App),
}).$mount('#app');

/*
  Tips:
    【箭头函数】
    () => { 语句 }
    (参数) => { 语句 }
    参数 => { 语句 }
    参数 => 表达式  <===>  function(参数) { return 表达式; }
*/
