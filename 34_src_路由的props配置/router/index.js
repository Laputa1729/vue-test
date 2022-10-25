// 路由配置
import VueRouter from 'vue-router'

import About from '@/pages/About';
import Home from '@/pages/Home';
import News from '@/pages/News';
import Message from '@/pages/Message';
import Detail from '@/pages/Detail';

// 创建并导出一个路由器
export default new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',  // 声明占位符接收params参数
                            component: Detail,
                            // props

                            // 1). 该对象中的有所key-value都会以props的形式传给组件，缺点：死数据
                            // props: { a: 1, b: 'hello' }

                            // 2). 值为布尔值
                            //     为true，则把路由占位符接收到的params参数，转换为props的形式传给组件
                            // props: true

                            // 3). 函数
                            props: function ($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title,
                                    a: 1,
                                    b: 'hello'
                                }
                            }

                            // 补充，连续解构赋值，缺点：语义化不好，不推荐
                            // props({ params: { id, title } }) {
                            //     return { id, title }
                            // }
                        }
                    ]
                }
            ]
        },
    ]
});
