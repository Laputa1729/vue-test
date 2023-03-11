<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--<a class="list-group-item" href="./about.html">About</a>-->
          <!--<a class="list-group-item active" href="./home.html">Home</a>-->

          <!-- 这里router-link最终被转化为<a></a>，若是其他标签控制的导航：<button></button>……，就要用到编程式路由导航 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由视图 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>

    <!--
        /pages         目录放【路由组件】
        /components    目录放【一般组件】
    -->

  </div>
</template>

<script>
import Banner from './components/Banner';

export default {
  name: 'App',
  components: {Banner}
}
</script>

