var http = require('http');
var fs = require("fs");

var server = http.createServer(function (req, res) {
	var file = process.argv[3];
	fs.createReadStream(file).pipe(res) ;
});
server.listen(process.argv[2]);