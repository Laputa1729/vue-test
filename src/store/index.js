// 创建Vuex中最为核心的store
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

// 准备actions
const actions = {};
// 准备mutations
const mutations = {};
// 准备states——存储数据
const state = {};

const store = new Vuex.Store({
    actions,
    mutations,
    state
});

export default store;

