<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="backFn">后退</button>
      <button @click="forwardFn">前进</button>
      <button @click="test">测试一下go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  methods: {
    backFn() {
      this.$router.back();
    },
    forwardFn() {
      this.$router.forward();
    },
    test() {
      this.$router.go(-2);
    }
  }
}
</script>
