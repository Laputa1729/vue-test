<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot name="center">插槽1...</slot>
        <slot name="footer">插槽2...</slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title']
}
</script>

<style scoped>
.category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>
