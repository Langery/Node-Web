## Express

### 启用

``` javascript
  node app.js
  // http://localhost:4040
```

### 热更新

&emsp;注：node项目不支持热插拔（~~目前是未支持热插拔，后期再查阅相关资料进行修改~~ 已支持）
``` javascript
  npm install nodemon --save
```
&emsp;修改package.json
``` json
  "scripts": {
    "start": "nodemon ./bin/www"
  },
```
&emsp;启动项目`node app.js`

### pug

&emsp;Link: [Pug 中文文档](https://pug.bootcss.com/api/getting-started.html)

### 计划

- [x] 引入js，调用相关函数
- [x] 配置路由，设置跳转（待优化）
- [ ] 封装函数，实现函数共用
- [ ] 优化页面布局，实现简单的页面逻辑交互
- [ ] 共用`.pug`文件，减少页面加载负荷
- [x] 中间件和中间件栈
- [ ] 管道
- [ ] 处理不同层级之间的位置和交互
