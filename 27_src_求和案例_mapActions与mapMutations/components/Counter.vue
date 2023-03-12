<template>
  <div>
    <!--
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h3>当前求和放大10倍：{{ $store.getters.bigSum }}</h3>
    <h3>我在{{ $store.state.school }}，学习 “{{ $store.state.subject }}”</h3>
    -->
    <h1>当前求和为：{{ mySum }}</h1>
    <h3>当前求和放大10倍：{{ bigSum }}</h3>
    <h3>我在{{ mySchool }}，学习 “{{ mySubject }}”</h3>
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
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'Counter',
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    // 借助mapState生成计算属性，读取state中的数据
    // ①对象展开运算符，有点合并对象的意思
    ...mapState({
      mySum: 'sum',
      mySchool: 'school',
      mySubject: 'subject',
    }),
    // ②数组写法
    // ...mapState(['sum', 'school', 'subject']),

    // 借助mapGetters生成计算属性，读取getters中的数据
    // ...mapGetters({bigSum: 'bigSum'}),
    ...mapGetters(['bigSum'])
  },
  mounted() {
    // console.log('<Counter/>', this)
    // console.log('@Store: ', this.$store)
  },
  methods: {
    /*
    increment() {
      // this.$store.dispatch('jia', this.n);
      /!* 简单的逻辑，可以绕过actions，直接调用commit联系mutations *!/
      this.$store.commit('JIA', this.n);
    },
    decrement() {
      // this.$store.dispatch('jian', this.n);
      this.$store.commit('JIAN', this.n);
    },
    */

    ...mapMutations({
      increment: 'JIA',
      decrement: 'JIAN'
    }),
    // ...mapMutations(['JIA', 'JIAN']),

    /* **************************************************************** */

    /*
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n);
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n);
    },
    */

    ...mapActions({
      incrementOdd: 'jiaOdd',
      incrementWait: 'jiaWait'
    }),
    // ...mapActions(['jiaOdd', 'jiaWait']),
  }
}
</script>

<style>
button {
  margin-left: 6px;
}
</style>
