<template>
  <div>
    <ul>
      <li v-for="(item, index) in messageList" :key="item.id">
        <!-- 路由跳转并携带params参数，to的字符串写法 -->
        <!--<router-link :to="`/home/message/detail/${ item.id }/${ item.title }`">{{ item.title }}</router-link>-->

        <!-- params参数，to的对象写法 -->
        <router-link :to="{
          // path: '/home/message/detail',
          name: 'XiangQing',  // ★携带params参数，不能用path，必须用name
          params: {
            id: item.id,
            title: item.title,
          }
        }">
          {{ item.title }}
        </router-link>
        <button @click="pushShow(item)">push查看</button> <!-- 函数实现<router-link>跳转的效果 -->
        <button @click="replaceShow(item)">replace查看</button>
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
  },
  methods: {
    pushShow(m) {
      // console.log(this.$router)
      // this.$router.push(`/home/message/detail/${m.id}/${m.title}`, () => {});
      this.$router.push({
        name: 'XiangQing',  // ★携带params参数，不能用path，必须用name
        params: {
          id: m.id,
          title: m.title,
        }
      })

      /*
      * 重复点击路由报错：[https://blog.csdn.net/Vest_er/article/details/127094210]
      * vue-router3.0版本以上，.push() / .replace() 返回的是一个 Promise。
      * 而Promise的回调函数resolve和reject，必须传其中一个，否则会报错。
      * */
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'XiangQing',  // ★携带params参数，不能用path，必须用name
        params: {
          id: m.id,
          title: m.title,
        }
      })
    }
  },
  beforeDestroy() {
    // console.log('<Message/>即将被销毁……')
  }
}
</script>
