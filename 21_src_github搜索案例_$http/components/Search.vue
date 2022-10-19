<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model.trim="keyword"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
// import axios from 'axios';

export default {
    name: 'Search',
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        searchUsers() {
            if (!this.keyword) return;

            // 请求之前，先更新List的数据
            this.$bus.$emit('updateListData', {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                users: []
            });

            // github公开的测试接口，没有跨域问题
            /* axios.get(`https://api.github.com/search/users?q=${ this.keyword }`, {
                params: {
                    per_page: 10
                }
            }).then(
                response => {
                    this.$bus.$emit('updateListData', {
                        isLoading: false,
                        errMsg: '',
                        users: response.data.items
                    });
                },
                error => {
                    console.log('请求失败了，', error.message);
                    this.$bus.$emit('updateListData', {
                        isLoading: false,
                        errMsg: error.message,
                        users: []
                    });
                }
            ); */

            // vue1.0使用vue-resource插件比较多
            // 示例：$http替代axios
            this.$http.get(`https://api.github.com/search/users?q=${ this.keyword }`, {
                params: {
                    per_page: 10
                }
            }).then(
                response => {
                    this.$bus.$emit('updateListData', {
                        isLoading: false,
                        errMsg: '',
                        users: response.data.items
                    });
                },
                error => {
                    console.log('请求失败了，', error.message);
                    this.$bus.$emit('updateListData', {
                        isLoading: false,
                        errMsg: error.message,
                        users: []
                    });
                }
            );
        }
    }
}
</script>
