// 创建Vuex中最为核心的store
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

// 准备actions
const actions = {
    jia: function(context, value) {
        context.commit('JIA', value);
    },
    jian(context, value) {
        context.commit('JIAN', value);
    },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value);
        }, 1000);
    },
};
// 准备mutations
const mutations = {
    JIA(state, value) {
        state.sum += value;
    },
    JIAN(state, value) {
        state.sum -= value;
    },
    ADD_PERSON(state, value) {
        console.log('mutations这的ADD_PERSON被调用了')
        state.personList.unshift(value);
    }
};
// 类似于[数据源]准备states——存储数据
const state = {
    sum: 0,
    school: 'Laputa',
    subject: '刑侦',
    personList: [
        { id: '001', name: '张三' }
    ]
};
// 类似于[computed]准备getters——state数据加工
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
};

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});

export default store;

