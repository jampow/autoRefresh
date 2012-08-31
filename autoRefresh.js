var fs = require('fs');
var io = require('socket.io').listen(8080);

fs.watch('.', function (event, filename) {
	console.log('foi');
	io.sockets.emit('refresh', {"test": true});
});

// io.sockets.on('refresh', function (socket) {
//   socket.emit('refresh', {});
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });