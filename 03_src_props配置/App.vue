<template>
	<div>
		<Student :name="'李四'" :sex="'女'" :age="18"></Student>
		<hr>
		<!-- <Student></Student> -->
		<hr>
		<!-- <Student></Student> -->
	</div>
</template>

<script>
import Student from '@/components/Footer.vue'

export default {
	name: 'App',
	components: {
		Student
	},
}
</script>
