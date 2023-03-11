<template>
  <div>
    <ul>
      <li v-for="(item, index) in messageList" :key="item.id">
        <!-- 路由跳转并携带params参数，to的字符串写法 -->
        <router-link :to="`/home/message/detail/${ item.id }/${ item.title }`">{{ item.title }}</router-link>

        <!-- params参数，to的对象写法 -->
        <router-link :to="{
          // path: '/home/message/detail',
          name: 'xiangqing',  // ★携带params参数，不能用path，必须用name
          params: {
            id: item.id,
            title: item.title,
          }
        }">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    }
  }
}
</script>
