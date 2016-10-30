const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
function latency(){
	var date = new Date();
	date.setSeconds(date.getSeconds()+5);
	while(date > new Date()){}
};
if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  };
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer(function(req, res) {
	!cluster.worker.id && console.log(cluster.worker+" "+cluster.isMaster);
    res.writeHead(200);
    cluster.worker.id && res.end(""+cluster.worker.id);
	latency();
  }).listen(8000);
}
