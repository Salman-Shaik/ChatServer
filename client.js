var net = require('net');
var readline=require('readline');
var rl=readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
var client = new net.connect({port:8000, host:'localhost'}, function() {
	console.log('Connected');
	rl.on("line",(input)=>{
		client.write(`${input}`);
	})
});


client.on('data', function(data) {
	console.log(`${data.toString()}`);
});

client.on('close', function() {
	console.log('Connection closed');
});
