import * as Koa from 'koa';

const app = new Koa();

app.use(function* (ctx): Iterable<void> {
  ctx.body = 'hi!';
});

app.listen(3000);
