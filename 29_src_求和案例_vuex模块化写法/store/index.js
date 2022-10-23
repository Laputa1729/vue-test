// 创建Vuex中最为核心的store
import Vue from 'vue';
import Vuex from 'vuex'

// 分门别类，模块化配合命名空间
import counterOptions from './counter';
import personOptions from './person';

Vue.use(Vuex);

// Counter组件相关
/* const counterOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        school: 'Laputa',
        subject: '刑侦',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    },
}; */
// Person组件相关
/* const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value);
            } else {
                alert('你加这个不姓王！');
            }
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations这的ADD_PERSON被调用了')
            state.personList.unshift(value);
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    },
}; */

const store = new Vuex.Store({
    modules: {
        counterAbout: counterOptions,
        personAbout: personOptions
    }
});

export default store;
