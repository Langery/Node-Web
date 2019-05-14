# Node-Web

## Learning Note: [NodeJS相关文档](https://www.douban.com/group/topic/35067110/)

## 关于NodeJS启动web服务（Demo项目）
1. 下载项目内容；
2. 启动git；
3. 执行 node web.js;
4. 页面输入 127.0.0.1:3000/text.html

### 关于web.js文件
&emsp;在页面中确定访问地址及端口号，通过pathname传递url地址实现也页面内容。

### 关于web界面跳转
1.直接链入地址:
```
  <a href='/new.html'>new</a>
```
2.通过`index.js`启动`NewWeb.js`

## Express

&emsp;*注：node项目不支持热插拔（目前是未支持热插拔，后期再查阅相关资料进行修改）*

> 启动

```
  node app.js
```

