<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍：{{ bigSum }}</h3>
        <h3>我在{{ school }}，学习{{ subject }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Counter',
    data() {
        return {
            n: 1,
        }
    },
    computed: {
        // 用计算属性优化vuex的写法

        /* sum() {
            return this.$store.state.sum;
        },
        school() {
            return this.$store.state.school;
        },
        subject() {
            return this.$store.state.subject;
        }, */

        // 借助mapState生成计算属性，读取state中的数据
        // ①对象展开运算符，有点合并对象的意思
        /* ...mapState({
            sum: 'sum',
            school: 'school',
            subject: 'subject',
        }), */
        // ②数组写法
        ...mapState(['sum', 'school', 'subject']),


        /* ******************************** */
        /* bigSum() {
            return this.$store.getters.bigSum;
        }, */

        // 借助mapGetters生成计算属性，读取getters中的数据
        // ...mapGetters({ bigSum: 'bigSum' }),
        ...mapGetters(['bigSum'])
    },
    methods: {
        increment() {
            this.$store.dispatch('jia', this.n);
        },
        decrement() {
            this.$store.dispatch('jian', this.n);
        },
        incrementOdd() {
            this.$store.dispatch('jiaOdd', this.n);
        },
        incrementWait() {
            this.$store.dispatch('jiaWait', this.n);
        },
    },
    mounted() {
        const x = mapState({
            sum: 'sum',
            school: 'school',
            subject: 'subject',
        });
        console.log(x)
    }
}
</script>

<style>
button { margin-left: 6px; }
</style>
