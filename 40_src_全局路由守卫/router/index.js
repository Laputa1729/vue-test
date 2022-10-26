// 路由配置
import VueRouter from 'vue-router'

import About from '@/pages/About';
import Home from '@/pages/Home';
import News from '@/pages/News';
import Message from '@/pages/Message';
import Detail from '@/pages/Detail';

const router =  new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },

                            // props

                            // 1). 该对象中的有所key-value都会以props的形式传给组件，缺点：死数据
                            // props: { a: 1, b: 'hello' }

                            // 2). 值为布尔值
                            //     为true，则把路由占位符接收到的params参数，转换为props的形式传给组件
                            // props: true

                            // 3). 函数
                            props: function ($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
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

// 全局前置路由守卫————每次路由切换之前，调用
router.beforeEach((to, from, next) => {
    console.log(to, from)

    // if (to.name === 'xinwen' || to.name === 'xiaoxi') {
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'Laputa') {
            next();  // 放行
        } else {
            alert('学校名不对，你没有权限！');
        }
    } else {
        next();  // 放行
    }

});

// 全局后置路由守卫————每次路由切换之后，调用
router.afterEach((to, from) => {
    document.title = to.meta.title || '默认默认';
});

export default router;
