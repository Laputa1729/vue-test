/* 一个微型服务器 */
/* 启动方式：node server */

// 这里要用commonJS模块化
const express = require('express');
// 引入中间件
const history = require('connect-history-api-fallback');

const app = express();

app.use(history()); // 解决路由模式history 404的问题
// 启用中间件，专门指定静态资源
app.use(express.static(__dirname + '/static'));

app.get('/person', (request, response) => {
    response.send({
        name: 'Laputa',
        age: 18,
    });
});

// 配端口
app.listen(5005, (err) => {
    if (!err) console.log('服务器启动成功了！');
});
