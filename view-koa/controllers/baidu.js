// index:

module.exports = {
    'GET /baidu': async (ctx, next) => {
        ctx.render('baidu.html', {
            title: '百度',
            name: 'Mr Node',
        });
    }
};