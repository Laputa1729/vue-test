<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: 'Laputa',
      address: '北京',
    }
  },
  mounted() {
    // 接收方
    this.$bus.$on('hello', (data) => {
      console.log('拿到了<Student/>给的：', data)
    });
  },
  beforeDestroy() {
    this.$bus.$off('hello');  // 用完记得解绑自定义事件，因为Vue.prototype.$bus永远存在，所以要手动解绑
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
