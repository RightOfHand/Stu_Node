
var util = require('util');

function Base(){
    this.name='songy';
    this.age='27';
    this.sayHello=function(){
        console.log('say hello'+this.name);
    };
}

Base.prototype.showName=function(){
    console.log(this.name);
};

function Sub(){
    this.name="sub";
}

util.inherits(Sub,Base);

var objBase=new Base();
objBase.sayHello();
objBase.showName();
console.log(objBase);

var objSub=new Sub();
objSub.showName();

//只能继承原型中定义的函数
// objSub.sayHello();
console.log(objSub);

