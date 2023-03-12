<template>
  <div>
    <h1>我是&lt;App/&gt;: {{ $store.getters.bigSum }}</h1>
    <hr>
    <Counter></Counter>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
import Counter from './components/Counter';
import Person from './components/Person';

export default {
  name: 'App',
  components: {Counter, Person},
}
</script>

