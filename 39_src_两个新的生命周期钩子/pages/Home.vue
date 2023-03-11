<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- replace属性开启，替换当前历史记录 -->
          <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
    </div>
    <hr>
    <!-- 缓存路由组件，include按需缓存 -->
    <!-- <keep-alive :include="['News', 'Message']"> -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // console.log('Home挂载完毕，', this);
  }
}
</script>
