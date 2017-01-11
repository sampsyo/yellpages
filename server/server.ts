import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as KoaJSON from 'koa-json';
import * as KoaStatic from 'koa-static';
import * as LowDB from 'lowdb';

const DB_NAME = 'db.json';

const app = new Koa();
app.use(KoaJSON());
app.use(KoaStatic('../client/dist'));

const router = new Router();

const db = new LowDB(DB_NAME);
db.defaults({ projects: [] });

router.get('/data/projects/:id', async (ctx, next) => {
  let id = ctx.params['id'];
  let proj = db.get('projects').find({ id }).value();
  if (proj) {
    ctx.body = proj;
  } else {
    ctx.throw('project not found', 404);
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

let server = app.listen(3000, () => {
  console.log('http://0.0.0.0:%d', server.address().port);
});
