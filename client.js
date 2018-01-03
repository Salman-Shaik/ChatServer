let net = require('net');
let readline=require('readline');
let rl=readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
let client = new net.connect({port:8000, host:'localhost'}, function() {
  console.log('Connected');
  rl.on("line",(input)=>{
  client.write(`${input}`);
 })
});

client.on('data', function(data) {
	console.log(`${data}`);
});

client.on('end', function() {
	console.log('Disconnected From Server');
});

client.on('error',function (e){
  if(e.code=='ECONNREFUSED'){
    console.log('Server Not Ready');
  }
  client.destroy();
})
