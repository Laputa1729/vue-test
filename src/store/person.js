// [人员]相关配置
import axios from "axios";
import {nanoid} from "nanoid";

const personOptions = {
  namespaced: true,  // 开启命名空间，配合...mapState('b', ['personList'])使用
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value);
      } else {
        alert('这人不姓王！');
      }
    },
    // 发起请求
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=fart').then(
        response => {
          context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
        },
        error => {
          console.log(error.message);
        }
      )
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.unshift(value);
    }
  },
  state: {
    personList: [
      {id: '001', name: '张三'}
    ]
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    }
  }
};

export default personOptions;
