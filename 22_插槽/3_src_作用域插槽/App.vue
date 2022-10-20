<template>
    <div class="container">

        <!--
            【作用域插槽】
            数据反着传给了插槽的使用者
        -->

        <Category title="游戏">
            <template v-slot="obj">
                <ul>
                    <li v-for="(item, index) in obj.games" :key="index">{{ item }}</li>
                </ul>
            </template>
        </Category>

        <Category title="游戏">
            <!-- 解构赋值 -->
            <template v-slot="{ games, msg }">
                <ol>
                    <li style="color: red;" v-for="(item, index) in games" :key="index">{{ item }}</li>
                </ol>
                <h4>{{ msg }}</h4>
            </template>
        </Category>

        <Category title="游戏">
            <template v-slot="obj">
                <h4 v-for="(item, index) in obj.games" :key="index">{{ item }}</h4>
            </template>
        </Category>

    </div>
</template>

<script>
import Category from '@/components/Counter';

export default {
    name: 'App',
    components: { Category },
}
</script>

<style>
.container, .foot {
  display: flex;
  justify-content: space-around;
}
h4 { text-align: center; }
</style>
