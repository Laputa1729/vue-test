// 分门别类，vuex模块化写法
import Vue from 'vue';
import Vuex from 'vuex';

import counterOptions from '../store/counter';
import personOptions from '../store/person';

Vue.use(Vuex);

// 创建一个 store 实例
const store = new Vuex.Store({
  modules: {
    a: counterOptions,
    b: personOptions,
  }
});

export default store;
