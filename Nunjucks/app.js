const nunjucks = require('nunjucks');
var koa = require('koa');
var app = new koa();

var bodyParser = require('koa-bodyparser');
const controller = require('./controller');

function createEnv(path, opts) {
    var
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

var data = env.render('hello.html', {
    header: 'Hello',
    body: 'Please try again...',
    user: `<br>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>`,
});

app.use(bodyParser());
app.use(controller());
var base = env.render('base.html')
console.log(base);
router.get('/home', async (ctx, next)=>{
    ctx.type = 'text/html';
    ctx.body = data;
});



app.listen(3000);
console.log('server running at: http://127.0.0.1:3000/');