// [求和]相关配置
const counterOptions = {
  namespaced: true,  // 开启命名空间，配合...mapState(['sum', 'school', 'subject'])使用
  // $store.dispatch() -> actions
  actions: {
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
  },
  // $store.commit() -> mutations
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
  }
};

export default counterOptions;
