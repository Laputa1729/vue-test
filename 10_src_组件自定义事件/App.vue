<template>
  <div class="app">
    <h1>{{ msg }}学生姓名是:{{ studentName }}</h1>

    <!-- 通过父组件给子组件【传】递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件【绑】定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @testtttt="getStudentName" @demo="m1"/> -->

    <!-- 通过父组件给子组件【绑】定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: '你好啊！',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名：', name)
    },
    getStudentName(name, ...args) {
      console.log('App收到了学生名：', name, args)
      this.studentName = name
    },
    m1() {
      console.log('demo事件被触发了！')
    },
    show() {
      alert(123)
    }
  },
  mounted() {
    this.$refs.student.$on('testtttt', this.getStudentName);  // 绑定自定义事件
    // this.$refs.student.$once('testtttt',this.getStudentName);  // 绑定自定义事件（一次性）

    // Error示例：
    /*
      这里回调函数里的this并不是<App/>，要出错。
      事件由谁触发，this就指向谁，故而这里的this指向<Student/>组件实例对象。
      怎么改？
          1.如 line:45
          2.写成箭头函数，箭头函数没有自己的this，开始往外找，找到（mounted）的 this === <App/>组件实例对象
    */
    /*
    this.$refs.student.$on('testtttt', function (name, ...args) {
      console.log('App收到了学生名：', name, args)
      this.studentName = name
    });
    */
  },
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
