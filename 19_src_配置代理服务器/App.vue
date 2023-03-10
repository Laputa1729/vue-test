<template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    getStudents() {
      /*
      * ★跨域问题★
      *
      * 1. 服务器和客户端之间，[协议]、[主机名]、[端口号]，3者中，1个不一样，就违反同源策略，就构成跨域。`No 'Access-Control-Access-Origin' header...`
      *
      *
      * ★解决方案★
      * 1. cors，后端人员主动配置服务器，让服务端的返回结果携带了几个特殊的响应头，客户端读到对应响应头，主动放行，返回结果就拿到了。
      * 2. jsonp，借助<script>标签的src属性，引入外部资源，利用它不受同源策略限制的特性，用的少，只能解决GET，POST不行。
      * 3. proxy-server 代理服务器。
      *        -服务器与服务器之间打交道，就不存在客户端与服务器之间的问题了。
      *        -反向代理服务器：nginx、vue-cli
      *
      **/

      // 跨域了，[端口号]和客户端不一样，违反同源策略，就构成跨域
      // axios.get('http://localhost:5000/students')

      // axios.get() 返回的是一个 Promise 对象

      // 请求代理服务器8080，帮你转发请求到目标服务器5000
      axios.get('http://localhost:8080/laputa/students').then(
          response => {
            console.log('请求成功了，', response.data);
          },
          error => {
            console.log('请求失败了，', error.message);
          }
      );
    },
    getCars() {
      axios.get('http://localhost:8080/demo/cars').then(
          response => {
            console.log('请求成功了，', response.data);
          },
          error => {
            console.log('请求失败了，', error.message);
          }
      );
    }
  }
}
</script>
