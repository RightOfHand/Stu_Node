
var event=require('events');

var eventEmitter=new event.EventEmitter();

// var connectedHandler= function connected(){
//     console.log('链接成功');
// }


eventEmitter.on('connect',function(arg1){
     console.log('连接',arg1)
});

setTimeout(function(){
    eventEmitter.emit('connect','arg1');
},3000);

console.log('done');

