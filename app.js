var static = require('node-static');
var http   = require('http');
// create new static server and serve the ./public directory

// var file = new (static.Server)('./public');
var file = new(static.Server)('./public');
http.createServer(function(request,response){
	request.addListener("end", function(){
		// server files ..
		console.log(file);
		file.serve(request,response);
	});
}).listen(8080, function(){
	console.log("Now serving files @localhost:8080");
});
