# 模拟服务器

**`node环境`搭配`express`，搭建一个本地服务器，模拟打包项目部署**

1. **构建`package.json`**：`npm init`
   > 包名什么的无所谓了，一路回车

2. **安装`express`**：`npm i express`

3. **新建`server.js`主文件**

---

1. **启动服务器：** `node server.js`

2. 把`dist`目录里打包好的所有资源扔进`/static`目录

3. `http://localhost:5005/index.html`，就能实现模拟部署上线了

4. 如果路由器模式是`history`，服务器没它那个路径要的资源，刷新就报**404**

5. **解决办法：**

    - 后端路由匹配

        - 中间件 `connect-history-api-fallback`，专门用于在 nodejs 环境，解决路由模式为 history 情况下，404 的问题
        - `cnpm install connect-history-api-fallback --save`

    - `nginx`中间代理
