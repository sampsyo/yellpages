import * as koa from 'koa';

const app = koa();

app.use(function *(): Iterable<void> {
  this.body = 'Hi!';
});

app.listen(3000);
