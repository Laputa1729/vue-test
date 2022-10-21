<template>
    <div>
        <Counter></Counter>
    </div>
</template>

<script>
import Counter from '@/components/Counter';

export default {
    name: 'App',
    components: { Counter },
    mounted() {
        // console.log('App', this)
    }
}
</script>

