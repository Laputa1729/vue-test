<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudent">把学生名传给&lt;School&gt;组件</button>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },
  methods: {
    sendStudent() {
      // this.$bus.$emit('hello', this.name);
      // 发送方，发布
      PubSub.publish('hello', this.name);
    }
  }
}
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
