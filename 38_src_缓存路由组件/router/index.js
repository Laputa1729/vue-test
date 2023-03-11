// 路由配置
import VueRouter from 'vue-router'

import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

// 创建并导出一个路由器
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'message',  // 子路由不加斜杠 / 了
          component: Message,
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',  // 声明接收params参数
              component: Detail,
              // props的3种写法

              // 1). 该对象中的有所key-value都会以props的形式传给Detail组件，缺点：死数据
              // props: {a: 1, b: 'hello'}

              // 2). 值为布尔值
              //     为true，则把路由占位符接收到的[params]参数，转换为props的形式传给Detail组件
              // props: true

              // 3). 函数（query/params都行），Detail组件就能在props中接收到参数了
              props: function ($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title,
                  a: 666,
                  b: 'hello'
                }
              }
            }
          ]
        },
        {
          path: 'news',
          component: News,
        }
      ]
    },
  ]
});

export default router;
