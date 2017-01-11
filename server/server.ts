import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as LowDB from 'lowdb';

const DB_NAME = 'db.json';

const app = new Koa();
const router = new Router();
const db = new LowDB(DB_NAME);

db.defaults({ projects: [] });

router.get('/', async (ctx, next) => {
  ctx.body = 'hi!';
  console.log(db.get('projects').value());
});

app.use(router.routes());
app.use(router.allowedMethods());

let server = app.listen(3000, () => {
  console.log('http://0.0.0.0:%d', server.address().port);
});
