const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {
  let url = ctx.url
  let require = ctx.request
  let req_query = require.query
  let req_querystring = require.querystring

  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000, () => {
  console.log('It is the get request at port 3000')
})