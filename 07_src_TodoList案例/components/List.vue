<template>
  <div>
    <ul class="todo-main">
      <Item
          v-for="(item, index) in todos"
          :key="item.id"
          :todo="item"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo">
      </Item>
    </ul>
  </div>
</template>

<script>
import Item from '../components/Item'

export default {
  name: 'List',
  components: {Item},
  props: ['todos', 'checkTodo', 'deleteTodo']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
