
var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var UserDao=require('./UserDao');



var urlEncodeParse=bodyParser.urlencoded({extended:false});

app.get('/stu_post_form.html',function(req,res){
    res.sendFile( __dirname + "/" + "stu_post_form.html" );
});
app.post('/process_post',urlEncodeParse,function(req,res){
    var response = {
        "name":req.body.name,
        "pwd":req.body.pwd
    };
    var userDao=new UserDao();
    userDao.queryUser(req.body.name,req.body.pwd,function(){
        res.end(JSON.stringify(response));
    },function(){
       res.send('用户不存在!!!');
    })
    
    
});

var server = app.listen(10000, 'localhost',function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })
