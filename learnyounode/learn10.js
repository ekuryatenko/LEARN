var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
    var strftimeCEST = strftime.timezone(120);
    var date = "" + strftimeCEST('%F %R', new Date()) + '\n';

    socket.end(date);
});

server.listen(process.argv[2]);