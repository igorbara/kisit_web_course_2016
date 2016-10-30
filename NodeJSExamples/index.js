// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<h1>Hello World</h1>");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


var arr = [1,2,3,4,5,6,7,8,9,0];

asyncForEach(arr, latency);

function asyncForEach(array, callback) {
	function process(idx) {
		callback(array[idx]);
		if(array[idx+1] !== undefined) {  
			setTimeout(function(){
				process(idx+1)
			}, 0);
		}
	}
	process(0);
}

function addUser(usrObj){
	//asynk
	return Promsie;
}


var res = addUser({name: "Vasia"});
res.then(function(err, status){
}).then();;
var res = addUser({name : "Vasia"});

for(...) {
	res.then(function(err, status){
		addUser(array[i])
	})
}



function latency(item){
	var date = new Date();
	date.setSeconds(date.getSeconds()+1);
	while(date > new Date()){}
	console.log(item);
};







