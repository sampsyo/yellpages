import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'hi!';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
