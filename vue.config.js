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
  //   index: {
  //     entry: 'src/main123.js',
  //   }
  // }

  // 【方式一】
  // 开启代理服务器 (解决跨域问题用) [https://cli.vuejs.org/zh/config/#devserver-proxy]
  // 简单，但只能配1个，不能配置多个代理
  /* devServer: {
      proxy: 'http://localhost:5000'  // 转发给目标服务器
  }, */

  // 【方式二】
  devServer: {
    proxy: {
      // 只要配了前缀，就一定帮你转发
      '/laputa': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/laputa': '' },  // 路径重写，把前缀过滤掉，才能从目标服务器拿到正确结果
        // ws: true,  // 开启websocket
        changeOrigin: true  // 用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },  // 路径重写，把前缀过滤掉，才能从目标服务器拿到正确结果
        // ws: true,  // 开启websocket
        changeOrigin: true  // 用于控制请求头中的host值，向目标服务器撒谎自己是5001
      },
      // '/foo': {
      //     target: '<other_url>'
      // }
    }
  }

});
