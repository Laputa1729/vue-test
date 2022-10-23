<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍：{{ bigSum }}</h3>
        <h3>我在{{ school }}，学习{{ subject }}</h3>
        <h3 style="color: red;">拿到了Person的人数：{{ personList.length }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Counter',
    data() {
        return {
            n: 1,
        }
    },
    computed: {
        // 借助mapState生成计算属性，读取state中的数据
        // 数组写法
        ...mapState('counterAbout', ['sum', 'school', 'subject']),
        ...mapState('personAbout', ['personList']),

        // 借助mapGetters生成计算属性，读取getters中的数据
        ...mapGetters('counterAbout', ['bigSum'])
    },
    methods: {
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
        // 对象展开运算符
        ...mapMutations('counterAbout', {
            increment: 'JIA',
            decrement: 'JIAN'
        }),

        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions
        ...mapActions('counterAbout', {
            incrementOdd: 'jiaOdd',
            incrementWait: 'jiaWait'
        })
    },
    mounted() {
        console.log(this.$store);
    },
}
</script>

<style>
button { margin-left: 6px; }
</style>
