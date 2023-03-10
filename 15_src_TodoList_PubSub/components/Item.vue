<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js';

export default {
  name: 'Item',
  props: ['todo'],
  methods: {
    handleCheck(id) {
      this.$bus.$emit('checkTodo', id);
    },
    handleDelete(id) {
      if (confirm('确定要删除吗？')) {
        // 3种方式
        // this.deleteTodo(id);  // 父传子的函数
        // this.$bus.$emit('deleteTodo', id);  // 自定义事件
        PubSub.publish('deleteTodo', id);
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
