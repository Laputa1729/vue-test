<template>
  <div style="background-color: skyblue;">
    <div>我是&lt;Counter/&gt;</div>
    <!--
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h3>当前求和放大10倍：{{ $store.getters.bigSum }}</h3>
    <h3>我在{{ $store.state.school }}，学习 “{{ $store.state.subject }}”</h3>
    -->
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习 “{{ subject }}”</h3>
    <h3 style="color: red;">我拿到了&lt;Person/&gt;的总人数：{{ personList.length }}</h3>
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
// 辅助简化代码
import {createNamespacedHelpers} from 'vuex';

const {mapActions, mapMutations, mapState, mapGetters} = createNamespacedHelpers('aaa');
// const moduleBHelper = createNamespacedHelpers('bbb');
// 也可以
const {mapState: mapStateFromModuleB} = createNamespacedHelpers('bbb');

export default {
  name: 'Counter',
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    ...mapState(['sum', 'school', 'subject']),

    // ...moduleBHelper.mapState(['personList']),
    // 也可以
    ...mapStateFromModuleB(['personList']),

    ...mapGetters(['bigSum']),

    // 借助mapState生成计算属性，读取state中的数据
    // ①对象展开运算符，有点合并对象的意思
    // ...mapState('a', {
    //   mySum: 'sum',
    //   mySchool: 'school',
    //   mySubject: 'subject',
    //   personList: 'personList',  // ★★★用了mapState，从vuex里读取数据，就如同接收props一样简单。
    // }),
    // ②数组写法
    // ...mapState('a', ['sum', 'school', 'subject']),
    // ...mapState('b', ['personList']),

    // 借助mapGetters生成计算属性，读取getters中的数据
    // ...mapGetters('a', {bigSum: 'bigSum'}),
    // ...mapGetters('a', ['bigSum'])
  },
  methods: {
    ...mapActions({
      incrementOdd: 'jiaOdd',
      incrementWait: 'jiaWait'
    }),
    ...mapMutations({
      increment: 'JIA',
      decrement: 'JIAN'
    }),

    // ...mapMutations('a', {
    //   increment: 'JIA',
    //   decrement: 'JIAN'
    // }),
    // ...mapActions('a', {
    //   incrementOdd: 'jiaOdd',
    //   incrementWait: 'jiaWait'
    // }),
  },
  mounted() {
    console.log('$Store: ', this.$store)
  },
}
</script>

<style>
button {
  margin-left: 6px;
}
</style>
