var http=require('http');
var url=require('url');
var queryStr=require('querystring');

function start(router){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request received url: " + request.url);
        var arg=url.parse(request.url).query;
        var params=queryStr.parse(arg)["foo"];

       console.log("Request for " + pathname + " received");
       console.log("Request for param" + params);

       
       router(pathname);
        response.writeHead(200,{'Content-Type': 'text/plain'});
        response.end('server send to client hello world!');
     }
    
     http.createServer(onRequest).listen(10000);
}
exports.start=start;

