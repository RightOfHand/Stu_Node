var mysql=require('mysql');

var connection=mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '111111',
    database : 'node_test'

});
 connection.connect();




 var selectSql='SELECT * FROM table_user_password';

 connection.query(selectSql,function(err,result){
      if(err){
          console.log(err.message);
          return;
      }
      console.log(result);
 });
 connection.end();


