<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- query参数 -->
                <!--<router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{ item.title }}</router-link>&nbsp;&nbsp;-->

                <!--  to的对象写法  -->
                <router-link :to="{
                    path: '/home/message/detail',
                    query: {
                        id: item.id,
                        title: item.title
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
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
            ]
        }
    },
}
</script>
