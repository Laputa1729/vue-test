<template>
    <div>
        <Counter></Counter>
        <hr>
        <Person></Person>
    </div>
</template>

<script>
import Counter from '@/components/Counter';
import Person from '@/components/Person';

export default {
    name: 'App',
    components: { Counter, Person },
    mounted() {
        // console.log('App', this)
    }
}
</script>

