<template>
	<div>
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
import School from '@/components/Header.vue'
import Student from '@/components/Footer.vue'

export default {
	name: 'App',
	components: {
		School,
		Student
	},
}
</script>
