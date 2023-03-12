<template>
  <div>
    <h1>我是&lt;App/&gt;: {{ $store.getters.bigSum }}</h1>
    <hr>
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from './components/Counter';

export default {
  name: 'App',
  components: {Counter},
}
</script>

