// 插件
export default {
    // 接收到Vue构造函数
    install(Vue, x, y, z) {
        console.log('@@@install~~~', x, y, z);

        // 可以配很多全局性质的东西, 全局复用
        // Vue.filter('myFilter', function () {});
        // Vue.directive('myDirective', {});
        // Vue.mixin('myMixin', {});

        // 给Vue原型上添加一个方法，vm和vc都能用了
        Vue.prototype.hello = () => {
            alert('你好啊！');
        };
    },
};
