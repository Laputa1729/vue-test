<template>
  <div class="row">
    <div class="card" v-show="info.users.length" v-for="item in info.users" :key="item.id">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px" alt=""/>
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>

    <h1 v-show="info.isFirst">Welcome!</h1>

    <h1 v-show="info.isLoading">Loading....</h1>

    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: '',
        users: []
      }
    }
  },
  mounted() {
    this.$bus.$on('updateListData', (dataObj) => {
      // 对象扩展运算符，通过字面量形式合并对象
      this.info = {...this.info, ...dataObj};
    });
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
