<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red;">拿到了Counter的求和：{{ sum }}</h3>
        <h3>列表中第一个人的姓名是：{{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入名字" v-model.trim="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addServer">添加一个服务器返回的人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personAbout.personList;
        },
        sum() {
            return this.$store.state.counterAbout.sum;
        },
        firstPersonName() {
            return this.$store.getters['personAbout/firstPersonName'];
        }
    },
    methods: {
        add() {
            // commit 联系 mutations
            const personObj = { id: nanoid(), name: this.name };
            this.$store.commit('personAbout/ADD_PERSON', personObj);
            this.name = '';
        },
        addWang() {
            // dispatch 联系 actions
            const personObj = { id: nanoid(), name: this.name };
            this.$store.dispatch('personAbout/addPersonWang', personObj);
            this.name = '';
        },
        addServer() {
            this.$store.dispatch('personAbout/addPersonServer');
        }
    }
}
</script>
