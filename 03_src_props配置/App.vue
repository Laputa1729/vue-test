<template>
  <div>
    <!-- 加冒号[动态绑定] -->
    <Student :name="'李四'" :sex="'女'" :age="18"></Student>
    <hr>
    <!-- <Student></Student> -->
    <hr>
    <!-- <Student></Student> -->
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student
  },
}
</script>
