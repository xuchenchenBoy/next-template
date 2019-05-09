# SSR（React)
React的服务端渲染模板

## Script
`npm run dev` 本地调试

`npm run build` 构建 

## Structure
```
+-- components                         组件
+-- model                              数据层
|   -- index.js                           数据注册
|   -- reducer.js                         state管理
|   -- saga.js                            业务逻辑管理
|   -- types.js                           类型定义
+-- pages                              页面
+-- services                           请求服务
+-- static                             静态文件
+-- store                              数据管理层
+-- styles                             样式
+-- utils                              工具类
+-- dist                               服务端和客户端打包文件
+-- ecosytem.config.js                 pm2 配置
+-- next.config.js                     next 配置(webpack)
+-- postcss.config.js                  postcss 配置
+-- server.js                          自定义服务配置
+-- .gitignore
+-- package.json
+-- READMD.md
```

## what's included?
* React
* Redux
* Less
* Autoprefixed CSS
* Css Module
* Code Split


更多配置请查看 [NEXT](http://nextjs.frontendx.cn/)