// 路由配置
import VueRouter from 'vue-router'

import About from '@/pages/About';
import Home from '@/pages/Home';

// 创建并导出一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
});
