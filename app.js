const Koa = require('koa'),
      json = require('koa-json'),
      logger = require('koa-logger'),
      bodyparser = require('koa-bodyparser');
const router = require('koa-router')(),
      auth = require('./server/routes/auth');

const app = new Koa();

app.use(bodyparser());
app.use(json());
app.use(logger());

app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start; 
  console.log('%s %s - %s', ctx.request.method, ctx.request.url, ms);
})

app.on('error', (ctx, err) => {
  console.log('server error', err);
})

router.use('/auth', auth.routes());

app.use(router.routes());

app.listen(8887, () => {
  console.log('Koa server is started in 8887');
})

module.exports = app;