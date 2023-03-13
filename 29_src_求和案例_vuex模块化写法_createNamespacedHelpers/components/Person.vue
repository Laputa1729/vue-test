<template>
  <div style="background-color: pink;">
    <div>我是&lt;Person/&gt;</div>
    <h1>人员列表</h1>
    <h3 style="color: red;">拿到了&lt;Counter/&gt;的求和：{{ sum }}</h3>
    <h3>第一个人的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model.trim="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonFromServer">从服务器拿一个人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
// 拿到A模块的所有配置
const {
  mapState: mapStateFromModuleA,
  mapGetters: mapGettersFromModuleA,
  mapActions: mapActionsFromModuleA,
  mapMutations: mapMutationsFromModuleA,
} = createNamespacedHelpers('aaa');
// 拿到B模块的所有配置
const {
  mapState: mapStateFromModuleB,
  mapGetters: mapGettersFromModuleB,
  mapActions: mapActionsFromModuleB,
  mapMutations: mapMutationsFromModuleB,
} = createNamespacedHelpers('bbb');

import {nanoid} from 'nanoid';

export default {
  name: 'Person',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapStateFromModuleA(['sum']),
    ...mapStateFromModuleB(['personList']),
    ...mapGettersFromModuleB(['firstPersonName']),

    /*
    personList() {
      return this.$store.state.bbb.personList;
    },
    // ...mapState(['personList']),
    firstPersonName() {
      return this.$store.getters['bbb/firstPersonName'];
    },
    sum() {
      return this.$store.state.aaa.sum;
    },
    */
  },
  methods: {
    ...mapActionsFromModuleB({
      addPersonWang: 'addPersonWang',
      addPersonFromServer: 'addPersonServer',
    }),
    ...mapMutationsFromModuleB(['ADD_PERSON']),

    // 添加的person对象要传给actions/mutations
    add() {
      if (!this.name) return;
      const personObj = {id: nanoid(), name: this.name};
      /* 逻辑简单，就直接绕过actions了，$store.commit() -> mutations */
      // this.$store.commit('bbb/ADD_PERSON', personObj);
      this.ADD_PERSON(personObj);
      this.name = '';
    },
    addWang() {
      if (!this.name) return;
      const personObj = {id: nanoid(), name: this.name};
      // $store.dispatch() -> actions
      // this.$store.dispatch('bbb/addPersonWang', personObj);
      this.addPersonWang(personObj);
      this.name = '';
    },

    /*
    add() {
      if (!this.name) return;
      const personObj = {id: nanoid(), name: this.name};
      /!* 逻辑简单，就直接绕过actions了，$store.commit() -> mutations *!/
      this.$store.commit('bbb/ADD_PERSON', personObj);
      this.name = '';
    },
    addWang() {
      if (!this.name) return;
      const personObj = {id: nanoid(), name: this.name};
      // $store.dispatch() -> actions
      this.$store.dispatch('bbb/addPersonWang', personObj);
      this.name = '';
    },
    addPersonFromServer() {
      this.$store.dispatch('bbb/addPersonServer');
    }
    */
  }
}
</script>
