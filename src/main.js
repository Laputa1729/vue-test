import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import router from '@/router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
    render: (h) => h(App),
    router: router
}).$mount('#app');

var a = {
    name: 'xiangqing',
    path: 'detail/:id',
    component: Detail,

    //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
    // props:{a:900}

    //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
    // props:true

    //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
    props(route) {
        return {
            id: route.query.id,
            title: route.query.title
        }
    }
}

function beforeEnter(to, from, next) {
    console.log('beforeEnter', to, from)
    if (to.meta.isAuth) { //判断当前路由是否需要进行权限控制
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('暂无权限查看')
            // next({name:'guanyu'})
        }
    } else {
        next()
    }
}
