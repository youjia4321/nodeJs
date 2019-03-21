var koa = require('koa');
var app = new koa();
var bodyParser = require('koa-bodyparser');  // 处理post请求需要的包
const controller = require('./controllers'); // 把扫描controllers目录和创建router的代码从app.js中提取出来，作为一个简单的middleware使用，命名为controllers.js

console.log('server running at: http://127.0.0.1:3000/');

app.use(bodyParser());
app.use(controller());
app.listen(3000);

