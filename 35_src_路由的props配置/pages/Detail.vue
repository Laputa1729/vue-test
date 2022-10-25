<template>
    <div>
        <ul>
            <li>消息编号：{{ id }}</li>
            <li>消息标题：{{ title }}</li>
            <li>a: {{ a }}</li>
            <li>b: {{ b }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    props: ['id', 'title', 'a', 'b'],  // 从路由中把params参数接过来用
    mounted() {
        console.log(this.$route)
    }
}
</script>
