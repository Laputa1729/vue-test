<template>
  <div class="container">
    <Category title="食物">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="https://www.baidu.com" target="_blank">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div slot="footer" class="foot-box">
        <a href="https://www.baidu.com" target="_blank">单机游戏</a>
        <a href="https://www.baidu.com" target="_blank">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!--
      <div slot="footer" class="foot-box">
        <a href="https://www.baidu.com" target="_blank">经典</a>
        <a href="https://www.baidu.com" target="_blank">热门</a>
        <a href="https://www.baidu.com" target="_blank">推荐</a>
      </div>
      <h4 slot="footer">欢迎观影。</h4>
      -->
      <template v-slot:footer>
        <div class="foot-box">
          <a href="https://www.baidu.com" target="_blank">经典</a>
          <a href="https://www.baidu.com" target="_blank">热门</a>
          <a href="https://www.baidu.com" target="_blank">推荐</a>
        </div>
        <h4>欢迎观影。</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
  name: 'App',
  components: {Category},
  data() {
    return {
      // foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      // films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《Laputa》']
    }
  },
}
</script>

<style>
.container, .foot-box {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
