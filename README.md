# Node-Web

## Learning Note: [NodeJS相关文档](https://www.douban.com/group/topic/35067110/)

## 关于NodeJS启动web服务（Demo项目）

1. 下载项目内容；
2. 启动 git；
3. 执行 node web.js;
4. 页面输入 127.0.0.1:3000/text.html

### 关于web.js文件
&emsp;在页面中确定访问地址及端口号，通过pathname传递url地址实现也页面内容。

### 关于web界面跳转
1.直接链入地址:
``` html
  <a href='/new.html'>new</a>
```
2.通过`index.js`启动`NewWeb.js`

### 其他
&emsp;更新依赖包
``` javascript
  npm install xxx@yy
```
