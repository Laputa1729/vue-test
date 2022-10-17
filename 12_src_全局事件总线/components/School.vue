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
            address: 'Sky',
        }
    },
    mounted() {
        // 接收方
        this.$bus.$on('hello', (data) => {
            console.log('我是School组件，收到了数据：', data);
        });
    },
    beforeDestroy() {
        // 解绑自定义事件，因为Vue.prototype.$bus永远存在，所有要手动解绑
        this.$bus.$off('hello');
    }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>