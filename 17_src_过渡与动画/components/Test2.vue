<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">你好哇！</h1>
      <h1 v-show="isShow" key="2">Laputa！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
}

.hello-enter-active, .hello-leave-active {
  transition: .5s linear;
}

/* 进入的起点 */
.hello-enter {
  transform: translateX(-100%);
}

/* 进入的终点 */
.hello-enter-to {
  transform: translateX(0);
}

/* 离开的起点 */
.hello-leave {
  transform: translateX(0);
}

/* 离开的终点 */
.hello-leave-to {
  transform: translateX(-100%);
}
</style>
