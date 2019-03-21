var koa = require('koa');
var app = new koa();
app.use(bodyParser());
var Router = require('koa-router');
var router = new Router();

// app.use(async (ctx, next)=> {
//     await next();
//     ctx.tpye = 'text/plain';
//     ctx.body = '<h1>hello, koa2</h1>';
// });

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
//     console.log('X-Response-Time', `${ms}ms`)
//   });

// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}`);
//   });

// app.use(async (ctx, next)=>{
//     await next();
//     ctx.tpye = 'text/plain';
//     ctx.body = '<h1>hello, koa2 i am koa1</h1>';
//     console.log('hello, koa2 i am koa1');
// });


router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.type = 'text/html';
    ctx.body = '<h1>hello, koa2</h1>'
})

// add router middleware:
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
