<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- params参数 -->
                <!--<router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{ item.title }}</router-link>&nbsp;&nbsp;-->

                <!-- to的对象写法 -->
                <router-link :to="{
                    name: 'xiangqing',
                    query: {
                        id: item.id,
                        title: item.title
                    }
                }">
                    {{ item.title }}
                </router-link>
                <button @click="pushShow(item)">push查看</button>
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
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
            ]
        }
    },
    methods: {
        pushShow(obj) {
            this.$router.push({
                name: 'xiangqing',
                query: {
                    id: obj.id,
                    title: obj.title
                }
            });
        },
        replaceShow(obj) {
            this.$router.replace({
                name: 'xiangqing',
                query: {
                    id: obj.id,
                    title: obj.title
                }
            });
        },
    }
}
</script>
