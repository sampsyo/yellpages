import * as Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'hi!';
});

app.listen(3000);
