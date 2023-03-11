// 路由配置
import VueRouter from 'vue-router'

import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

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
              path: 'detail',
              component: Detail,
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
