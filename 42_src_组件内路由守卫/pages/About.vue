<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  beforeDestroy() {
    // console.log('About组件即将被销毁')
  },

  /*
  * 【<About/>组件独有路由守卫】
  *
  * 有种情况，在别的页面 import 使用 <About/>
  * 【组件内路由守卫】就没用了
  * 必须经路由进入才会触发
  * */
  // 通过路由规则，进入该组件，调用
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
  // 通过路由规则，离开该组件，调用
  beforeRouteLeave(to, from, next) {
    next();
  }
}
</script>
