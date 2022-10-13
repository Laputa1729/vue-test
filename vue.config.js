/*
 * 自定义配置vue-cli脚手架
 * note: 这个配置输出给webpack使用
 */

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 关闭语法检查
    // 示例：配置入口文件
    // pages: {
    //     index: {
    //         entry: 'src/main123.js',
    //     }
    // }
});
