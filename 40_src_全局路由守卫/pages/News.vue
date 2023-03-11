<template>
  <div>
    <ul>
      <li :style="{ color: 'red', opacity: opacity }">欢迎学习Vue</li>
      <li>news001<input type="text"></li>
      <li>news002<input type="text"></li>
      <li>news003<input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1
    }
  },
  /*
  mounted() {
    this.timer = setInterval(() => {
      this.opacity -= .01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  beforeDestroy() {
    console.log('<News/>即将被销毁……');
    clearInterval(this.timer);
  }
  */

  /* 路由组件独有的生命周期钩子 */
  activated() {
    // 组件激活
    this.timer = setInterval(() => {
      this.opacity -= .01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log('<News/>失活了……');
    clearInterval(this.timer);
  }
}
</script>
