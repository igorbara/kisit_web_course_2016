var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('socketClient.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on("sendMessage", function(msg){
	socket.broadcast.emit("getMessage", msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});