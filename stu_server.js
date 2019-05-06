 
 var http=require('http');
 var fs=require('fs');
 var url=require('url');


 
 function onRequest(request,response){
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
   
    // 输出请求的文件名
    console.log("Request for " + pathname + " received  conetnt "+ pathname.substr(1,pathname.length-1));
    
    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1,pathname.length-1), function (err, data) {
       if (err) {
          console.log(err);
          // HTTP 状态码: 404 : NOT FOUND
          // Content Type: text/html
          response.writeHead(404, {'Content-Type': 'text/html'});
       }else{             
          // HTTP 状态码: 200 : OK
          // Content Type: text/html
          response.writeHead(200, {'Content-Type': 'text/html'});    
          
          // 响应文件内容
          response.write(data.toString());        
       }
       //  发送响应数据
       response.end();
    });
 }

http.createServer(onRequest).listen(10000);

