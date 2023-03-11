// 路由配置
import VueRouter from 'vue-router'
// import NProgress from 'nprogress'  // 页面顶端进度条第三方库
// import 'nprogress/nprogress.css'

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
      name: 'GuanYu',
      path: '/about',
      component: About,
      meta: {title: '关于'}  // 路由元信息，可自定义
    },
    {
      name: 'ZhuYe',
      path: '/home',
      component: Home,
      meta: {title: '主页'},
      children: [
        {
          name: 'XiaoXi',
          path: 'message',  // 子路由不加斜杠 / 了
          component: Message,
          meta: {isAuth: true, title: '消息'},
          children: [
            {
              name: 'XiangQing',
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
          name: 'XinWen',
          path: 'news',
          component: () => import('../pages/News'),
          meta: {isAuth: true, title: '新闻'},
          /* 独享路由守卫 */
          beforeEnter: (to, from, next) => {
            if (to.meta.isAuth) {
              if (localStorage.getItem('school') === 'Laputa111') {
                next();  // 放行
              } else {
                alert('学校名不对，你没有权限！！！');
                // next({path: '/'});
              }
            } else {
              next();  // 放行
            }
          }
        }
      ]
    },
  ]
});

// 全局前置路由守卫 —— 每次路由切换之前，调用（包含初始化的时候）
/*
router.beforeEach((to, from, next) => {
  console.log(to, from)
  NProgress.start();
  // if (to.name === 'XinWen' || to.name === 'XiaoXi') {
  if (to.meta.isAuth) {
    if (localStorage.getItem('school') === 'Laputa') {
      next();  // 放行
    } else {
      alert('学校名不对，你没有权限！！！');
      next({path: '/'});
    }
  } else {
    next();  // 放行
  }
});
*/

// 全局后置路由守卫 —— 每次路由切换之后，调用
router.afterEach((to, from) => {
  document.title = to.meta.title || '默认默认';
  // NProgress.done();
});

export default router;
