// Counter组件相关
const counterOptions = {
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
};

export default counterOptions;
