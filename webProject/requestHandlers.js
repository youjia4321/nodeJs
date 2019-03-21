var exec = require('child_process').exec;
var querystring = require("querystring");
function start(response, postData){
    console.log("Request handler 'start' was called.");
    var body ='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '用户名&nbsp;&nbsp;&nbsp;<input name="username" type="text" ><br>'+
    '密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name="password" type="password" ><br>'+
    '<input type="submit" value="提交" />'+
    '</form>'+
    // '<img src="1.jpeg" width="400" height="400">'+
    '</body>'+
    '</html>';
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
    // exec("ls -lsh", function(error, stdout, stderr){
    //   response.writeHead(200,{"Content-Type":"text/plain"});
    //   response.write(stdout);
    //   response.end();
    // });// 输出当前目录下的文件
    // function sleep(milliSeconds){
    //   var startTime = new Date().getTime();
    //   while(new Date().getTime()< startTime + milliSeconds);//  定义的睡眠函数
    // }

    // sleep(3000);
    // return"Hello Start"; // 等待10s才载入内容
  }
  
// function upload(){
//   console.log("Request handler 'upload' was called.");

//   function sleep(milliSeconds){
//     var startTime = new Date().getTime();
//     while(new Date().getTime()< startTime + milliSeconds);
//   }
  
//   sleep(3000);
//   return"Hello Upload";
// }
function upload(response){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("You've sent: "+ querystring.parse(postData).text);
  response.end();
}
  
exports.start = start;
exports.upload = upload;