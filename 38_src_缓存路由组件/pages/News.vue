<template>
  <div>
    <ul>
      <li>news001<input type="text"></li>
      <li>news002<input type="text"></li>
      <li>news003<input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  beforeDestroy() {
    console.log('<News/>即将被销毁……')
  }
}
</script>
