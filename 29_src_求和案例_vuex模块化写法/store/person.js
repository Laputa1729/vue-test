// Person组件相关
import axios from 'axios'
import { nanoid } from 'nanoid'

const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value);
            } else {
                alert('你加这个不姓王！');
            }
        },
        // 发起请求
        addPersonServer(context)  {
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
            console.log('mutations 这儿的 ADD_PERSON 被调用了')
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
};

export default personOptions;
