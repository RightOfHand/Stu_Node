
var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var util=require('util');


var urlEncodeParse=bodyParser.urlencoded({extended:false});
app.use('/public', express.static('public'));

app.get('/stu_post_form.html',function(req,res){
    res.sendFile( __dirname + "/" + "stu_post_form.html" );
});
app.post('/process_post',urlEncodeParse,function(req,res){
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(util.inspect(response))
    res.end(JSON.stringify(response));
});

var server = app.listen(10000, 'localhost',function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })
