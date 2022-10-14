<template>
	<div>
		<h1 ref="title" v-text="msg"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的dom元素</button>
		<School ref="sch"></School>
	</div>
</template>

<script>
//引入组件
import School from '@/components/School.vue'

export default {
	name: 'App',
	components: {
		School,
	},
	data() {
		return {
			msg: '欢迎传说中的勇者！'
		}
	},
	methods: {
		showDOM() {
			console.log(this.$refs);
		}
	}
}
</script>
