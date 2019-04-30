 
 var http=require('http');

 function onRequest(request,response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('server send to client hello world!');
 }

 http.createServer(onRequest).listen(10000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:10000/');