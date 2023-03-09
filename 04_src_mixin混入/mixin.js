// 混合，复用vue实例选项
export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  // 混合生命周期钩子，并存，不覆盖
  mounted() {
    console.log('你好啊！');
  }
};

// 私有data的优先级最高
export const mixin2 = {
  data() {
    return {
      x: 100,
      y: 200,
    };
  },
};
