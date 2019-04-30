function Hello(){
    var name;

    this.setName=function(inName){
        name=inName;
    };

    this.sayHello=function(){
        console.log('hello'+name);
    };

};

module.exports=Hello;