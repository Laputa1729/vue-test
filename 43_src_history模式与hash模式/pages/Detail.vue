<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'title'],  // 接收到routerJS里配的props
  mounted() {
    // console.log(this.$route);
  }
}
</script>
