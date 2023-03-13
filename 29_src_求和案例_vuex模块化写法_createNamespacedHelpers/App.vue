<template>
  <div>
    <!--<h1>我是&lt;App/&gt;: {{ $store.getters['aaa/bigSum'] }}</h1>-->
    <h1>我是&lt;App/&gt;: {{ bigSum }}</h1>
    <hr>
    <Counter></Counter>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
import Counter from './components/Counter';
import Person from './components/Person';

import {createNamespacedHelpers} from 'vuex';
const {mapGetters: mapGettersFromModuleA} = createNamespacedHelpers('aaa');

export default {
  name: 'App',
  components: {Counter, Person},
  computed: {
    ...mapGettersFromModuleA(['bigSum'])
  }
}
</script>

