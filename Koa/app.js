// app.js
const Koa = require('koa');
const app = new Koa();

// const convert = require('koa-convert')
// const loggerGenerator = require('./middleware/logger-genetator')
const loggerAsync = require('./middleware/logger-async')

// app.use(convert(loggerGenerator()))
app.use(loggerAsync())

app.use(async(ctx) => {
  ctx.body = 'hello koa2'
})

// 服务器端口号：3000
app.listen(3000, () => {
  console.log('koa is starting at port 3000')
});