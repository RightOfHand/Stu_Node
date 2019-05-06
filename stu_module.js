function Hello(){
    var name;
    var url;

    this.setName=function(inName){
        name=inName;
    };

    this.setUrl=function(inURl){
        url=inURl;
    }

    this.sayHello=function(){
        console.log('hello'+name);
    };

};

module.exports=Hello;