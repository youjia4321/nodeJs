// 连接池创建
var pg = require('pg');

// 数据库配置
var config = {
    user:"postgres",
    database:"nodejs",
    password:"postgres",
    port:5432,

    // 扩展属性
    max:20, // 连接池最大连接数
    idleTimeoutMillis:3000, // 连接最大空闲时间 3s
}

var pool = new pg.Pool(config);
pool.connect(function(err, client, done) {
    if(err) {
      return console.error('数据库连接出错', err);
    }
    // 简单输出个 Hello World
    client.query("select * from test", function(err, result) {
      done();// 释放连接（将其返回给连接池）
      if(err) {
        return console.error('查询出错', err);
      }
      for(var i=0; i<result.rows.length; i++){
        console.log(result.rows[i].name, result.rows[i].age);
      }
    });
  });
