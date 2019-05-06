var http = require('http');
var querystring = require('querystring');
var util=require('util');

 
var postHTML = 
  '<html><head><meta charset="utf-8"><title> Node.js REQUEST POST实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  'name： <input name="name"><br>' +
  'address ： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';


 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据

        res.write("name：" + body.name);
        res.write("<br>");
        res.write("个人域名：" + body.url);
    } else {  // 输出表单
        // res.write(postHTML);
    }
    res.end();
  });
}).listen(10000);