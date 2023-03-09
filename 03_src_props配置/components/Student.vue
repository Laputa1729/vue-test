<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  // props: ['name', 'sex', 'age'],  // 简单声明接收
  // 类型限制接收
  /* props: {
    name: String,
    age: Number,
    sex: String
  }, */
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 0
    },
    sex: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      msg: 'Laputa',
      myAge: this.age
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  }
}
</script>
