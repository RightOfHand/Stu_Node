
var fs=require('fs');
var data='';
var readStream=fs.createReadStream('input.txt');
readStream.setEncoding('utf8');
readStream.on('data',function(chunk){
         data+=chunk;
});
readStream.on('end',function(){
    console.log(data);
});
readStream.on('error',function(err){
    console.log(err.stack);
});
console.log('read done');

 var outData='要写些什么呢? 革命尚未成功,同志尚需努力';

 var writeFile=fs.createWriteStream('output.txt');
 writeFile.write(outData,'utf8');
 writeFile.end();

 writeFile.on('finish',function(){
    console.log('write done')
 });

 writeFile.on('error',function(err){
      console.log(err.stack);
 });

 console.log('stream done');