// app.js
const Koa = require('koa');
const app = new Koa();

const fs = require('fs')

// const convert = require('koa-convert')
// const loggerGenerator = require('./middleware/logger-genetator')
const loggerAsync = require('./middleware/logger-async')

// app.use(convert(loggerGenerator()))
app.use(loggerAsync())

app.use(async(ctx) => {
  let url = ctx.request.url

  let html = await route(url)
  ctx.body = html

  // ctx.body = url
  // ctx.body = 'hello koa2'
})

function render (page) {
  return new Promise((resolve, reject) => {
    let viewUrl = `./view/${page}`
    fs.readFile(viewUrl, 'binary', (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

async function route(url) {
  let view = '404.html'
  switch (url) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case　'/404':
      view = '404.html'
      break
    default:
      break
  }
  let html = await render(view)
  return html
}

// 服务器端口号：3000
app.listen(3000, () => {
  console.log('koa is starting at port 3000')
});