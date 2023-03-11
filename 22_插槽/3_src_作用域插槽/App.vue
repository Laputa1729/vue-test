<template>
  <div class="container">
    <!--
      【作用域插槽】
      数据反着传给了插槽的使用者
    -->
    <Category title="游戏">
      <!-- 必须包裹template才能收到插槽反向传过来的数据 -->
      <template scope="testObj" slot="test1">
        {{ testObj }}
        <ul>
          <li v-for="(item, index) in testObj.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!--
        解构赋值
        let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
        foo // "aaa"
      -->
      <template scope="{games}" slot="test2">
        <ol>
          <li v-for="(item, index) in games" :key="index" style="color: red;">{{ item }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{games}" slot="test2">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
  name: 'App',
  components: {Category},
}
</script>

<style>
.container, .foot-box {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
