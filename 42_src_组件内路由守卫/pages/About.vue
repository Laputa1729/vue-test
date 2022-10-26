<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: 'About',

    // 通过路由规则进入该组件，调用
    beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
            if (localStorage.getItem('school') === 'Laputa') {
                next();  // 放行
            } else {
                alert('学校名不对，你没有权限！');
            }
        } else {
            next();  // 放行
        }
    },
    // 通过路由规则离开该组件，调用
    beforeRouteLeave(to, from, next) {
        next();
    }
}
</script>

<style>

</style>
