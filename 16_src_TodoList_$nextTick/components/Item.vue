<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
          type="text"
          ref="targetInput"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
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
        PubSub.publish('deleteTodo', id);
      }
    },
    handleEdit(todo) {
      // 新加的属性不是响应式的，要用Vue.set()
      // todo.isEdit = true;
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true;
      } else {
        this.$set(todo, 'isEdit', true);
      }

      // 要走完所有逻辑，才重新解析template
      // 所以要用
      this.$nextTick(function () {
        this.$refs.targetInput.focus();
      });
      // 下一次dom更新完毕，执行回调。
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert('输入不能为空！');
      this.$bus.$emit('updateTodo', todo.id, e.target.value);
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
