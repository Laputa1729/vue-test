<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 函数也能传给子组件 -->
        <!--<Header :addTodo="addTodo"></Header>-->
        <!-- 父给子绑定自定义事件 -->
        <Header @addTodo="addTodo"></Header>
        <List :todos="todos"></List>
        <Footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';

import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {Header, Footer, List},
  data() {
    return {
      /* todos: [
          { id: '001', title: '抽烟', done: true },
          { id: '002', title: '喝酒', done: false },
          { id: '003', title: '开车', done: true },
      ] */
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  watch: {
    /* todos(newValue, oldValue) {
        localStorage.setItem('todos', JSON.stringify(newValue));
    }, */
    // 深度监视
    todos: {
      deep: true,
      handler(val) {
        localStorage.setItem('todos', JSON.stringify(val));
      }
    }
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 勾选
    checkTodo(id) {
      this.todos.forEach((item) => {
        if (item.id === id) item.done = !item.done;
      });
    },
    // 删除，不用的参数用_占位，要注意和lodash区分
    deleteTodo(_, id) {
      this.todos = this.todos.filter(item => {
        return item.id !== id;
      });
    },
    // 全选or取消全选
    checkAllTodo(flag) {
      this.todos.forEach((item) => {
        item.done = flag;
      });
    },
    // 清除已完成
    clearAllTodo() {
      this.todos = this.todos.filter((item) => {
        return !item.done;
      });
    }
  },
  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo);

    this.pid = PubSub.subscribe('deleteTodo', this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off(['checkTodo', 'deleteTodo']);

    PubSub.unsubscribe(this.pid);
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
