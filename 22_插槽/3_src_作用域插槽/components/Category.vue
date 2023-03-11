<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 数据反向传给插槽使用者 -->
    <slot name="test1" :games="games" hello="Hello world.">默认插槽……</slot>
    <slot name="test2" :games="games">默认插槽2……</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    }
  },
}
</script>

<style scoped>
.category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}

h3 {
  text-align: center;
  background-color: orange;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>
