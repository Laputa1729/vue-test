// store
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*
* actions里写逻辑判断
* mutations里数据写入
* */

// $store.dispatch() -> action 响应组件中的动作（比如：异步请求放到actions里）
const actions = {
  /*
  jia(context, value) {
    context.commit('JIA', value);
  },
  jian(context, value) {
    context.commit('JIAN', value);
  },
  */

  /*
  * action里，上下文（context）给你的作用：多个action帮忙处理逻辑
  * 可以继续调context.dispatch()，层层自由调用需要的方法
  */
  jiaOdd(context, value) {
    console.log('处理逻辑 Step0……jiaOdd')
    context.dispatch('demo1', value);
  },
  demo1(context, value) {
    console.log('处理逻辑 Step1……demo1')
    context.dispatch('demo2', value);
  },
  demo2(context, value) {
    console.log('处理逻辑 Step2……demo2')
    if (context.state.sum % 2 !== 0) {
      context.commit('JIA', value);
    }
  },

  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value);
    }, 1000);
  }
};
// $store.commit() -> mutation 操作数据（state）
const mutations = {
  JIA(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
};
// 存储数据
const state = {
  sum: 0,
  school: 'Laputa',
  subject: '刑侦',
};

// 加工state里的数据，类似[computed]，全组件都能用了
const getters = {
  bigSum(state) {
    return state.sum * 10;
  }
};

// 创建一个 store 实例
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});

export default store;
