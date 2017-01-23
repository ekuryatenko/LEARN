var http = require('http');
var fs = require('fs');
var through = require('through2');

function write (chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());

    callback();
}

function end (done) {
    done();
}


var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(write, end)).pipe(res);
    }
});
server.listen(process.argv[2]);


// Here's the reference solution:

var http = require('http');
var through = require('through2');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function (buf, _, next) {
            this.push(buf.toString().toUpperCase());
            next();
        })).pipe(res);
    }
    else res.end('send me a POST\n');
});
server.listen(parseInt(process.argv[2]));