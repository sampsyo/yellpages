import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'hi!';
});

app.use(router.routes());
app.use(router.allowedMethods());

let server = app.listen(3000, () => {
  console.log('http://0.0.0.0:%d', server.address().port);
});
