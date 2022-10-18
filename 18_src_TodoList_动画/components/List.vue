<template>
    <div>
        <ul class="todo-main">
            <transition-group name="hello" appear>
                <Item
                    v-for="(item, index) in todos"
                    :key="item.id"
                    :todo="item">
                </Item>
            </transition-group>
        </ul>
    </div>
</template>

<script>
import Item from '@/components/Item'

export default {
    name: 'List',
    components: { Item },
    props: ['todos']
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
/* 动画 */
.hello-enter-active {
  animation: test1 .5s linear;
}
.hello-leave-active {
  animation: test1 .5s linear reverse;
}
@keyframes test1 {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
