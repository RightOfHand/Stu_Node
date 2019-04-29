 
 var http=require('http');

 http.createServer(function(request,response){
     response.writeHead(200,{'Content-Type': 'text/plain'});
     response.end('server send to client hello world!');
 }).listen(10000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:10000/');