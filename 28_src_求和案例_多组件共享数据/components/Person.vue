<template>
  <div style="background-color: pink;">
    <div>我是&lt;Person/&gt;</div>
    <h1>人员列表</h1>
    <h3 style="color: red;">拿到了&lt;Counter/&gt;的求和：{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model.trim="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';

export default {
  name: 'Person',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
    // ...mapState(['personList'])
  },
  methods: {
    add() {
      if (!this.name) return;
      const personObj = {id: nanoid(), name: this.name};
      /* 逻辑简单，就直接绕过actions了，$store.commit() -> mutations */
      this.$store.commit('ADD_PERSON', personObj);
      this.name = '';
    }
  }
}
</script>
