const fs = require('fs');
function addMapping(router, mapping) {
    // console.log(mapping); 输出结果 { 'GET /hello/:name': [AsyncFunction: fn_hello] }
    for (var url in mapping) {
        // console.log(mapping[url]); [AsyncFunction: fn_signin]  对应url的功能
        if (url.startsWith('GET ')) {  //以get开始的
            var path = url.substring(4);  // 取从下标4以后的值:url
            // console.log(path); /hello/:name
            router.get(path, mapping[url]);
            console.log(`registered URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`registered URL mapping: POST ${path}`);
        } else { 
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router ,dir) {
    var files = fs.readdirSync(dir);
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    }
}

module.exports = function (dir) {
    let
        controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        Router = require('koa-router');
        router = new Router();
    addControllers(router, controllers_dir);
    return router.routes();
};