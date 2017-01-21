<<<<<<< HEAD
var http = require('http');
var fs = require("fs");

var server = http.createServer(function (req, res) {
	var file = process.argv[3];
	fs.createReadStream(file).pipe(res) ;
});
=======
var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
    var strftimeCEST = strftime.timezone(120);
    var date = "" + strftimeCEST('%F %R', new Date()) + '\n';

    socket.end(date);
});

>>>>>>> d8838c78cd098123a832c3db1e0398b0244d56c6
server.listen(process.argv[2]);