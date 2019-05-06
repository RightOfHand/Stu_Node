var mysql=require('mysql');

class UserDao{
    queryUser(name,pwd,cb1,cb2){
        var connection=mysql.createConnection({
            host : 'localhost',
            port : '3306',
            user : 'root',
            password : '111111',
            database : 'node_test'
        
        });
         connection.connect();
        
         var selectSql='SELECT * FROM table_user_password where name=? and pwd=?';
         var addSqlParam=[name,pwd];
        
         connection.query(selectSql,addSqlParam,function(err,result){
            if(result!='undefined' && result.length!=0){
                cb1();
            }
            else{		      
                cb2();
            }
              console.log(result);
         });
         connection.end();

    };

};

module.exports=UserDao;