var fs=require('fs');

//阻塞式
// var data=fs.readFileSync('input.txt');
// console.log(data.toString());

//NIO
fs.readFile('input.txt',function(erro,data){
  if(erro) return console.log(erro);
  console.log(data.toString());
});
console.log('done');