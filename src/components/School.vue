<template>
	<div>
		<h2 @click="showName">学校姓名：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
// 把showName方法抽出来，公用
import { mixin } from '@/mixin'

export default {
	name: 'School',
	data() {
		return {
			name: 'Laputa',
			address: 'Sky'
		}
	},
	mixins: [mixin]
	/* methods: {
		showName() {
			alert(this.name)
		}
	} */
}
</script>
