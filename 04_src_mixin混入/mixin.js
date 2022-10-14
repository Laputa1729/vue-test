// 混合，复用vue实例选项
export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
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

// 生命周期函数，并存，不互相覆盖
