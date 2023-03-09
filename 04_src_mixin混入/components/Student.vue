<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
// 局部混合，把showName方法抽出来，公用
import {mixin, mixin2} from '../mixin'

export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男',
      x: 666
    }
  },
  mixins: [mixin, mixin2]
  /* methods: {
    showName() {
      alert(this.name)
    }
  } */
}
</script>
