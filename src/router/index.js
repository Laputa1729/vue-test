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
                            component: Detail
                        }
                    ]
                }
            ]
        },
    ]
});